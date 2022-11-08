import React from "react";

import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import ContentsRouter from "./contents/ContentsRouter";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <section>
        <ContentsRouter />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
