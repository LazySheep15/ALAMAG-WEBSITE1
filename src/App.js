import React from 'react';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Branches from './Pages/Branches';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Menu from './Pages/Menu';


function App() {
    return (
       <>
       <NavBar />
       <Routes>
       <Route path="/home" element={<HomePage />} />
       <Route path="/branches" element={<Branches />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/sign-in" element={<Login />} />
       <Route path="/menu" element={< Menu />} />
       </Routes>
       </>
    );
}

export default App;
