import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './pages/Authentication/Login/Login';
import PrivateRoute from './pages/Authentication/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/Home/Home/Home';
import ProductDetails from './pages/Purchase/ProductDetails/ProductDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
         <Switch>
           <Route exact path='/'>
             <Home></Home>
           </Route>
           <Route path='/home'>
             <Home></Home>
           </Route>
           <Route path='/shop'>
             <Shop></Shop>
           </Route>
           <PrivateRoute path='/productDetails/:productKey'>
             <ProductDetails></ProductDetails>
           </PrivateRoute>
           <Route path='/login'>
             <Login></Login>
           </Route>
           <Route path='/register'>
             <Register></Register>
           </Route>
         </Switch>
         <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
