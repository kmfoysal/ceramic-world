import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/Home/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
           <Route path='/login'>
             <Login></Login>
           </Route>
           <Route path='/register'>
             <Register></Register>
           </Route>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
