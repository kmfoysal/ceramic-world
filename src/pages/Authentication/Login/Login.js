import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, loginWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e =>{
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    const handleGoogleLogin = () =>{
        loginWithGoogle(location, history)
    }

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <div className='register-form shadow-sm'>
                        <h3 className='text-center mb-5'>Please Login</h3>
                        {!isLoading && <form onSubmit={handleSubmit} className='w-100'>
                            <div className="form-floating mb-4">
                                <input type="email" name='email' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Enter Your Email Address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" name='password' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Password' required onBlur={handleOnBlur}/>
                                <label for="floatingInput" className='p-0'>Password</label>
                            </div>
                            <button type='submit' className='normal-btn w-100 mb-4'>LOGIN</button>
                        </form>}

                        {
                           isLoading && <div className="d-flex justify-content-center">
                                            <div className="spinner-grow text-warning" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                       }

                        <NavLink to='/register' className='text-decoration-none'>
                                <h6 className='text-center mb-3'>NEW USER ? PLEASE REGISTER</h6>
                        </NavLink>
                        <h5 className='text-center mb-3'>--------------- OR ---------------</h5>
                        <button onClick={handleGoogleLogin} className='normal-btn w-100 mb-4'>LOGIN WITH GOOGLE</button>

                        {
                           user?.email && <div className="alert alert-success" role="alert">
                                            Login Successfully
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
    );
};

export default Login;