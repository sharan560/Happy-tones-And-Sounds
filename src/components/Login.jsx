import React, { useEffect, useState } from 'react';
import './Login.css';
import logo from '../assets/Logo.jpg';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let vantaEffect = GLOBE({
            el: '.Login',
            THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 500.00,
            minWidth: 500.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color: 0x152238,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Login', { username, password });

            if (response.status === 200) {
                alert('Login Successful!');
                window.location.href = '/dashboard';
            }
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="Login">
            <div id="login">
                <img src={logo} alt="Happy Tones And Sounds Logo" />
                <h1>Happy Tones And Sounds</h1>
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome Back to..! <br />Happy Tones And Sounds</h1>
                    <h2>Log In</h2>
                    <br />
                    <div className="form-group">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Your UserName"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error">{error}</p>}
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
