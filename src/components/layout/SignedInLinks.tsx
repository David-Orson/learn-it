import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">NEW CARD</NavLink>
        <NavLink to="/">LOG OUT</NavLink>
        <NavLink to="/" className="pp">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
