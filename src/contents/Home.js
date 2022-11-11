import React, { useEffect, useState, useRef } from "react";

import "./Home.scss";
import "../Grid.scss";

function Home(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const savedCallback = useRef(null);
  
  const slideImgs = [
    {index : 0, alt:"bottle_img_01", src : "./imgs/bottle_01.jpg"},
    {index : 1, alt:"clock_img_01", src : "./imgs/clock_01.jpg"},
    {index : 2, alt:"diffuser_img_01", src : "./imgs/diffuser_01.jpg"},
    {index : 3, alt:"diffuser_img_02", src : "./imgs/diffuser_02.jpg"},
    {index : 4, alt:"humidifier_img_01", src : "./imgs/humidifier_01.jpg"},
    {index : 5, alt:"humidifier_img_02", src : "./imgs/humidifier_02.jpg"},
    {index : 6, alt:"phone_case_img_01", src : "./imgs/phone_case_01.jpg"},
    {index : 7, alt:"phone_case_img_02", src : "./imgs/phone_case_02.jpg"},
    {index : 8, alt:"phone_case_img_03", src : "./imgs/phone_case_03.jpg"},
  ]
  const renderSlideImg = slideImgs.map((e) => (
    <div className="slide-img-wrap" key={e.index}>
      <img src={e.src} alt={e.alt} />
    </div>  
  ))
  const renderSlideCircle = slideImgs.map((e)=>(
    <li className="slide-circle" key={e.index}></li>
  ))
  
  const sliderImgs = () => {

    let slides = document.getElementsByClassName('slide-img-wrap');
    let slidesCircle = document.getElementsByClassName('slide-circle');
    
    if(currentSlide < slideImgs.length){
      if(currentSlide >= 1){
        slides[currentSlide-1].style.opacity = 0;
        slidesCircle[currentSlide-1].style.backgroundColor = "#e2e2e2";
      } else if(currentSlide === 0){
        slides[slideImgs.length-1].style.opacity = 0;
        slidesCircle[slideImgs.length-1].style.backgroundColor = "#e2e2e2";
      }

      slides[currentSlide].style.opacity = 1;
      slidesCircle[currentSlide].style.backgroundColor = "#373737";
      
    }
  }

  const callback = () => {
    if(currentSlide === 9) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
    
  })

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
      sliderImgs();
    }
    const timer = setInterval(tick, 5000)
    return () => clearInterval(timer);
  })

  return(
    <>
      <div className="container">
        <div className="container-inner">
          <div className="slide-wrap">
            <div className="slider">
              {renderSlideImg}
            </div>
            
            <ul className="slide-circle-wrap">
              {renderSlideCircle}
            </ul>
          </div>

          <div className="row">
            <div className="col col-8">
              <div className="home-img-wrap">
                <img src="./imgs/speakers_01.jpg" alt="spearkers_img_01" />
              </div>
            </div>
            <div className="col col-4">
              <div className="home-img-wrap">
                <img src="/imgs/diffuser_01.jpg" alt="diffuser_img_01" />
                <img src="/imgs/diffuser_02.jpg" alt="diffuser_img_02" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-4">
              <div className="home-img-wrap">
                <img src="/imgs/link_img.png" alt="link_img" />
                <img src="/imgs/phone_case_01.jpg" alt="phone_case_img_01" className="phone-case-img" />
              </div>
            </div>
            <div className="col col-8">
              <div className="home-img-wrap">
                <img src="/imgs/clock_01.jpg" alt="clock_img_01" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-4">
              <div className="home-img-wrap">
                <img src="/imgs/speakers_03.png" alt="speaker_img_03"/>
              </div>
            </div>
            <div className="col col-8">
              <div className="home-img-wrap">
                <img src="/imgs/speakers_02.png" alt="speaker_img_02"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;