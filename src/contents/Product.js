import React, { useEffect, useMemo, useState } from 'react';
import {useLocation, Link} from 'react-router-dom'

import "./Product.scss"

function Product(){
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.state.info);
  const [pageProductList, setPageProductList] = useState([]);

  const getProductList = useMemo(() => {
    let productList = [
      {category : "electronics", imgSrc : "/imgs/clock_01.jpg", title : "Clock", soldOut : true, price : 35.00},
      {category : "electronics", imgSrc : "/imgs/diffuser_01.jpg", title : "Diffuser 01", soldOut : true, price : 70.00},
      {category : "electronics", imgSrc : "/imgs/diffuser_02.jpg", title : "Diffuser 02", soldOut : true, price : 72.00},
      {category : "electronics", imgSrc : "/imgs/humidifier_01.jpg", title : "Humidifier 01", soldOut : true, price : 75.00},
      {category : "electronics", imgSrc : "/imgs/humidifier_02.jpg", title : "Humidifier 02", soldOut : true, price : 75.00},
      {category : "electronics", imgSrc : "/imgs/speakers_01.jpg", title : "Speaker 01", soldOut : true, price : 85.00},
      {category : "electronics", imgSrc : "/imgs/speakers_02.png", title : "Speaker 02", soldOut : true, price : 82.00},
      {category : "electronics", imgSrc : "/imgs/speakers_03.png", title : "Speaker 03", soldOut : true, price : 79.00},
      {category : "cases", imgSrc : "/imgs/phone_case_01.jpg", title : "Phone Case 01", soldOut : true, price : 21.00},
      {category : "cases", imgSrc : "/imgs/phone_case_02.jpg", title : "Phone Case 02", soldOut : true, price : 17.00},
      {category : "cases", imgSrc : "/imgs/phone_case_03.jpg", title : "Phone Case 03", soldOut : true, price : 22.00},
      {category : "accessories", imgSrc : "/imgs/bottle_01.jpg", title : "Bottle", soldOut : true, price : 39.00},
    ];

    if(currentPage === 'all') setPageProductList(productList);
    else {
      let list = productList.filter(e => e.category === currentPage);
      setPageProductList(list);
    }
  }, [currentPage])
  
  useEffect(() => {
    return() => {
      //componentWillUnmount ????????? ???.
      setPageProductList(getProductList);
    }
  }, [getProductList])

  const renderProduct = pageProductList.map(e => (
    <div className="product-list-wrap" key={e.title}>
      <Link to={`/product-detail/${e.title}`} state={e}>
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
      </Link>
    </div>
  ))
  
  //
  useEffect(() => {
    //mount ?????? ??????
    setCurrentPage(location.state.info);
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