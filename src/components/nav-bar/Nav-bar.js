import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/contacts">Contact</Link>
        <Link to="About">About</Link>
      </ul>
    </div>
  );
};

export default NavBar;
