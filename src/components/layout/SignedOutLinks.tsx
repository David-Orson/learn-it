import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SIGNUP</NavLink>
        <NavLink to="/signin">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
