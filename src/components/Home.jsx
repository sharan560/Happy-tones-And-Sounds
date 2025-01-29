import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.mp4'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.mp4'

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef(null);
  const intervalId = useRef(null);

  const slides = [
    slider1,slider2,slider1,slider4,slider2
  ];

 
  useEffect(() => {
    intervalId.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId.current); 
  }, [slideIndex]);

  const showSlide = (index) => {
    const totalSlides = slides.length;
    if (index >= totalSlides) index = 0; 
    if (index < 0) index = totalSlides - 1; 
    setSlideIndex(index);
  };

  const prevSlide = () => {
    clearInterval(intervalId.current);
    showSlide(slideIndex - 1);
  };

  const nextSlide = () => {
    clearInterval(intervalId.current);
    showSlide(slideIndex + 1);
  };

  return (
    <div className="slider" ref={slidesRef}>
      <div className="slides">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={index === slideIndex ? "displaySlide" : ""}
          />
        ))}
      </div>
      <button className="slide prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slide next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Home;
