import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Activity from './Activity/Activity';
import TourPackages from './TourPackages/TourPackages';

const Home = () => {
    return (
        <>
            <Banner/>
            <Gallery/>
            <Activity/>
            <TourPackages/>
        </>
    );
};

export default Home;