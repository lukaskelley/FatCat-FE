import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { Membership } from "./components/Membership/Membership";
import { Mint } from "./components/Mint/Mint";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
