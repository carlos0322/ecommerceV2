import React from 'react'
import './Nav.css'



const Nav = () => {
  return (
    <>
      <header>
    {/* Navigation Bar*/}
    <nav>
        <label className="logo">GOOD GAMES</label>
        <ul>
         
          <li className="navbtn"><a href="/">Home</a></li>
          <li className="navbtn"><a href="/Products">Products</a></li>
          <li className="navbtn"><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
   
  </header>

      </>
  )
}

export default Nav;
