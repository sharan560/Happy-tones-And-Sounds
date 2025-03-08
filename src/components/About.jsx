import React from 'react';
import Card from '../assets/card.png';
import Dani from '../assets/dani.jpg';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate=useNavigate();
    const nav=()=>{
      window.location.href = '/Book-Appointments'; 
    }

  return (
    <div className="About-Container">
      <h1> About </h1>
      <div className="About">
        <img src={Card} alt="Happy Tones Card" />
        <div id="about">
          <h1>Happy Tones And Sounds</h1>
          <p>
            Welcome to Happy Tones & Sounds Speech & Hearing Centre! At Happy Tones & Sounds, I believe in transforming lives by empowering individuals to communicate better and enjoy the sounds of life. My center offers a wide range of specialized services tailored for both children and adults, delivered by highly qualified professional with a compassionate approach.
          </p>
          <button onClick={nav}>Book An Appoinment Now</button>
        </div>
      </div>
      <div className="About1">
        <div id="about1">
          <h1>Why Us?</h1> 
          <p>A delictded person  Danista Johnson, an experienced Speech Language Pathologist and Audiologist, certified by RCI and Hanen (CRR No.: A83826). Our mission is to provide world-class care that addresses the unique needs of every individual, helping them overcome challenges related to speech, language, and hearing. With a focus on evidence-based practices and personalized care, we aim to make therapy accessible through both online and offline consultations, ensuring convenience and effectiveness for our clients.
          </p>  
        </div>
      <img src={Dani} alt="Happy Tones Card" /> 
      </div>
    </div>
  );
};

export default About;
