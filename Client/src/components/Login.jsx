import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      if (!email || !password) {
        setError('Both email/phone number and password are required');
        return;
      }

      const response = await axios.post('/api/login', formData);

      if (response.status === 200) {
        console.log('Login successful');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome back! Glad to see you again!</h1>
      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="forgot-password">
        <h4>Forgot Password?</h4>
      </div>
      <div className="register">
        {/* Use Link component for navigation to register page */}
        <p>
          Don't have an account? <Link to="/register"><u>Register Now</u></Link>
        </p>
      </div>
    </div>
  );
  
};

export default Login;
