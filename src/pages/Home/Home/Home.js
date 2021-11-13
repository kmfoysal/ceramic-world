import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroArea from '../HeroArea/HeroArea';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <FeaturedProducts></FeaturedProducts>
            <Review></Review>
        </div>
    );
};

export default Home;