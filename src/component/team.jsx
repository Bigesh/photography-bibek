import React from 'react';
import './Team.css';
import smaran from '../assets/Photo/smaran.jpg';
import Sakshyam from '../assets/Photo/Skashyam.jpg';
import Bibek from '../assets/Photo/bibek.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

export default function Team() {
  return (
    <div className="main-wrapper">
      <h1>
        <span className="text-white">Our</span> <span className="text-orange">Team</span>
      </h1>
      <div className="Image-wrapper">
        <div className="image-hover-main">
          <div className='imagebox'>
          <div className="overlay">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </div>
          <img src={smaran} alt="Smaran Sapkota" />
          </div>
          <h3 style={{color:'white'}}>Smaran Sapkota</h3>
          <p style={{color:'white'}}>Editor</p>
        </div>
        <div className="image-hover-main">
        <div className='imagebox'>
            <div className="overlay">
              <a href='https://www.instagram.com/freezy_heir/'>
              <FaFacebookF className="icon" /></a>
              <a href="https://www.instagram.com/freezy_heir/"><FaInstagram className="icon" /></a>
            </div>
            <img src={Sakshyam} alt="Sakshyam Kadayat" />
          </div>
          <h3 style={{color:'white'}}>Sakshyam Kadayat</h3>
          <p style={{color:'white'}}>Drone Expert</p>
        </div>
        <div className="image-hover-main">
        <div className='imagebox'>
            <div className="overlay">
              <FaFacebookF className="icon" />
              <FaInstagram className="icon" />
            </div>
            <img src={Bibek} alt="Bibek Gurung" />
          </div>
          <h3 style={{color:'white'}}>Bibek Gurung</h3>
          <p style={{color:'white'}}>Cameraman</p>
        </div>
      </div>
    </div>
  );
}
