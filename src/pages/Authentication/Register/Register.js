import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = e => {
        if (loginData.password !== loginData.comfirmPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <div className='register-form shadow-sm'>
                        <h3 className='text-center mb-5'>Please Register</h3>

                        {!isLoading && <form onSubmit={handleSubmit} className='w-100'>
                            <div className="form-floating mb-4">
                                <input type="text" name='name' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Name' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Enter Your Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="email" name='email' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Enter Your Email Address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" name='password' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Password' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Password</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" name='comfirmPassword' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Confirm Password' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Confirm Password</label>
                            </div>
                            <button type='submit' className='normal-btn w-100 mb-4'>REGISTER</button>
                        </form>}

                        {
                           isLoading && <div className="d-flex justify-content-center">
                                            <div className="spinner-grow text-warning" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                       }

                        <NavLink to='/login' className='text-decoration-none'>
                                <h6 className='text-center'>ALREADY REGISTER ? PLEASE LOGIN</h6>
                        </NavLink>

                        {
                           user?.email && <div className="alert alert-success" role="alert">
                                            Register Successfully
                                          </div>
                       }

                       {
                           authError && <div className="alert alert-success" role="alert">
                                            {authError}
                                        </div>
                       }

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;