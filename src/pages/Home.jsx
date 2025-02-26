import React from 'react';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Performance from '../components/Performance/Performance';
import FeatureLocations from '../components/FeatureLocations/FeatureLocations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Performance></Performance>
            <FeatureLocations></FeatureLocations>
        </div>
    );
};

export default Home;