import React from 'react';
import Header from '../../Shared/Header/Header';
import ExtraSection from '../ExtraSection/ExtraSection';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroArea from '../HeroArea/HeroArea';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroArea></HeroArea>
            <FeaturedProducts></FeaturedProducts>
            <ExtraSection></ExtraSection>
            <Review></Review>
        </div>
    );
};

export default Home;