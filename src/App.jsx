import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import OurServices from './components/OurServices';
import BookAppointments from './components/BookAppoinments';
import AppointmentsList from './components/Appoinmentslist';
import Product from './components/Product';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <OurServices />
            <Product />
            <BookAppointments />
            
          </>
        } />
        <Route path="/About" element={<About/>}/>
        <Route path="/Our-Services" element={<OurServices/>}/>
        <Route path="/products" element={<Product/>}/> 
        <Route path="/Book-Appointments" element={<BookAppointments/>}/> 
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/appointments" element={isAuthenticated ? <AppointmentsList /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
