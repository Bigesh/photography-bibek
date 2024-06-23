import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='footer-wrapper' id='footer'>
        <div className='left-content'>
            <h3>Photography</h3>
            <p>The world without photography will be meaningless to us if there is no light and color, which opens up for our minds and expresses passion.</p>

        </div>
        <div className='connected'>

            <h3>Get Connected</h3>
        <ul>
              <a href="https://www.instagram.com/freezy_heir/">
            <li><FaFacebookF />facebook</li>
            </a>
            <a href="https://www.instagram.com/freezy_heir/">
            
            <li><FaInstagram />instagram</li></a>
        
            </ul>
        </div>
        <div className='contacts'>
            <h3>Contacts</h3>
            <p>Phone:9869217922</p>
            <p>Email:bibek@gmail.com</p>

        </div>

    </div>

    
    </>
    
  )
}
