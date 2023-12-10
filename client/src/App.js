
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { NavigationBar } from './components/NavigationBar';

import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { AboutUs } from './components/AboutUs';
import { SignIn } from './components/SignIn';

import { Admin } from './components/Admin';
import { User } from './components/User';
//import User from './components/User';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      {/* <Route path='/upcoming-treks' element={<upcomingTreks/>}></Route> */}
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
