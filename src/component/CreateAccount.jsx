import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'; 
import {Navbar} from './Navbar'; 
import Footer from './Footer'; 
import { auth } from '../Config/firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include both uppercase and lowercase letters');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      console.log('User created:', userCredential.user);
      navigate('/signin');
    } catch (error) {
      setError(error.message);
      console.error('Firebase Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text');
    e.target.value = pasteData;
    e.target.name === 'password' ? setPassword(pasteData) : setConfirmPassword(pasteData);
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onPaste={handlePaste}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onPaste={handlePaste}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
3