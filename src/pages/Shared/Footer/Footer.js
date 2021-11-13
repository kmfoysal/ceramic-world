import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <h2>Ceramic World</h2>
                        <p>
                        Studio Address: 145 Taupo Street Waitakere, NZ 0604 <br />
                        Studio Hours: Mon– Fri 9am–4pm <br />
                        Sat-Sun 12pm-6pm <br />
                        Email: info@maiaceramic.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <h5>CUSTOMER SERVICE</h5>
                    <ul>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Payment</li>
                        </NavLink>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Shipping</li>
                        </NavLink>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Returns</li>
                        </NavLink>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Quality & Safety</li>
                        </NavLink>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Product Care</li>
                        </NavLink>                   
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <h5>LEGAL & PRIVACY</h5>
                    <ul>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Terms & Conditions</li>
                        </NavLink>
                        <NavLink to='/' className='text-decoration-none'>
                          <li>Privacy Policy</li>
                        </NavLink>                   
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h5>JOIN OUR NEWSLETTER</h5>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email'/>
                            <label for="floatingInput" className='p-0'>Enter Your Email Address</label>
                        </div>
                        <button className='normal-btn'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;