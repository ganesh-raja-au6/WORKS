import React from "react";
import { NavLink, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/movies" className="nav-link nav-item">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-link nav-item">
              Customers
            </NavLink>
            <NavLink to="/rentals" className="nav-link nav-item">
              Rentals
            </NavLink>
            <NavLink to="/login" className="nav-link nav-item ml-auto">
              Login
            </NavLink>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
