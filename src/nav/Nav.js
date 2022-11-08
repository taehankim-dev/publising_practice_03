import React, { useEffect, useState } from "react";
import "./Nav.scss";

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faShoppingBag, faBars} from '@fortawesome/free-solid-svg-icons'

function Nav(){
  const [shopCount, setShopCount] = useState(0);

  const [pageWidth, setPageWidth] = useState(document.body.offsetWidth);

  const handleResize = () => {
    setPageWidth(document.body.offsetWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize)
    return() => {
      window.addEventListener("resize", handleResize)
    } 
  },[]);

  return(
    <>
      <div className="nav-container">
        <div className="nav-inner">
          <ul>
            <li>
              {
                pageWidth > 1000
                ? 
                <div className="nav-inner-home">
                  <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                  </Link>
                </div>
                :
                <div className="nav-inner-phone">
                  <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                  </Link>
                  <ul>
                    <li>
                      <div className="shopCount-wrap">
                        {shopCount}
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBars} />
                    </li>
                  </ul>
                </div>
              }
            </li>
            <li className="nav-link">
              <Link to="">
                electronic
              </Link>
            </li>
            <li className="nav-link">
              <Link to="">
                <div className="hidden-text case-line"></div>case
              </Link>
            </li>
            <li className="nav-link">
              <Link to="">
                <div className="hidden-text accessories-line"></div>accessories
              </Link>
            </li>
            <li className="nav-link">
              <Link to="">
                <div className="hidden-text all-line"></div>all
              </Link>
            </li>
            <li>
              <Link to="">
                <button>ABOUT</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav;