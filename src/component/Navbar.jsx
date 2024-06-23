// // Navbar.jsx

import React, { useState } from 'react';
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useCart } from '../global/CartContext';
import { useAuth } from '../global/AuthContext';

export const Navbar = () => {
  const { cart } = useCart();
  const { user} = useAuth();
  const [activeNav,setActiveNav]=useState(false);
  function getTotalShopItems(cart){
    return cart.reduce((total, item) => total + item.qty, 0);
  }

  function toggleNavItems(){
    setActiveNav((activeNav)=>!activeNav);
  }
  return (
    <div className='appwrapper'>
      <h3 className='navbar-title'>
        Photography
      </h3>
      <div className={`navbar-list ${activeNav?'active':''}`}>
        <a href="/">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="#gallery">Gallery</a>
        <a href="#footer">Contact Us</a>
        <Link to='/shop'>Shop</Link>
        <Link to='/booking'>Booking</Link>
        <Link to='/cart'>
        <div className="cartIconWrapper">
          <FaCartShopping className='cart-icon'/>
          <span>{cart.length>0?getTotalShopItems(cart):0}</span>
        </div>
        </Link>
        <Link to='/signin'>Sign In</Link> {/* Sign-in link */}
      </div>
      <button className={`hamBurger`} onClick={()=>toggleNavItems()}><span></span></button>
    </div>
  )
}

export default Navbar;
