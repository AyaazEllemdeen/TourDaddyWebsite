import React from "react";

import blogImage from '../assets/images/blog/9.jpg';
import map from '../assets/images/map-plane-big.png'

import { FiUsers, FiGlobe } from '../assets/icons/vander'

import CountUp from 'react-countup';

export default function About() {
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">


                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h3 className="mb-6 text-2xl md:text-3xl font-semibold leading-normal md:leading-normal">
                            Turning your travel  <br />
                            dreams into reality!
                        </h3>

                        <p className="text-slate-400 max-w-xl mb-6">
                            Tour Daddy is passionate about curating extraordinary experiences and unforgettable journeys. With a deep love for exploration and a dedication to excellence our custom tours and experiences offer you unique immersive adventures that create lasting memories. From swimming with pigs to private Yacht hires we go beyond the ordinary and deliver tailored adventures just for you.

                            Tour Daddy believes in conservation and in the footprint we leave behind. In order to preserve as much of the beauty surrounding us, Tour Daddy is a proud donor to the Bahamas National Trust in support of its marine life and national parks.
                        </p>

                        <ul className="grid grid-cols-2 gap-4 text-left text-base mb-6 list-disc list-inside">
                            <li>Photo-Worthy Moments</li>
                            <li>Breathtaking Destinations</li>
                            <li>Lasting Memories</li>
                            <li>Wildlife Encounters</li>
                            <li>Expert Guidance</li>
                            <li>Luxury Meets Adventure</li>
                        </ul>

                    </div>
                </div>

                <div className="md:col-span-5">
                    <div className="relative">
                        <img
                            src={blogImage}
                            className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%] h-[450px]"
                            alt=""
                        />

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


                <div className="absolute bottom-0 start-1/3 -z-1">
                    <img src={map} className="lg:w-[600px] w-96" alt="" />
                </div>
            </div>
        </div>
    )
}