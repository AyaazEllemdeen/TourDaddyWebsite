import React from "react";
import { Link } from "react-router-dom";

import about from '../assets/images/listing/Exuma.jpg'
import map from '../assets/images/map-plane-big.png'

import { FiUsers, FiGlobe } from '../assets/icons/vander'

import CountUp from 'react-countup';

export default function About() {
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                <div className="md:col-span-5">
                    <div className="relative">
                    <img src={about } className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%] h-[450px]" alt=""/>


                        <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiUsers className="size-6"></FiUsers>
                            </div>
                            <div className="flex-1">
                                <p className="text-xl font-bold">
                                    <CountUp className="counter-value" start={0} end={20000} suffix="+" /></p>
                                <span className="text-slate-400">Happy Clients</span>
                            </div>
                        </div>

                        <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiGlobe className="size-6"></FiGlobe>
                            </div>
                            <div className="flex-1">
                                <span className="text-xl font-bold block">10 Years</span>
                                <span className="text-slate-400 block">Of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h3 className="mb-6 text-2xl md:text-3xl font-semibold leading-normal md:leading-normal">
                            Get to know Tour Daddy <br />
                            Dedicated to making your travel effortless and unforgettable!
                        </h3>

                        <p className="text-slate-400 max-w-xl mb-6">
                            Tour Daddy is your ultimate destination for creating unique, hands-on travel experiences that leave a lasting impression. We craft unforgettable trips through detailed research and firsthand experiences, all while enjoying the journey ourselves. With Tour Daddy, planning your next adventure will be just as delightful as the trip itself. Our goal is simple: effortless navigation and unforgettable experiences.
                        </p>

                        <p className="text-base mb-6">Your adventure starts here: Explore, Experience, Escape.</p>

                        <Link to="/aboutus" className="py-2 px-5 inline-block bg-red-500 text-white rounded-md text-base text-center hover:bg-red-600 transition-all duration-300"> Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>

                    </div>
                </div>


                <div className="absolute bottom-0 start-1/3 -z-1">
                    <img src={map} className="lg:w-[600px] w-96" alt="" />
                </div>
            </div>
        </div>
    )
}