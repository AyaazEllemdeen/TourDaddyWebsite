import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiMapPin } from '../../../assets/icons/vander';
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";

const TourGrid = () => {
  const [tours, setTours] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    axios.get('http://localhost:1337/api/privatetour')
      .then(response => {
        setTours(response.data.products);  // Assuming your response is in this format
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light" />

      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">ISLAND TOURS</h3>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tours</li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {tours.map((tour, index) => (
              <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3" style={{ height: '200px' }}>
                  <img src={tour.imageUrl} className="scale-125 group-hover:scale-100 duration-500" alt={tour.name} />
                  {tour.tagText && (
                    <div className="absolute top-0 start-0 p-4">
                      <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                        {tour.tagText}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-0 end-0 p-4">
                    <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500">
                      <i className="mdi mdi-heart text-[20px] align-middle"></i>
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <div className="h-[100px]">
                    <p className="flex items-center text-slate-400 font-medium mb-2">
                      <FiMapPin className="text-red-500 size-4 me-1" /> {tour.place}
                    </p>
                    <Link to={`/tour-detail-one/${tour.productCode}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">
                      {tour.name}
                    </Link>
                  </div>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <li key={idx} className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      ))}
                      <li className="inline text-black dark:text-white text-sm">5.0(30)</li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                    <h5 className="text-lg font-medium text-red-500">${tour.advertisedPrice}</h5>

                    <Link to={`/tour-detail-one/${tour.productCode}`} className="text-slate-400 hover:text-red-500">
                      Explore Now <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
};

export default TourGrid;
