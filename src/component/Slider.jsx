import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../pages/index.css'


function CarouselFade() {
    return (
      <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="./images/xboxlogo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="title">Xbox
          </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="./images/xboxx.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Xbox X</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="./images/xboxs.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Xbox Series S</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
       <Carousel fade>
         <Carousel.Item>
           <img
             className="d-block w-50"
             src="./images/nintendologo.png"
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>Nintendo</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-50"
             src="./images/switch.png"
             alt="Second slide"
           />
   
           <Carousel.Caption>
             <h3>Nintendo Switch</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-50"
             src="./images/nintendogames.png"
             alt="Third slide"
           />
   
           <Carousel.Caption>
             <h3>Games</h3>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
       </div>
    );
  }
  
  export default CarouselFade;