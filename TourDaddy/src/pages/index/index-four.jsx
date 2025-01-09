import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"
import Switcher from "../../components/switcher"
import About from '../../components/about';
import Client from '../../components/client';
import TourPackages from '../../components/TourPackages';

import bg from "../../assets//images/bg/5.jpg"

import { FiCalendar, FiPackage, FiMapPin } from '../../assets/icons/vander'


import '../../../node_modules/react-modal-video/scss/modal-video.scss'

import { Parallax } from 'react-parallax';

import { faqData, packages } from '../../data/data';

export default function IndexFour() {
    let [isOpen, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(1)
    return (
        <>
            <Tagline />
            <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light" />
            <section className="relative py-36  bg-cover jarallax" data-jarallax data-speed="0.5">

                <Parallax bgImage={bg} bgImageAlt="the cat" strength={200} className='absolute inset-0' />

                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-6">
                        <div className="lg:col-span-7">
                            <h5 className="text-3xl font-dancing text-white">Let’s Go Now</h5>
                            <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Feel The Fresh Place <br /> and Scout the Outdoors with Friends</h4>
                            <p className="text-white/70 text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>

                            <div className="mt-6">
                                <Link to="/tours1" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">View Packages</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 p-6 z-10 relative lg:ms-10">
                                <h4 className="mb-5 text-2xl font-semibold">Search Your Destinations</h4>

                                <form>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label className="form-label font-medium text-slate-900 dark:text-white">Destination:</label>
                                            <div className="relative mt-2">
                                                <FiMapPin className="size-[18px] absolute top-[10px] start-3" />
                                                <input
                                                    name="name"
                                                    type="text"
                                                    id="job-keyword"
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
                                                <FiCalendar className="size-[18px] absolute top-[10px] start-3"></FiCalendar>
                                                <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 end" placeholder="Select Your Date" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium text-slate-900 dark:text-white">Select Type:</label>
                                            <div className="relative mt-2">
                                                <FiPackage className="size-[18px] absolute top-[10px] start-3"></FiPackage>
                                                <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                                    <option disabled defaultValue>Type of Tour</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="">
                                            <input type="submit" id="search-buy" name="search" className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer" value="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
            <TourPackages />
                <About />
                <Client />


            </section>
            <Footer />
            <Switcher />
        </>
    )
}