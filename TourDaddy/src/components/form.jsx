import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

import { FiCalendar, FiUsers, FiMapPin } from '../assets/icons/vander'

export default function Form() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    return (
        <div className="grid grid-cols-1 px-4">
    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 max-w-4xl mx-auto">
        <div className="registration-form text-dark text-start">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {/* Destination */}
                <div>
                    <label className="form-label font-medium text-slate-900 dark:text-white">Destination:</label>
                    <div className="relative mt-2">
                        <FiMapPin className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            name="name"
                            type="text"
                            id="job-keyword"
                            className="w-full py-2 pl-10 pr-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0"
                            placeholder="Search"
                            value="Bahamas"
                            readOnly
                        />
                    </div>
                </div>

                {/* Date Picker */}
                <div>
                    <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                    <div className="relative mt-2">
                        <FiCalendar className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={18} />
                        <DatePicker
                            className="w-full py-2 pl-10 pr-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0"
                            selected={startDate2}
                            onChange={(date) => setStartDate2(date)}
                        />
                    </div>
                </div>

                {/* Tour Type */}
                <div>
                    <label className="form-label font-medium text-slate-900 dark:text-white">Select Type:</label>
                    <div className="relative mt-2">
                        <FiUsers className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={18} />
                        <select
                            className="form-select w-full py-2 pl-10 pr-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-300 dark:border-gray-800 focus:ring-0"
                            defaultValue=""
                        >
                            <option disabled value="">Tour Type</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-end">
                    <input
                        type="submit"
                        id="search-buy"
                        name="search"
                        className="py-2 px-5 h-12 w-full text-base text-center bg-red-500 text-white rounded-md cursor-pointer shadow hover:bg-red-600 focus:outline-none"
                        value="Search"
                    />
                </div>
            </div>
        </div>
    </form>
</div>

    )
}