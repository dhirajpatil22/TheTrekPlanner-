
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { NavigationBar } from './components/NavigationBar';

import { Home } from './components/Home';
import { SignUpForm } from './components/SignUpForm';
import { AboutUs } from './components/AboutUs';
function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      {/* <Route path='/upcoming-treks' element={<upcomingTreks/>}></Route> */}
      <Route path='/sign-up' element={<SignUpForm/>}></Route>
      {/* <Route path='/sign-in' element={<signInForm/>}></Route> */}
      <Route path='/about-us' element={<AboutUs/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
