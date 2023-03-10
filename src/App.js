import React from "react";
import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
