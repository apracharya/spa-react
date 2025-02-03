import React, { useState } from "react";
import { Bot as Lotus, Menu, X } from 'lucide-react';
import '../styles/navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-header">
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Logo */}
            <NavLink href="/" className="nav-brand">
              {/* <Lotus className="nav-logo w-8 h-8" /> */}
              <img className="nav-logo" src="./src/assets/respira-logo.png" alt="" />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="nav-links">
              <button className="nav-link">Services</button>
              <button className="nav-link">About</button>
              <button className="nav-link">Gallery</button>
              <button className="nav-link">Contact</button>
              <button href="/book" className="nav-book-btn bg-slate-800">Book Now</button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`nav-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="/services" className="nav-mobile-link">Services</a>
            <a href="/about" className="nav-mobile-link">About</a>
            <a href="/gallery" className="nav-mobile-link">Gallery</a>
            <a href="/contact" className="nav-mobile-link">Contact</a>
            <a href="/book" className="nav-book-btn text-center">Book Now</a>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
