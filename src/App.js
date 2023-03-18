import React from "react";
import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
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
