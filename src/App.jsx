import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Announcements from "./components/Announcements";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Announcements/>
        <Contact/>
        <Events/>
        <Login/>
        <Profile/>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
