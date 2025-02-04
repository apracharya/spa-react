import React, { useEffect, useState } from "react";
import { Bot as Lotus, Menu, X } from "lucide-react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import useScrollToComponent from "../functions/useScrollToComponent";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const scrollToComponent = useScrollToComponent();

  useEffect(() => {
    // to close mobile menu when window is above 768px
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <NavLink to="/" className="nav-brand">
            {/* <Lotus className="nav-logo w-8 h-8" /> */}
            <img
              className="nav-logo"
              src="./src/assets/respira-logo-main.svg"
              alt=""
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <button
              onClick={() => scrollToComponent("service-section")}
              className="nav-link"
            >
              Services
            </button>
            <button className="nav-link">About</button>
            <button
              onClick={() => scrollToComponent("gallery-section")}
              className="nav-link"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToComponent("footer-section")}
              className="nav-link"
            >
              Contact
            </button>
            <NavLink to="/booking" className="nav-book-btn">
              Book Now
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`text-left nav-mobile-menu ${isMenuOpen ? "active" : ""}`}
        >
          <button
            onClick={() => scrollToComponent("service-section")}
            className="nav-mobile-link nav-link"
          >
            Services
          </button>
          <button className="nav-mobile-link nav-link">About</button>
          <button
            onClick={() => scrollToComponent("gallery-section")}
            className="nav-mobile-link nav-link"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToComponent("footer-section")}
            className="nav-mobile-link nav-link"
          >
            Contact
          </button>
          <NavLink to="/booking" className="nav-book-btn text-center">
            Book Now
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
