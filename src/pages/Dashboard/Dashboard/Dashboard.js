import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    const {user} = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-xl-2 col-lg-3 col-md-4">
                <div
                  class="
                    d-flex
                    flex-column flex-shrink-0
                    p-3
                    text-white
                    h-100
                  "
                  style={{backgroundColor:'#827b75', color:'white'}}
                >
                  <NavLink to='/home' style={{textDecoration:'none', color:'white'}}>
                      <h4 className='text-center mb-5'>CERAMIC WORLD</h4>
                  </NavLink>
    
                  <Nav className="nav nav-pills flex-column mb-auto text-white">
                    <NavLink to={`${url}`} style={{textDecoration:'none'}}>
                       <button className='btn shadow-none text-white'>Dashboard</button>
                    </NavLink>
                    <NavLink to={`${url}/payment`} style={{textDecoration:'none'}}>
                      <button className='btn shadow-none text-white'>Payment</button>
                    </NavLink>
                    <NavLink to={`${url}/myOrder`} style={{textDecoration:'none'}}>
                      <button className='btn shadow-none text-white'>My Orders</button>
                    </NavLink>
                    <NavLink to={`${url}/review`} style={{textDecoration:'none'}}>
                       <button className='btn shadow-none text-white'>Review</button>
                    </NavLink>
                    <NavLink to={`${url}/manageAllOrders`} style={{textDecoration:'none'}}>
                      <Nav.Link className='text-white'>Manage All Orders</Nav.Link>
                    </NavLink>
                    <NavLink to={`${url}/addProduct`} style={{textDecoration:'none'}}>
                      <Nav.Link className='text-white'>Add Product</Nav.Link>
                    </NavLink>
                    <NavLink to={`${url}/makeAdmin`} style={{textDecoration:'none'}}>
                      <Nav.Link className='text-white'>Make Admin</Nav.Link>
                    </NavLink>
                    <NavLink to={`${url}/manageProducts`} style={{textDecoration:'none'}}>
                      <Nav.Link className='text-white'>Manage Products</Nav.Link>
                    </NavLink>
                    <NavLink to='/' style={{textDecoration:'none'}}>
                      <Nav.Link className='text-white'>Logout</Nav.Link>
                    </NavLink>
                </Nav>
                </div>
              </div>
              <div class="col-xl-10 col-lg-9 col-md-8">
                <div class="row g-0 top-box py-2" style={{backgroundColor:'#e9e8e6'}}>
                    <h5 className='text-center'>Welcome {user.displayName} Into Dashboard</h5>
                </div>
                <div class="row g-0 p-5 m-5 rounded-3 shadow-lg" style={{}}>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        
                    </Switch>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Dashboard;