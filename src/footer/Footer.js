import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faVimeo, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";

function Footer(){
  const [showSelectLang, setShowSelectLang] = useState(false);
  const [selectLang, setSelectLang] = useState("English");
  const [selectShip, setSelectShip] = useState("United States (US)");

  const languageList = [
    {idx : 1, language : "English"},
    {idx : 2, language : "한국어"},
  ]

  const shipList = [
    {idx : 1, country : 'United States (US)'},
    {idx : 2, country : 'Korea'},
    {idx : 3, country : 'Japan'},
  ]

  //Language 클릭 시 toggle
  const toggleSelectLang = (e) => {
    e.preventDefault();
    if(!showSelectLang) setShowSelectLang(true);
    else setShowSelectLang(false);
  }

  //Language 선택
  const handleLangSelect = (e) => {
    setSelectLang(e.target.value.language)
  }

  //ship location 선택
  const handleShipSelect = (e) => {
    setSelectShip(e.target.value.language)
  }

  return(
    <>
      <div className="footer-container">
        <div className="footer-inner">
          <div className="footer-menu-wrap">
            <ul className="footer-menu">
              <li className="footer-menu-language">
                <button onClick={toggleSelectLang}>
                  <span>Language</span>
                  <span>
                    <FontAwesomeIcon icon={faCaretUp} />
                  </span>
                </button>
                {showSelectLang ? 
                  <></>
                  :
                  <div className="footer-menu-language-select-wrap">
                    <ul className="language-select-text">
                      <li>Language</li>
                      <li>Shipping Destination</li>
                    </ul>
                    <ul className="language-select">
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
                  </div>
                }

              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">Store</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>
            At 11+, we strive to design happiness in our product. (c) Arro Co., Ltd. All rights reserved.
            </p>
          </div>
          <div className="footer-link-wrap">
            <ul className="footer-link">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faVimeo} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;