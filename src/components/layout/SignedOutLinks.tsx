import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">SIGNUP</NavLink>
        <NavLink to="/">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
