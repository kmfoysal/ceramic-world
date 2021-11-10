import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div className='container-fluid'>
            <div className="row column-reverse">
                <div className="col-md-6 left-hero"></div>
                <div className="col-md-6 right-hero">
                    <div className='content'>
                        <h1>HANDMADE
                            <br />
                        BANGLADESHI CERAMICS</h1>
                        <h5>Timeless Pieces For Everyday Rituals</h5>
                        <NavLink to='/shop' className='text-decoration-none'>
                          <button className='common-btn'>SHOP NOW</button>
                        </NavLink>          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;