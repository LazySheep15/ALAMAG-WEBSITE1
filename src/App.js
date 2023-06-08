import React from 'react';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Offers from './Pages/Offers';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Applied from './Pages/Applied';


function App() {
    return (
       <>
       <NavBar />
       <Routes>
       <Route path="/home" element={<HomePage />} />
       <Route path="/offers" element={<Offers />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/sign-in" element={<Login />} />
       <Route path="/applied" element={< Applied />} />
       </Routes>
       </>
    );
}

export default App;
