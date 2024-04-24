import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', emailOrPhone: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, emailOrPhone, password, confirmPassword } = formData;
      if (!username || !emailOrPhone || !password || !confirmPassword) {
        throw new Error('All fields are required');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
      if (response.status === 201) {
        // Redirect to login page after successful signup
        window.location.href = '/login';
      } else {
        throw new Error('Signup failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.message || err.message || 'An error occurred');
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Hey there! Welcome</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <input type="text" name="emailOrPhone" value={formData.emailOrPhone} onChange={handleChange} className="form-input" placeholder="Enter email or phone number" />
        </div>
        <div className="form-group">
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input" placeholder="Confirm password" />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      <p className="login-link">Already have an account? <Link to="/login"><u>Log In</u></Link></p>
    </div>
  );
};

export default Signup;
