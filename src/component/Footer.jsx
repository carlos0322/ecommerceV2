import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footer-container">
        <div className="container-left">
          <ul className='footer-content'>
            <li className="li-one">About</li>
            <li>Suppliers</li>
            <li>News & blog</li>
            <li>Advertise with Us</li>
          </ul>
        </div>
        <div className="container-middle">
          <ul>
            <li className="li-two">Help</li>
            <li>Returns</li>
            <li>Track Order</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="container-right">
          <ul>
            <li className="li-three">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Startup</li>
          </ul>
        </div>
      <div className="social-icons">
          <ul className='icons'>
            <li>
              <a
                href="https://www.facebook.com/"
                className="fa fa-facebook"
                target="_blank"
                rel="noreferrer"
              ><i ></i></a>
            </li>
            <li>
              <a
                href="https://twitter.com/?lang=en"
                className="fa fa-twitter"
                target="_blank"
                rel="noreferrer"
              ><i ></i></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                className="fa fa-youtube"
                target="_blank"
                rel="noreferrer"
              ><i ></i></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="fa fa-instagram"
                target="_blank"
                rel="noreferrer"
              ><i ></i></a>
            </li>
          </ul>
          
          </div>
          <p>&copy; Carlos Lopez: R2H E-commerce Project. All Rights Reserved.</p>
          </div>
   
  </footer>
    </div>
  );
}

export default Footer;