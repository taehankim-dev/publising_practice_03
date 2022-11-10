import React, {useEffect, useState} from "react";

import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import ContentsRouter from "./contents/ContentsRouter";
import "./App.scss"

function App() {
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
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <section>
        <ContentsRouter />
      </section>
      {
        pageWidth > 767 ?
        <footer>
          <Footer />
        </footer>
        :
        <></>
      }
      
    </div>
  );
}

export default App;
