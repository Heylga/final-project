import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import swopbook from "../../img/swopbook.png"
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar">
       
      <div className="container">

      <Link to="/">
       <img
          className="logoNav"
          src={swopbook}
          alt="Responsive image"
        />
        </Link>

        <div className="ml-auto">
          <Link to="/allbooks">
            <button type="button" className="btn btn-outline-light me-1">
              See all books
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn btn-outline-light me-1">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="btn btn-outline-light ms-1">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
