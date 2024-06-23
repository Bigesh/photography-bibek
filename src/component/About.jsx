import React, { useState } from 'react';
import "./About.css";
import about from '../assets/Photo/about3.webp';

export default function About() {
  const [activeItem, setActiveItem] = useState(0); // Initialize activeItem state with the index of the first item

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='main wrapper' id='aboutus'>
      <h1>About Us</h1>
      <div className='About-lists'>
        <div className='button-wrapper'>
          <ul>
            <li onClick={() => handleClick(0)} className={activeItem === 0 ? 'active' : ''}>Our Style</li>
            <li onClick={() => handleClick(1)} className={activeItem === 1 ? 'active' : ''}>Mission</li>
            <li onClick={() => handleClick(2)} className={activeItem === 2 ? 'active' : ''}>Vision</li>
          </ul>
          <div className="content">
            {activeItem === 0 && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque delectus autem vitae? Distinctio illo facilis enim, ad est quibusdam, obcaecati deserunt repudiandae dolorem ratione sequi pariatur dicta ipsam voluptatibus?</p>}
            {activeItem === 1 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates explicabo nam et, odit esse maxime vitae molestiae at eaque libero atque blanditiis. Quis commodi, eligendi fuga laboriosam tempore placeat!</p>}
            {activeItem === 2 && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis a deserunt debitis optio consequatur quisquam voluptatibus, enim soluta, aliquam maxime vel perspiciatis esse, amet modi expedita at ratione perferendis quis?</p>}
          </div>
        </div>
        <img src={about} alt="About us" />
      </div>
    </div>
  );
}
