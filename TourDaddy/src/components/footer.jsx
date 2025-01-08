import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import logoLight from '../assets/images/logo-light.png'

import { FiMapPin, FiMail, FiPhone } from '../assets/icons/vander'

export default function Footer() {
    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <Link to="#" className="text-[22px] focus:outline-none">
                                        <img src={logoLight} alt="" />
                                    </Link>
                                    <p className="mt-6 text-gray-300">Tour Daddy specializes in creating unforgettable, personalized adventures. Transforming ordinary trips into extraordinary journeys.</p>
                                    <ul className="list-none mt-6 space-x-1">

                                        <li className="inline-flex items-center ms-2">
                                            <ul className="list-none space-x-3">
                                                <li className="inline-flex mb-0">
                                                    <a href="https://www.facebook.com/tourdaddy/" className="text-slate-300 hover:text-red-500">
                                                        <FiFacebook className="size-4 align-middle" title="facebook" />
                                                    </a>
                                                </li>
                                                <li className="inline-flex ms-2 mb-0">
                                                    <a href="https://www.instagram.com/tour_daddy/?hl=en" className="text-slate-300 hover:text-red-500">
                                                        <FiInstagram className="size-4 align-middle" title="instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                                        <h5 className="tracking-[1px] text-gray-100 mt-6">Tour Daddy</h5>

                                        <div className="flex mt-4">
                                            <FiMapPin className="size-4 text-red-500 me-2 mt-1"></FiMapPin>
                                            <div className="">
                                                <h6 className="text-gray-300">The Point, <br />Margaritaville Beach Resort, <br />Nassau, The Bahamas</h6>
                                            </div>
                                        </div>

                                        <div className="flex mt-4">
                                            <FiMail className="size-4 text-red-500 me-2 mt-1" />
                                            <div>
                                                <Link to="mailto:bookings@tourdaddy.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">bookings@tourdaddy.com</Link>
                                            </div>
                                        </div>



                                        <div className="flex mt-4">
                                            <FiPhone className="size-4 text-red-500 me-2 mt-1"></FiPhone>
                                            <div className="">
                                                <Link to="tel:+13057663973" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+1 305 766-3973</Link>
                                            </div>
                                        </div>
                                        <div className="flex mt-4">
                                            <FiPhone className="size-4 text-red-500 me-2 mt-1"></FiPhone>
                                            <div className="">
                                                <Link to="tel:+12424589530" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+1 242 458-9530</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li className="mt-[10px] first:mt-0">
                                                <Link to="/aboutus" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i className="mdi mdi-chevron-right"></i> About Us
                                                </Link>
                                            </li>
                                            <li className="mt-[10px] first:mt-0">
                                                <Link to="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i className="mdi mdi-chevron-right"></i> Contact Us
                                                </Link>
                                            </li>
                                            <li className="mt-[10px] first:mt-0">
                                                <Link to="/blog" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i className="mdi mdi-chevron-right"></i> Blog
                                                </Link>
                                            </li>
                                            <li className="mt-[10px] first:mt-0">
                                                <Link to="/tours" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i className="mdi mdi-chevron-right"></i> All Tours
                                                </Link>
                                            </li>
                                            <li className="mt-[10px] first:mt-0">
                                                <Link to="/yachts" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                                    <i className="mdi mdi-chevron-right"></i> Yachts
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                                                    <input type="email" className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>

                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="mb-0">Copyright 2025 <Link to="/" className="text-reset">Tour Daddy</Link>. All Rights Reserved By <Link to="https://seo-company.io" className="text-reset">Seo Company</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}