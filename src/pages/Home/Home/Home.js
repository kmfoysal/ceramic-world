import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroArea></HeroArea>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;