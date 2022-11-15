import React, { useEffect, useMemo, useState } from "react";
import {useLocation} from 'react-router-dom';

import "./ProductDetail.scss"

function ProductDetail(){
  const location = useLocation();
  const [productData, setProductData] = useState([location.state]);

  const getProductList = useMemo(() => {
    let productList = [
      {title : "Clock", text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
      {title : "Diffuser 01", text : "Diffuser 01 is simply dummy text of the printing and typesetting industry."},
      {title : "Diffuser 02", text : "Diffuser 02 is simply dummy text of the printing and typesetting industry."},
      {title : "Humidifier 01", text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
      {title : "Humidifier 02", text : "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
      {title : "Speaker 01", text : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
      {title : "Speaker 02", text : "Speaker 02 is simply dummy text of the printing and typesetting industry."},
      {title : "Speaker 03", text : "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
      {title : "Phone Case 01", text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
      {title : "Phone Case 02", text : "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},
      {title : "Phone Case 03", text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque ut augue nec imperdiet. Suspendisse nunc erat, sollicitudin tempus libero eu, dictum interdum sem."},
      {title : "Bottle", text : "Vestibulum sollicitudin enim magna. In hac habitasse platea dictumst. In quis metus efficitur, scelerisque nisi vel, fringilla metus."},
    ];
    let data = productData[0];
    let target = productList.filter(e => (e.title === data.title ? data["text"] = e.text  : null))
    
    return target;

  }, [productData])

  useEffect(() => {
    return() => {setProductData(getProductList)}
  }, [getProductList  ])
  

  const renderProductDetail = productData.map(e => (
    
      <div className="product-detail-inner" key={`${e.category}-${e.title}`}>
        <div className="product-detail-img-wrap">
          <img src={e.imgSrc} alt="product-img" />
        </div>
        <div className="product-detail-text-wrap">
          <div className="product-detail-text-title">
            <p>{e.title}</p>
          </div>
          <div className="product-detail-text-price">
            <p>{e.price + ".00"} <span>USD</span></p>
          </div>
          <div className="product-detail-text-body">
            <p>{e.text}</p>
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