// // Navbar.jsx

import React, { useState } from "react";
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "../global/CartContext";
import { useAuth } from "../global/AuthContext";
import { BiLogOut, BiUser } from "react-icons/bi";

export const Navbar = () => {
  const { cart } = useCart();
  const { user,logout } = useAuth();
  const [activeNav, setActiveNav] = useState(false);
  function getTotalShopItems(cart) {
    return cart.reduce((total, item) => total + item.qty, 0);
  }

  function toggleNavItems() {
    setActiveNav((activeNav) => !activeNav);
  }

  function logoutHandler(){
    logout();
  }
  return (
    <div className="appwrapper wrapper">
      <h3 className="navbar-title">Photography</h3>
      <div className="main-nav-content">
        <div className={`navbar-list ${activeNav ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#aboutus">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#footer">Contact Us</a>
          <Link to="/shop">Shop</Link>
          <Link to="/booking">Booking</Link>
          {user?.email==="bigeshadmin@gmail.com" ? ( <Link to="/customers">Customer Bookings</Link>):null}
          <Link to="/cart">
            <div className="cartIconWrapper">
              <FaCartShopping className="cart-icon" />
              <span>{cart.length > 0 ? getTotalShopItems(cart) : 0}</span>
            </div>
          </Link>
          {user?.email ? (
          <div className="userProfile dropdown">
            {user?.providerData?.photoURL ? (
              <img
                src={`${user?.providerData?.photoURL}`}
                alt=""
                className="userProfile__img"
              />
            ) : (
              <BiUser className="cicon"></BiUser>
            )}
            <div className="userProfile__email">{user?.email}</div>
            <div className="dropdown-content ">
              <div className="userProfile" onClick={()=>logoutHandler()}>
              <BiLogOut className="cicon"></BiLogOut>
              Logout
              </div>
            </div>
       
          </div>
        ) : <Link to="/signin">Sign In</Link>}
        </div>
       
        <button className={`hamBurger`} onClick={() => toggleNavItems()}>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
