import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
