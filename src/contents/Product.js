import React, { useEffect, useState } from 'react';
import {useLocation, Route, Routes} from 'react-router-dom'

import "./Product.scss"

function Product(){
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.state.info);
  const productList = [
    {category : "electronic", imgSrc : "/imgs/clock_01.jpg", title : "Clock", soldOut : true, price : 35.00},
    {category : "electronic", imgSrc : "/imgs/diffuser_01.jpg", title : "Diffuser 01", soldOut : true, price : 70.00},
    {category : "electronic", imgSrc : "/imgs/diffuser_02.jpg", title : "Diffuser 02", soldOut : true, price : 72.00},
    {category : "electronic", imgSrc : "/imgs/humidifier_01.jpg", title : "Humidifier 01", soldOut : true, price : 75.00},
    {category : "electronic", imgSrc : "/imgs/humidifier_02.jpg", title : "Humidifier 02", soldOut : true, price : 75.00},
    {category : "electronic", imgSrc : "/imgs/speakers_01.jpg", title : "Speaker 01", soldOut : true, price : 85.00},
    {category : "electronic", imgSrc : "/imgs/speakers_02.png", title : "Speaker 02", soldOut : true, price : 82.00},
    {category : "electronic", imgSrc : "/imgs/speakers_03.png", title : "Speaker 03", soldOut : true, price : 79.00},
    {category : "case", imgSrc : "/imgs/phone_case_01.jpg", title : "Phone Case 01", soldOut : true, price : 21.00},
    {category : "case", imgSrc : "/imgs/phone_case_02.jpg", title : "Phone Case 02", soldOut : true, price : 17.00},
    {category : "case", imgSrc : "/imgs/phone_case_03.jpg", title : "Phone Case 03", soldOut : true, price : 22.00},
    {category : "accessories", imgSrc : "/imgs/bottle_01.jpg", title : "Bottle", soldOut : true, price : 39.00},
  ]

  const renderProduct = productList.map(e => (
    <div className="product-list-wrap" key={e.title}>
      <div className="product-list-item" >
        <div className="product-list-item-img-wrap">
          <img src={e.imgSrc} alt="product-img" />  
          {
            e.soldOut 
            ?
            <div className="product-soldOut-wrap">
              <span>SOLD OUT</span>
            </div>
            :
            <></>
          }
        </div>
        <div className="product-list-item-title-wrap">
          <p className="product-list-item-title">{e.title}</p>
          <p className="product-list-item-price">{ (e.price).toFixed(2) }</p>
        </div>
      </div>
    </div>
  ))

  useEffect(() => {
    let checkCurrentPage = location.state.info;
    return() => {
      setCurrentPage(checkCurrentPage);
    }
  }, [location.state.info])


  return(
    <>
      <div className='product-container'>
        <div className="product-container-inner">
          {renderProduct}
        </div>
      </div>
    </>
  )
}

export default Product;