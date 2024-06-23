// // Navbar.jsx

import React from 'react';
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='appwrapper'>
      <h3 className='navbar-title'>
        Photography
      </h3>
      <div className='navbar-list'>
        <a href="/">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="#gallery">Gallery</a>
        <a href="#footer">Contact Us</a>
        <Link to='/shop'>Shop</Link>
        <Link to='/booking'>Booking</Link>
        <Link to='/cart'><FaCartShopping className='cart-icon'/></Link>
        <Link to='/signin'>Sign In</Link> {/* Sign-in link */}
      </div>
    </div>
  )
}

export default Navbar;
