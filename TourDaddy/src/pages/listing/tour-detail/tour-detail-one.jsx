import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

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

    const location = useLocation();
    const lastPart = location.pathname.split("/").pop();

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

    const handleClick = (index) => {
        setPhotoIndex(index);
        setOpen(true);
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
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
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
                            <p className="flex items-center text-slate-400 font-medium mt-2">
                                <FiMapPin className="size-4 me-1"></FiMapPin> {product?.place || "Unknown Location"}
                            </p>

                            <div className="mt-6">
                                <h5 className="text-lg font-semibold">Description:</h5>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error}</div>
                                ) : product ? (
                                    <p className="text-slate-600 mt-3">{product.description}</p>
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
                                                <li key={option.id} className="text-slate-700 mt-2">
                                                    <strong>{option.label}:</strong> ${option.price} 
                                                    <span className="text-slate-500 ml-2">(Seats Used: {option.seatsUsed})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <div>No product data available</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
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
