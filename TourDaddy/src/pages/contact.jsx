import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import travel from '../assets/images/travel-train-station.svg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { FiPhone, FiMail, FiMapPin, FiX } from '../assets/icons/vander'

export default function Contact() {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form data directly to emailJS
        emailjs.send('service_m5sv6kd', 'template_zpnn6te', formData, '87UvqZf9M48jT4qVJ')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message: ' + error.text);
            });
    };

    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="justify-end" />
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6797408038683!2d-77.35056102462205!3d25.07884167778733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7d1bb6e206d7%3A0xc0b37d1ece4c2a86!2sMargaritaville%20Beach%20Resort%20-%20Nassau!5e0!3m2!1sen!2sza!4v1736176440402!5m2!1sen!2sza"
                            style={{ border: '0' }}
                            title="Tour Daddy Location"
                            className="w-full h-[500px]"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src={travel} className="w-full max-w-[500px] mx-auto" alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                            <div className="lg:col-span-6">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Name :"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="lg:col-span-6">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Email :"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="lg:col-span-12">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Subject :"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="lg:col-span-12">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <textarea
                                                    name="comments"
                                                    id="comments"
                                                    className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                                    placeholder="Message :"
                                                    value={formData.comments}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-2"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <FiPhone></FiPhone>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Phone</h5>
                                <p className="text-slate-400 mt-3">Bahamas and U.S Contacts</p>

                                <div className="mt-5">
                                    <Link to="tel:+152534-468-854" className="text-red-500 font-medium">+1 242 458-9530</Link>
                                </div>
                                <div className="mt-5">
                                    <Link to="tel:+152534-468-854" className="text-red-500 font-medium">+1 305 766-3973</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <FiMail></FiMail>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Email</h5>
                                <p className="text-slate-400 mt-3">For inquiries, bookings, and support, feel free to reach out to us via email.</p>

                                <div className="mt-5">
                                    <Link to="mailto:contact@example.com" className="text-red-500 font-medium">bookings@tourdaddy.com</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <FiMapPin></FiMapPin>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="h5 text-lg font-semibold">Location</h5>
                                <p className="text-slate-400 mt-3">The Point,
                                    Margaritaville Beach Resort,
                                    <br /> Nassau, The Bahamas, </p>

                                <div className="mt-5">
                                    <Link to="#" onClick={() => setModal(!modal)} className="video-play-icon read-more lightbox text-red-500 font-medium">View on Google map</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            
            {modal && (
                <div className="w-full h-screen bg-slate-900/80 fixed top-0 left-0 bottom-0 right-0 z-999 flex items-center justify-center">
                    <div className="w-full h-full px-5 md:px-40 md-py-20 py-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6797408038683!2d-77.35056102462205!3d25.07884167778733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7d1bb6e206d7%3A0xc0b37d1ece4c2a86!2sMargaritaville%20Beach%20Resort%20-%20Nassau!5e0!3m2!1sen!2sza!4v1736176440402!5m2!1sen!2sza"
                            style={{ border: '0' }}
                            title="Tour Daddy Location"
                            className="w-full h-[500px]"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <button className="text-slate-400 absolute top-[20px] right-[20px]" onClick={() => setModal(!modal)}>
                        <FiX className="size-5"></FiX>
                    </button>
                </div>
            )}
        </>
    );
}
