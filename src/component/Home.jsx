import React from 'react'
// import bigesh from '../assets/Photo/bigesh.jpg'
import "./hero.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import About from './About'
import Gallery from './Gallery';
import {Navbar} from './Navbar';
import Footer from './Footer';
import Team from './team';

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='image'>
        <div className='H1'>
            <h1>Capture the moments <br />you adore!!</h1>
            <p className='p'>The moments are beautiful to enjoy while taking a sip of tea</p>
          
        </div>
        </div>
        <div className='social'>
            <ul>
              <a href="https://www.instagram.com/freezy_heir/">
            <li><FaFacebookF />facebook</li>
            </a>
            <a href="https://www.instagram.com/freezy_heir/">
            
            <li><FaInstagram />instagram</li></a>
        
            </ul>
        </div>
        <About/>
        <Gallery/>
        <Team/>
        <Footer/>
        
    </>
  )
}
