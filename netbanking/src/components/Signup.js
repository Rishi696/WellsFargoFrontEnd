import React, { useState } from 'react';
import './Signup.css'; // You can create this CSS file for styling
import axios from 'axios'; // Import the Axios library

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    if (!email) {
      setErrors({ ...errors, email: 'Email is required' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters long' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  const validateAadhar = () => {
    if (aadhar.length !== 12) {
      setErrors({ ...errors, aadhar: 'Aadhar number must be 12 digits' });
    } else {
      setErrors({ ...errors, aadhar: '' });
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    validateEmail();
    validatePassword();
    validateAadhar();
    
    // Implement more validation rules here

    return validationErrors;
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    try {
        const response = await axios.post('http://localhost:8000/users', {
          username,
          email,
          password,
        //   confirmPassword,
        //   aadhar,
        //   address,
        //   dob,
        //   phone
          // ... other data fields
        });
  
        if (response.status === 201) {
          console.log('User added successfully');
          // You can perform any action upon successful user addition
        } else {
          console.error('Error adding user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Aadhar Number</label>
          <input
            type="text"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            onBlur={validateAadhar}
            required
          />
          {errors.aadhar && <span className="error-message">{errors.aadhar}</span>}
        </div>
        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
