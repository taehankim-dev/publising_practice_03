import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

function ContentsRouter(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/product/*`} element={<Product />} />
        <Route path={`/product-detail/*`} element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default ContentsRouter;