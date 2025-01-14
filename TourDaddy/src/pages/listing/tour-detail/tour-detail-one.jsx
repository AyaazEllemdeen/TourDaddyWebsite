import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { FiCamera, FiMapPin } from "../../../assets/icons/vander";

export default function TourDetailOne() {
    const [images, setImages] = useState([]);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [availability, setAvailability] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState(""); // Define selectedDate state
    const [quantities, setQuantities] = useState({}); // State to track quantities for each price option

    const location = useLocation();
    const lastPart = location.pathname.split("/").pop();

    // Fetch product details
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:1337/api/bookings");
                const products = response.data.products || [];
                const matchedProduct = products.find((product) => product.productCode === lastPart);

                if (matchedProduct) {
                    setProduct(matchedProduct);
                    setImages(matchedProduct.images.map((img) => img.thumbnailUrl));
                } else {
                    setError(`No product found for code: ${lastPart}`);
                }
            } catch (err) {
                console.error("Error fetching product:", err.message || err.response);
                setError("Failed to fetch product data");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [lastPart]);

    // Fetch availability data
    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/availability`);
                const productAvailability = response.data.productsAvailability || [];
                const matchedProductAvailability = productAvailability.find(
                    (item) => item.productCode === lastPart
                );

                if (matchedProductAvailability) {
                    const sessions = matchedProductAvailability.availability.sessions || [];
                    const dates = [];
                    const times = [];

                    sessions.forEach((session) => {
                        const date = session.startTimeLocal.split(" ")[0]; 
                        const time = session.startTimeLocal.split(" ")[1]; 

                        // Group unique dates
                        if (!dates.includes(date)) {
                            dates.push(date);
                        }

                        // Group unique times for each date
                        if (!times[date]) {
                            times[date] = [];
                        }
                        times[date].push(time);
                    });

                    setAvailableDates(dates);
                    setAvailableTimes(times);
                } else {
                    setError("No availability data found for the product");
                }
            } catch (err) {
                console.error("Error fetching availability:", err.message || err.response);
                setError("Failed to fetch availability data");
            }
        };

        fetchAvailability();
    }, [lastPart]);

    const handleClick = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };

    // Handle date change
    const handleDateChange = (e) => {
        const selectedDate = e.target.value; 
        setSelectedDate(selectedDate); 
    };

    // Handle quantity change
    const handleQuantityChange = (e, optionId) => {
        const newQuantity = e.target.value;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [optionId]: newQuantity,
        }));
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        return product.priceOptions.reduce((total, option) => {
            const quantity = quantities[option.id] || 0;
            return total + option.price * quantity;
        }, 0);
    };

    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light" />
            <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">
                            {product?.name || "Tour Details"}
                        </h3>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-24 grid-cols-1 gap-6">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="grid grid-cols-12 gap-4">
                                {images.map((img, index) => (
                                    <div key={index} className={`md:col-span-${index % 2 === 0 ? 8 : 4} col-span-7`}>
                                        <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                            <img
                                                src={img}
                                                className="w-full lg:h-60 md:h-44 h-48 object-cover"
                                                alt={`Image ${index + 1}`}
                                            />
                                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                                <Link
                                                    to="#"
                                                    onClick={() => handleClick(index)}
                                                    className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"
                                                >
                                                    <FiCamera className="size-4 align-middle"></FiCamera>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h5 className="text-2xl font-semibold mt-5">{product?.name || "Tour Details"}</h5>

                            <div className="mt-6">
                                <h5 className="text-lg font-semibold">Description:</h5>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error}</div>
                                ) : product ? (
                                    <div className="text-slate-600 mt-3">
                                        {product.description === "No description available" ? (
                                            <p>{product.description}</p>
                                        ) : (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(product.description),
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                ) : (
                                    <div>No product data available</div>
                                )}
                            </div>

                            <div className="mt-10">
                                <h5 className="text-lg font-semibold">Booking Details:</h5>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error}</div>
                                ) : product ? (
                                    <div className="bg-gray-50 p-6 rounded-md shadow-md mt-4">
                                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                        <p className="text-sm text-gray-600">Product Code: {product.productCode}</p>

                                        <h3 className="mt-4 text-md font-medium">Price Options:</h3>
                                        <ul className="list-disc pl-6 mt-2">
                                            {product.priceOptions.map((option) => (
                                                <li key={option.id} className="text-slate-700 mt-2 flex items-center">
                                                    <strong>{option.label}:</strong> ${option.price}
                                                    <label className="ml-4 text-slate-700">Quantity:</label>
                                                    <select
                                                        className="ml-2 p-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        value={quantities[option.id] || 0}
                                                        onChange={(e) => handleQuantityChange(e, option.id)}
                                                    >
                                                        {[...Array(21).keys()].map((value) => (
                                                            <option key={value} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Total Price */}
                                        <div className="mt-6">
                                            <h3 className="text-md font-medium mb-2">Total Price:</h3>
                                            <div className="text-lg font-semibold">${calculateTotalPrice()}</div>
                                        </div>

                                        <div className="mt-6">
                                            <h3 className="text-md font-medium mb-2">Select Booking Date and Time:</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Date:</label>
                                                    <select
                                                        onChange={handleDateChange}
                                                        className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        <option value="">Select Date</option>
                                                        {availableDates.map((date) => (
                                                            <option key={date} value={date}>
                                                                {date}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Departure time:</label>
                                                    <select className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                        {selectedDate &&
                                                            availableTimes[selectedDate]?.map((time, index) => (
                                                                <option key={index} value={time}>
                                                                    {time}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>No product available</div>
                                )}
                            </div>
                            <div className="mt-10">
                                <h5 className="text-lg font-semibold">Billing & Contract:</h5>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error}</div>
                                ) : product ? (
                                    <div className="bg-gray-50 p-6 rounded-md shadow-md mt-4">
                                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                        <p className="text-sm text-gray-600">Product Code: {product.productCode}</p>

                                        {/* Billing & Contract Form */}
                                        <div className="mt-6">
                                            <form>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* First Name */}
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">First Name:</label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            placeholder="Enter First Name"
                                                        />
                                                    </div>
                                                    {/* Last Name */}
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                                                        <input
                                                            type="text"
                                                            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            placeholder="Enter Last Name"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Mobile */}
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium text-gray-700">Mobile:</label>
                                                    <input
                                                        type="tel"
                                                        className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="071 123 4567"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                                                    <input
                                                        type="email"
                                                        className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Enter Email Address"
                                                    />
                                                </div>

                                                {/* Marketing Agreement */}
                                                <div className="mt-4 flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <label className="ml-2 text-sm text-gray-700">
                                                        I agree to receive marketing emails.
                                                    </label>
                                                </div>

                                                {/* How Did You Hear About Us */}
                                                <div className="mt-4">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        How did you hear about us?
                                                    </label>
                                                    <select
                                                        className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        <option>Select...</option>
                                                        <option>Internet</option>
                                                        <option>TV</option>
                                                        <option>Website</option>
                                                        <option>Friend/Family</option>
                                                    </select>
                                                </div>

                                                {/* Dates */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                    {/* Date of Arrival */}
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Date of Arrival:</label>
                                                        <input
                                                            type="date"
                                                            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    {/* Date of Departure */}
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Date of Departure:</label>
                                                        <input
                                                            type="date"
                                                            className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Submit Button */}
                                                <div className="mt-6">
                                                    <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"> Submit Booking</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <div>No product available</div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </>
    );
}
