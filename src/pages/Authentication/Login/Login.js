import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='container py-5 my-5'>
            <div className="row">
                <div className="col-12">
                    <div className='register-form shadow-sm'>
                        <h3 className='text-center mb-5'>Please Login</h3>
                        <form onSubmit={handleSubmit} className='w-100'>
                            <div class="form-floating mb-4">
                                <input type="email" name='email' class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Enter Your Email Address</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="password" name='password' class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Password' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Password</label>
                            </div>
                            <button className='normal-btn w-100 mb-4'>LOGIN</button>
                        </form>
                        <NavLink to='/register' className='text-decoration-none'>
                                <h6 className='text-center mb-3'>NEW USER ? PLEASE REGISTER</h6>
                        </NavLink>
                        <h5 className='text-center mb-3'>--------------- OR ---------------</h5>
                        <button className='normal-btn w-100 mb-4'>LOGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;