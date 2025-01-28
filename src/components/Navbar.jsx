import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.jpg';
import instagram from '../assets/instagram-logo.png';
import linkedin from '../assets/linkedin3.png';
import Admin from '../assets/Admin.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/happytones_sounds_cbe/', '_blank');
  };

  const Login = () => {
    navigate('./Login');
  };

  return (
    <div id="navbar">
      <div id="sidebar" style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
        <img id="close" onClick={toggleSidebar} src={close} alt="close" />
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Our-Services">Our Services</a>
        <a href="/products">Products</a>
        <a href="/Book-Appointments">Book Appointments</a>
      </div>

      <div id="nav-Container">
        <img
          onClick={handleLogoClick}
          id="logo"
          src={logo}
          alt="logo.jpg"
        />
        <nav>
          <h1 id="head1">Happy Tones And Sounds</h1>
          <a className="mainNav" href="/">Home</a>
          <a className="mainNav" href="/About">About</a>
          <a className="mainNav" href="/Our-Services">Our Services</a>
          <a className="mainNav" href="/products">Products</a>
          <a className="mainNav" href="/Book-Appointments">Book Appointments</a>
        </nav>
        <div id="insta">
          <img
            onClick={openInstagram}
            src={instagram}
            alt="Instagram logo"
          />
          <img src={linkedin} alt="LinkedIn logo" />
          <img
            id="menu"
            className="menu"
            onClick={toggleSidebar}
            src={menu}
            alt="Menu"
          />
          <img onClick={Login} src={Admin} alt="Admin Option" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
