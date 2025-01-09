import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import logoWhite from "../assets/images/logo-white.png";

export default function Navbar({ navclass, navlight, manuclass }) {
    const [scrolling, setScrolling] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const [manu, setManu] = useState('');
    const [subManu, setSubManu] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [userManu, setUserManu] = useState(false);
    const [tourCategories, setTourCategories] = useState([]); // State for storing tour categories

    const dropdownRef = useRef(null);
    const userRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const userOutsideClick = (e) => {
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserManu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);

        let current = window.location.pathname;
        setManu(current);
        setSubManu(current);
        window.scrollTo(0, 0);

        // Fetch tour categories from Strapi
        const fetchTourCategories = async () => {
            try {
                const response = await axios.get('https://delicate-rhythm-1a2ffffd6a.strapiapp.com/api/categories');
                setTourCategories(response.data.categories || []); 
            } catch (error) {
                console.error("Error fetching tour categories:", error);
            }
        };

        fetchTourCategories();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setToggle(!isToggle);
    };

    return (
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight && (
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logoDark} className="h-10 l-dark" alt="" />
                            <img src={logoLight} className="h-10 l-light" alt="" />
                        </span>
                        <img src={logoWhite} className="hidden dark:inline-block" alt="" />
                    </Link>
                )}
                {!navlight && (
                    <Link className="logo" to="/">
                        <div>
                            <img src={logoDark} className="h-10 inline-block dark:hidden" alt="" />
                            <img src={logoWhite} className="h-10 hidden dark:inline-block" alt="" />
                        </div>
                    </Link>
                )}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isToggle ? 'open' : ''}`} onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="navigation" style={{ display: isToggle === true ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${manuclass}`}>
                        <li className={`${manu === '/' ? 'active' : ''}`}>
                            <Link to="/" className="sub-menu-item">Home</Link>
                        </li>
                        <li className={`${manu === '/aboutus' ? 'active' : ''}`}>
                            <Link to="/aboutus" className="sub-menu-item">About Us</Link>
                        </li>

                        <li className={`has-submenu ${manu === '/tours' ? 'active' : ''}`}>
                            <Link to="#" onClick={() => setSubManu(subManu === '/tours' ? '' : '/tours')}>
                                Tours
                            </Link>
                            <span className="menu-arrow"></span>
                            <ul className={`submenu ${subManu === '/tours' ? 'open' : ''}`}>
                                {tourCategories.length > 0 ? (
                                    tourCategories.map((category) => (
                                        <li key={category.id} className={manu === `/tours/${category.id}` ? 'active' : ''}>
                                            <Link to={`/tours/${category.id}`} className="sub-menu-item">
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <span className="sub-menu-item">Loading...</span>
                                    </li>
                                )}
                            </ul>
                        </li>

                        <li className={`${manu === '/yachts' ? 'active' : ''}`}>
                            <Link to="/yachtgrid" className="sub-menu-item">Yachts</Link>
                        </li>
                        <li className={`${manu === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact" className="sub-menu-item">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
