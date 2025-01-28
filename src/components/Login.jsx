import React, { useEffect } from 'react';
import './Login.css';
import logo from '../assets/Logo.jpg';
import net from 'vanta/src/vanta.globe';
import * as THREE from 'three';


const Login = () => {
    useEffect(() => {
        let vantaEffect = net({
            el: '.Login',
            THREE,
            points: 20,
            maxDistance: 25,
            spacing: 18,
            backgroundColor: 0xffffff,
            mouseColor: 0xffc300,
            color: 0x152238,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div className="Login">
            <div id="login">
                <img src={logo} alt="Happy Tones And Sounds Logo" />
                <h1>Happy Tones And Sounds</h1>
            </div>
            <div className="login-form">
                <form>
                    <h1>Welcome Back to..! <br />Happy Tones And Sounds</h1>
                    <h2>Log In</h2>
                    <br />
                    <div className="form-group">
                       
                        <input type="tex t" id="username" name="username" placeholder='Enter Your UserName'/>
                    </div>

                    <div className="form-group">
                        
                        <input type="password" id="password" name="password"  placeholder='Enter Your Password'/>
                    </div>
                    
                    <button type="submit">Log In</button>
                </form>

            </div>
        </div>

    );
};

export default Login;
