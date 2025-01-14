import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import image1 from '../../../assets/images/listing/1.jpg'
import image2 from '../../../assets/images/listing/2.jpg'
import image3 from '../../../assets/images/listing/3.jpg'
import image4 from '../../../assets/images/listing/4.jpg'

import Navbar from "../../../components/navbar";
import DetailSidebar from "../../../components/detail-sidebar";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";

import { FiCamera, FiChevronUp, FiMapPin } from '../../../assets/icons/vander'

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

import { faqData, packages, tourDetailYacht, yachtpackages } from "../../../data/data";

export default function TourDetailOne() {
    let [activeTab, setActiveTab] = useState(1)

    let images = [
        image1,
        image2,
        image3,
        image4,
    ];
    let [photoIndex, setActiveIndex] = useState(0);
    let [isOpen, setOpen] = useState(false);


    let handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }
    let params = useParams()
    let id = params.id
    let data = yachtpackages.find((item) => item.id === parseInt(id))
    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light" />
            <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{data?.title ? data.title : 'New Zealand’s South Island brims with majestic'}</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Home</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour</li>
                    </ul>
                </div>
            </section>
            <section className="relative md:py-25 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-20 grid-cols-1 gap-6">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="md:col-span-8 col-span-7">
                                    <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                        <img src={image1} className="w-full lg:h-60 md:h-44 h-48 object-cover" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                            <Link to="#" onClick={() => handleCLick(0)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-4 col-span-5">
                                    <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                        <img src={image2} className="w-full lg:h-60 md:h-44 h-48 object-cover" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                            <Link to="#" onClick={() => handleCLick(1)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-4 col-span-5">
                                    <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                        <img src={image3} className="w-full lg:h-60 md:h-44 h-48 object-cover" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                            <Link to="#" onClick={() => handleCLick(2)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-8 col-span-7">
                                    <div className="group relative overflow-hidden rounded shadow dark:shadow-gray-800">
                                        <img src={image4} className="w-full lg:h-60 md:h-44 h-48 object-cover" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                            <Link to="#" onClick={() => handleCLick(3)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-2xl font-semibold mt-5">{data?.title ? data.title : 'New Zealand’s South Island brims with majestic'}</h5>
                            <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin> {data?.place ? data.place : 'New Zealand'}</p>

                            <ul className="list-none">
                                {tourDetailYacht.map((item, index) => {
                                    let Icon = item.icon
                                    return (
                                        <li className="inline-flex items-center me-5 mt-5" key={index}>
                                            <Icon className="size-6 stroke-[1.5] text-red-500"></Icon>

                                            <div className="ms-3">
                                                <p className="font-medium">{item.name}</p>
                                                <span className="text-slate-400 font-medium text-sm">{item.title}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="mt-6">
                                <h5 className="text-lg font-semibold">Tour Descriptions:</h5>

                                <p className="text-slate-400 mt-6">
                                    M/Y JULIANNE has undergone a 5-year rebuild and is now completely brand new. She is equipped with at-anchor Gyro stabilization, a spacious 20ft x 10ft swim deck, and an indoor beach club. Additional features include a 39ft Nor-tech Center Console, brand new water toys like 2 Yamaha wave runners, and a 15×15 floating pool. Guests can enjoy activities such as fishing, snorkeling, and more. The aft deck is perfect for entertaining with a wet bar and dining seating for 8, while the glass panel at the rear enhances the view over the swim platform.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    On the upper deck, entertainment options are endless with 2 opposing seating areas, a wet bar with stool seating, a deluxe jacuzzi, and a large sunbed. Glass panels around the flybridge open up the space, and there’s an alfresco seating/dining area on the foredeck for ultimate relaxation.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    The interior ambiance is modern and elegant with a timeless Italian touch. Smooth granite and leather surfaces with backlighting provide a luxurious and comfortable atmosphere. The main deck features an open-plan salon, and a wet bar to starboard. The modern country kitchen is complemented by a formal dining table that seats 8 guests.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    Luxury yacht Julianne accommodates up to 8 guests in 4 en-suite cabins. The staterooms are amidships and are equal in size, each offering a queen-size bed. Two of the guest cabins have the option to convert the queen bed into side-by-side twin beds.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    <strong className="text-black">Inclusions:</strong><br />
                                    Half Day Charter: Snack Platter & Standard Bar.<br />
                                    Full Day Charter: Lobster, Steak Lunch & Standard Bar.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    <strong className="text-black">Water Toys:</strong><br />
                                    39ft Nor-tech Center Console with 3 x 400hp Mercury outboards.<br />
                                    15ft x 15ft Critter Pool.<br />
                                    2 x Yamaha wave runners.<br />
                                    Snorkeling Gear.<br />
                                    Fishing.<br />
                                    Towable Tubes.
                                </p>

                                <p className="text-slate-400 mt-3">
                                    <strong className="text-black">Exclusions:</strong><br />
                                    14% TAX AND GRATUITY NOT INCLUDED!
                                </p>
                            </div>

                            <div></div>

                            <div className="border-t-2 border-gray-200 my-6"></div>
                            <div className="mt-6">
                                <h5 className="text-lg font-bold">Request a Booking:</h5>

                                <form className="mt-6">
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="fullName" className="font-semibold">Full Name:</label>
                                                <input
                                                    name="fullName"
                                                    id="fullName"
                                                    type="text"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Full Name :"
                                                />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Email :"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="contact" className="font-semibold">Contact Number:</label>
                                                <input
                                                    name="contact"
                                                    id="contact"
                                                    type="text"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Contact Number :"
                                                />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="destination" className="font-semibold">Destination:</label>
                                                <input
                                                    name="destination"
                                                    id="destination"
                                                    type="text"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Destination (e.g., Bahamas):"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="budget" className="font-semibold">Budget:</label>
                                                <input
                                                    name="budget"
                                                    id="budget"
                                                    type="text"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Budget (e.g., $5000):"
                                                />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="dayOrTerm" className="font-semibold">Day or Term:</label>
                                                <select
                                                    name="dayOrTerm"
                                                    id="dayOrTerm"
                                                    className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                >
                                                    <option value="day">Day</option>
                                                    <option value="term">Term</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        id="submit"
                                        name="send"
                                        className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full"
                                    >
                                        Send Request
                                    </button>
                                </form>
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
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length,
                        )
                    }
                />
            )}
        </>
    )
}