import React from 'react';
import Login from '../../Authentication/Login/Login';
import Register from '../../Authentication/Register/Register';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroArea></HeroArea>
            <Register></Register>
            <Login></Login>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;