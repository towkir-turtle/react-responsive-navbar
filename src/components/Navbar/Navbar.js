import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <h2>Navbar</h2>
      </div>

      <div
        className={
          showLinks
            ? "app_navbar-links app_navbar-links_mobile"
            : "app_navbar-links"
        }
      >
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="app_navbar-social-media">
        <ul className="app_navbar-social-media_desktop">
          <li>
            <Link to="/">
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagramSquare />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitterSquare />
            </Link>
          </li>
        </ul>
        <div className="hamburger_menu">
          <Link to="/" onClick={() => setShowLinks(!showLinks)}>
            <GiHamburgerMenu />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
