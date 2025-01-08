import React from "react";

import {FiFacebook, FiInstagram, FiPhone} from '../assets/icons/vander'

export default function Tagline(){
    return(
        <>
        <div className="tagline bg-slate-900">
            <div className="container relative">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="list-none space-x-2">
                            <li className="inline-flex items-center">
                                <FiPhone className="text-red-500 size-4"></FiPhone>
                                <span className="ms-2 text-slate-300">+1 242 458-9530</span>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <FiPhone className="text-red-500 size-4"></FiPhone>
                                <span className="ms-2 text-slate-300">+1 305 766-3973</span>
                            </li>
                        </ul>

                        <ul className="list-none">
                            <li className="inline-flex items-center ms-2">
                                <ul className="list-none space-x-3">
                                    <li className="inline-flex mb-0"><a href="https://www.facebook.com/tourdaddy/" className="text-slate-300 hover:text-red-500"><FiFacebook className="size-4 align-middle" title="facebook"></FiFacebook></a></li>
                                    <li className="inline-flex ms-2 mb-0"><a href="https://www.instagram.com/tour_daddy/?hl=en" className="text-slate-300 hover:text-red-500"><FiInstagram className="size-4 align-middle" title="instagram"></FiInstagram></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}