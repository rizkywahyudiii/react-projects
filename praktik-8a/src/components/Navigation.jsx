import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;
    </nav>
  );
}

export default Navigation;