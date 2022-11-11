import React, { useEffect, useState } from "react";
import "./Nav.scss";

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faShoppingBag, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

function Nav(){
  const [shopCount] = useState(0);
  const [toggleMenu, setToogleMenu] = useState(false);
  const [toggleDestination, setToggleDestination] = useState(false);
  const [selectLang, setSelectLang] = useState("English");
  const [selectShip, setSelectShip] = useState("United States (US)");
  const [pageWidth, setPageWidth] = useState(document.body.offsetWidth);

  //언어리스트
  const languageList = [
    {idx : 1, language : "English"},
    {idx : 2, language : "한국어"},
  ]

  //국가리스트
  const shipList = [
    {idx : 1, country : 'United States (US)'},
    {idx : 2, country : 'Korea'},
    {idx : 3, country : 'Japan'},
  ]

  //Language 선택
  const handleLangSelect = (e) => {
    setSelectLang(e.target.value.language)
  }

  //ship location 선택
  const handleShipSelect = (e) => {
    setSelectShip(e.target.value.language)
  }

  //화면 사이즈 변화 감지
  const handleResize = () => {
    setPageWidth(document.body.offsetWidth);
  }

  //phone menu effect
  const handleToogleMenu = () => {
    const menu = document.getElementsByClassName('nav-inner-phone-menu-wrap')[0];

    if(!toggleMenu) {
      setToogleMenu(true);
      menu.style.display = "block"
      menu.classList.add("showMenu");
      menu.classList.remove("closeMenu");
    } else {
      setToogleMenu(false);
      menu.classList.add("closeMenu");
      menu.classList.remove("showMenu");
    }
  }

  //destination 클릭 시 height 조정
  const handleToggleDestination = () => {
    const menuWrap = document.getElementsByClassName('nav-inner-phone-menu-wrap')[0];

    const destinationWrap = document.getElementsByClassName('nav-inner-phone-menu-destination-wrap')[0];
    const destination = document.getElementsByClassName('nav-inner-phone-menu-destination')[0];
    const menu = document.getElementsByClassName('nav-inner-phone-menu')[0];

    if(!toggleDestination) {
      setToggleDestination(true);
      destinationWrap.classList.add("showDes");
      destinationWrap.classList.remove("closeDes");
      destination.classList.add("showDes");
      destination.classList.remove("closeDes");

      destinationWrap.style = "border-bottom:0;"
      menu.style.height = "230px";
      menuWrap.style = "height : 250px !important; display:block !important";
    } else {
      setToggleDestination(false);
      destinationWrap.classList.add("closeDes");
      destinationWrap.classList.remove("showDes");

      destination.classList.remove("showDes");
      destination.classList.add("closeDes");

      menu.style.height = "160px";
      menuWrap.style.height = "160px";
    }
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
                    <li onClick={handleToogleMenu}>
                      <FontAwesomeIcon icon={faBars} />
                    </li>
                  </ul>

                  <div className="nav-inner-phone-menu-wrap closeMenu">
                    <span onClick={handleToogleMenu}>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <ul className="nav-inner-phone-menu">
                      <li className="nav-inner-phone-menu-destination-wrap">
                        <ul className="nav-inner-phone-menu-destination">
                          <li onClick={handleToggleDestination}>Destination</li>
                          <li>
                            <select onChange={handleLangSelect}>
                              {languageList.map(e => (
                                <option value={e.language} key ={e.idx}>{e.language}</option>
                              ))}
                            </select>
                          </li>
                          <li>
                            <select onChange={handleShipSelect}>
                              {shipList.map(e => (
                                <option value={e.country} key ={e.idx}>{e.country}</option>
                              ))}
                            </select>
                          </li>
                        </ul>
                      </li>
                      <li>Store</li>
                      <li>News</li>
                      <li>Help</li>
                    </ul>
                  </div>
                </div>
              }
            </li>
            <li className="nav-link">
              <Link to="/product/electronics" state={{info : "electronic"}}>
                electronic
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/product/cases">
                <div className="hidden-text case-line"></div>case
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/product/accessories">
                <div className="hidden-text accessories-line"></div>accessories
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/product/all" state={{info : "all"}}>
                <div className="hidden-text all-line"></div>all
              </Link>
            </li>
            <li>
              <Link to="/">
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