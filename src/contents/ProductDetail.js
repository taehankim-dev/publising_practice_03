import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';

import "./ProductDetail.scss"

function ProductDetail(){
  const location = useLocation();
  const [productData, setProductData] = useState([location.state]);
  console.log(productData)
  useEffect(() => {
    setProductData([location.state])
  }, [location.state])

  const renderProductDetail = productData.map(e => (
    
      <div className="product-detail-inner" key={`${e.category}-${e.title}`}>
        <div className="product-detail-img-wrap col-8">
          <img src={e.imgSrc} alt="product-img" />
        </div>
        <div className="product-detail-text-wrap col-4">
          <div className="product-detail-text-title">
            <span>{e.title}</span>
          </div>
          <div className="product-detail-text-price">
            <span>{e.price}</span>
          </div>
          <div className="product-detail-text-body">
            
          </div>
        </div>
      </div>
  ))


  return(
    <>
      <div className="product-detail-container">
        {renderProductDetail}
      </div>
    </>
  )
}

export default ProductDetail;