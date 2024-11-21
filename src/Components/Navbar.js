import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navbarStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive === true ? "red" : "green",
    };
  };
  return (
    <>
      <nav>
        <NavLink style={navbarStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navbarStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navbarStyles} to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
