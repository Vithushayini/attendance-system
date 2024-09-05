import './LoginPage.css';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function LoginPage(){
    

    return (
        <div className="login-page-container">
            <section className="login-block">
                <div className="login-container">
                    <div className="login-content">
                        <h2 className="login-title">Login Now</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="username" className="login-label">Username</label>
                                <input
                                    type="text"
                                    className="login-input"
                                    name="username"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="login-label">Password</label>
                                <input
                                    type="password"
                                    className="login-input"
                                    name="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="login-btn" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );

}