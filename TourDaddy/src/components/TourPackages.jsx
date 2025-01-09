import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const TourPackages = () => {
    const [packages, setPackages] = useState([]);

    // Fetch data from Strapi API
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch('https://delicate-rhythm-1a2ffffd6a.strapiapp.com/api/homelist');
                const data = await response.json();

                // Format the data to match the structure needed
                const formattedPackages = data.products.map((item) => ({
                    productCode: item.productCode, // Use productCode instead of id
                    image: item.image || 'fallback-image.jpg', // Fallback image if no image found
                    title: item.name, // Use name as the title
                    amount: item.advertisedPrice ? `$${item.advertisedPrice} / Day` : 'Price Not Available',
                }));

                setPackages(formattedPackages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPackages();
    }, []);

    return (
        <section className="relative md:py-24 py-16">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Planning for a trip? We will organize your trip with the best places and within best budget!
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0, 8).map((item) => (
                        <div className="group rounded-md shadow dark:shadow-gray-700" key={item.productCode} style={{ height: '350px' }}>
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2" style={{ height: '150px' }}>
                                <img
                                    src={item.image}
                                    className="scale-125 group-hover:scale-100 duration-500"
                                    alt={item.title}
                                />

                                <div className="absolute top-0 end-0 p-4">
                                    <Link
                                        to="#"
                                        className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"
                                    >
                                        <i className="mdi mdi-heart text-[20px] align-middle"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-3" style={{ height: '150px' }}>
                                <div style={{ height: '100px' }}>
                                    <Link to={`/tour-detail-one/${item.productCode}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">
                                        {item.title}
                                    </Link>
                                </div>
                                <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                    <h5 className="text-lg font-medium text-red-500">{item.amount}</h5>

                                    <Link to="" className="text-slate-400 hover:text-red-500">
                                        Explore Now <i className="mdi mdi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <Link to="/tours1" className="text-slate-400 hover:text-red-500 inline-block">
                        See More Tours <i className="mdi mdi-arrow-right align-middle"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TourPackages;
