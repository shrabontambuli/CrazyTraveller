import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Activity from './Activity/Activity';
import TourPackages from './TourPackages/TourPackages';
import BestTravelers from './BestTravelers/BestTravelers';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Banner/>
            <Gallery/>
            <Activity/>
            <TourPackages/>
            <BestTravelers/>
            <Testimonials/>
        </>
    );
};

export default Home;