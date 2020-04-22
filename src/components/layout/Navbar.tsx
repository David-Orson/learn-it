import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper primary">
      <div className="container">
        <Link to="/" className="logo">
          LearnIt
        </Link>
        <SignedInLinks />
        {/* Conditional Rendering will prevent broken layout */}
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
