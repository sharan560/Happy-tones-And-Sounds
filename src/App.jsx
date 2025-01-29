import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import OurServices from './components/OurServices';
import BookAppoinments from './components/BookAppoinments';
import AppointmentsList from './components/Appoinmentslist';


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <OurServices />
      <BookAppoinments />
      <AppointmentsList />
      <Routes>
        <Route path="Login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
