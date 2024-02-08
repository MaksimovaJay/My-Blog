import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="logo" to="/">My Blog</Link>
        </div>
        <div>
          <NavLink className="link-nav" to="/">Home</NavLink>
          <NavLink className="link-nav" to="/add">Add</NavLink>
          <NavLink className="link-nav" to="/about">About</NavLink>
          <NavLink className="link-nav" to="/contacts">Contacts</NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;