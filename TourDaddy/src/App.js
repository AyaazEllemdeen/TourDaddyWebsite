import React from "react";
import { Route, Routes } from "react-router-dom";
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import Index from './pages/index/index-four'
import YachtGrid from './pages/listing/tour-grid/yachtgrid' 
import DayToursGrid from './pages/listing/tour-grid/daytoursgrid';
import List from './pages/listing/tour-list/list'
import TourDetailOne from './pages/listing/tour-detail/tour-detail-one'
import TourDetailTwo from './pages/listing/tour-detail/tour-detail-two'
import Aboutus from './pages/aboutus'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import SignupSuccess from './pages/auth/signup-success'
import ForgotPassword from './pages/auth/forgot-password'
import LockScreen from './pages/auth/lock-screen'
import Terms from './pages/utility/terms'
import Privacy from './pages/utility/privacy'
import Blogs from './pages/blog/blogs'
import BlogStandard from './pages/blog/blog-standard'
import BlogDetail from './pages/blog/blog-detail'
import Contact from './pages/contact'
import YachtDetail from './pages/listing/tour-detail/yacht-detail';
import ComboToursGrid from './pages/listing/tour-grid/combotoursgrid';
import PrivateToursGrid from './pages/listing/tour-grid/privatetoursgrid';
import HalfdayprivateToursGrid from './pages/listing/tour-grid/halfdayprivatetoursgrid';
import CruiseguestToursGrid from './pages/listing/tour-grid/cruiseguesttoursgrid';
import HalfdaygroupToursGrid from './pages/listing/tour-grid/halfdaygrouptoursgrid';
import FlightToursGrid from './pages/listing/tour-grid/flighttoursgrid';
import IslandToursGrid from './pages/listing/tour-grid/islandtoursgrid';
import EcoToursGrid from './pages/listing/tour-grid/ecotoursgrid';
import DivingToursGrid from './pages/listing/tour-grid/divingtoursgrid';
import FishingcharterToursGrid from './pages/listing/tour-grid/fishingchartertoursgrid';


function App() {
  return (
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/tours/503781" element={<FlightToursGrid />} />
    <Route path="/tours/600541" element={<FishingcharterToursGrid />} />
    <Route path="/tours/600540" element={<DivingToursGrid />} />
    <Route path="/tours/600520" element={<EcoToursGrid />} />
    <Route path="/tours/597642" element={<IslandToursGrid />} />
    <Route path="/tours/596669" element={<HalfdayprivateToursGrid />} />
    <Route path="/tours/597613" element={<HalfdaygroupToursGrid />} />
    <Route path="/tours/596671" element={<CruiseguestToursGrid />} />
    <Route path="/tours/503782" element={<ComboToursGrid />} />
    <Route path="/tours/503787" element={<PrivateToursGrid />} />
    <Route path="/tours/502052" element={<DayToursGrid />} />
    <Route path="/yachtgrid" element={<YachtGrid/>}/>
    <Route path="/listing/tour-detail/yacht-detail" element={<YachtDetail />} />
    <Route path="/yacht-detail/:id" element={<YachtDetail/>}/>
    <Route path="/list" element={<List/>}/>
    <Route path="/tour-detail-one" element={<TourDetailOne/>}/>
    <Route path="/tour-detail-one/:id" element={<TourDetailOne/>}/>
    <Route path="/tour-detail-two" element={<TourDetailTwo/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signup-success" element={<SignupSuccess/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/lock-screen" element={<LockScreen/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blog-standard" element={<BlogStandard/>}/>
    <Route path="/blog-detail" element={<BlogDetail/>}/>
    <Route path="/blog-detail/:id" element={<BlogDetail/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
  );
}

export default App;
