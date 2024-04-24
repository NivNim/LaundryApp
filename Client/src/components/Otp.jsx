// OTPForm.js

import React, { useState } from 'react';
import axios from 'axios';

const OTPForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/generate-otp', { email, phone });
      alert('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <button type="submit">Send OTP</button>
    </form>
  );
};

export default OTPForm;
