import React from 'react'
import './OurServices.css'
import speech from '../assets/Speech.png';
import hearing_Screen from'../assets/hearing-screen.png';
import hearing_aid from '../assets/hearing-aid.png';
import parent from '../assets/parent.png';

const OurServices = () => {
    return (
        <div className="Ourservice">
            <h1>Our-Services</h1>
            <div id="Ourservice">
                <div className="service">
                    <img src={speech} alt="speech therapy" />
                    <h3>Speech Therapy</h3>
                    <p>We offer professional speech therapy services to help improve communication and build confidence.</p>
                </div>
                <div className="service">
                    <h3>Audio Verbal therpay</h3>
                    <p>Audio Verbal Therapy focuses on using hearing and auditory processing to help children with hearing loss develop speech and language skills, fostering natural communication in everyday settings.</p>
                </div>
                <div className="service">
                    <img src={hearing_Screen} alt="" />
                    <h3>Hearing Screen Testing</h3>
                    <p>We also provide hearing screening tests to ensure early detection and better communication support.</p>
                </div>
                <div className="service">
                    <img src={hearing_aid} alt="" />
                    <h3>Hearing Aid Consultaion</h3>
                    <p>We offer expert consultation to help you choose the best hearing aid based on your unique needs. Our specialists ensure personalized recommendations to improve your auditory experience.</p>
                </div>
                <div className="service">
                    <img src={parent} alt="" />
                    <h3>Parental Training</h3>
                    <p>Parental Training helps families support their child's speech development with practical tools and strategies for home practice.</p>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default OurServices