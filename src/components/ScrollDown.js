import React, { useRef, useEffect } from 'react';
import { Link } from "react-scroll";

import './ScrollDown.css'

const ScollDown = () => {

    const arrowOne = useRef(null);

    const animation = () => {
      let opacityLevel = 1;
      let stan = 0.003500;
      setInterval(() => {
        if (opacityLevel >= 1){
          stan = -stan;
        }else if (opacityLevel <= 0){
          stan = -stan;
        }
        opacityLevel += stan
        arrowOne.current.style.opacity = opacityLevel;
      }, requestAnimationFrame);
    }
  
    useEffect(() => {
      animation();
    });

    return (
        <div className="arrow">
          <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
          >
            portfolio
          </Link>
          <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
          >
            <i className="fas fa-chevron-down" ref={arrowOne}></i>
          </Link>
        </div>
    )
}

export default ScollDown;