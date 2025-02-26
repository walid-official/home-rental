import React from 'react';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Performance from '../components/Performance/Performance';
import FeatureLocations from '../components/FeatureLocations/FeatureLocations';
import Articles from '../components/Articles/Articles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Performance></Performance>
            <FeatureLocations></FeatureLocations>
            <Articles></Articles>
        </div>
    );
};

export default Home;