import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import About from '../../components/about';
import Client from '../../components/client';
import TourPackages from '../../components/TourPackages';

import bg from "../../assets/images/bg/5.jpg";

import { FiCalendar, FiPackage, FiMapPin } from '../../assets/icons/vander';

import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import { Parallax } from 'react-parallax';

export default function IndexFour() {
    let [isOpen, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(1);
    let [tourCategories, setTourCategories] = useState([]); // State for storing tour categories

    useEffect(() => {
        const fetchTourCategories = async () => {
            try {
                const response = await axios.get('https://funny-dog-d974027758.strapiapp.com/api/categories');
                setTourCategories(response.data.categories || []);
            } catch (error) {
                console.error("Error fetching tour categories:", error);
            }
        };

        fetchTourCategories();
    }, []);

    return (
        <>
            <Tagline />
            <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light" />
            <section className="relative py-36 bg-cover jarallax" data-jarallax data-speed="0.5" style={{ height: "900px" }}>

                <Parallax bgImage={bg} bgImageAlt="background" strength={200} className='absolute inset-0' style={{ height: "900px" }}/>

                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-6">
                        <div className="lg:col-span-7">
                            <h5 className="text-3xl font-dancing text-white">Let’s Go Now</h5>
                            <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Feel The Fresh Place <br /> and Scout the Outdoors with Friends</h4>
                            <p className="text-white/70 text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            <div className="mt-6">
                                <Link to="/tours/502052" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">View Packages</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 p-6 z-10 relative lg:ms-10">
                                <h4 className="mb-5 text-2xl font-semibold">Search Your Destinations</h4>

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const selectedCategory = document.getElementById('tourCategory').value;
                                        if (selectedCategory) {
                                            window.location.href = `/tours/${selectedCategory}`;
                                        }
                                    }}
                                >
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label className="form-label font-medium text-slate-900 dark:text-white">Destination:</label>
                                            <div className="relative mt-2">
                                                <FiMapPin className="size-[18px] absolute top-[10px] start-3" />
                                                <input
                                                    name="destination"
                                                    type="text"
                                                    id="destination"
                                                    className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Search"
                                                    value="Bahamas"
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                                            <div className="relative mt-2">
                                                <FiCalendar className="size-[18px] absolute top-[10px] start-3" />
                                                <input
                                                    name="date"
                                                    type="date"
                                                    id="date"
                                                    className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Select Your Date"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium text-slate-900 dark:text-white">Select Type:</label>
                                            <div className="relative mt-2">
                                                <FiPackage className="size-[18px] absolute top-[10px] start-3" />
                                                <select
                                                    id="tourCategory"
                                                    className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                >
                                                    <option disabled defaultValue>
                                                        Type of Tour
                                                    </option>
                                                    {tourCategories.length > 0 ? (
                                                        tourCategories.map((category) => (
                                                            <option key={category.id} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                        ))
                                                    ) : (
                                                        <option>Loading...</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <input
                                                type="submit"
                                                id="search"
                                                name="search"
                                                className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer"
                                                value="Search"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative md:py-0 py-0">
                <TourPackages />
                <About />
                <Client />
            </section>

            <Footer />

        </>
    );
}
