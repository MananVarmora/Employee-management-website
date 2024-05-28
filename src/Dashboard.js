import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Dashboard.css'; // Import your CSS file

export const Dashboard = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ newUsername: '', newPassword: '' });

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', loginData); // Replace with your backend endpoint
      // Handle the response as needed, e.g., store user information in state or local storage
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', registerData); // Replace with your backend endpoint
      // Handle the response as needed, e.g., display a success message
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-buttons">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="register-button" onClick={handleRegisterClick}>
          Register
        </button>
      </div>

      {showLogin ? (
        <div className="login-form">
          <h2>Employee Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <button type="submit" className="login-submit">
              Log In
            </button>
          </form>
        </div>
      ) : null}

      {showRegister ? (
        <div className="register-form">
          <h2>Employee Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="newUsername">New Username:</label>
              <input
                type="text"
                id="newUsername"
                value={registerData.newUsername}
                onChange={(e) => setRegisterData({ ...registerData, newUsername: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={registerData.newPassword}
                onChange={(e) => setRegisterData({ ...registerData, newPassword: e.target.value })}
              />
            </div>
            <button type="submit" className="register-submit">
              Register
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
