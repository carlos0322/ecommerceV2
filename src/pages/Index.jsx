
import React from 'react';
import './index.css'
import Slider from '../component/Slider';

const Home = () => {
    return (
      <div className="whole-container">
      <div className="left-container">
      <h1 className="center-title">Welcome To GG's</h1>
      <p className="phrase">We provide the best online services for new or used Console, Games, and Accessories!</p>
   
      </div>
      <Slider/>
      </div>
    )
  }
  
  export default Home