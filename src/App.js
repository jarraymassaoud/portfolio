import React from "react";
import "./App.css";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";
import Skills from "./components/Skills";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
