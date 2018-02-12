import React from "react";
import { Link } from "react-router";
import { NavContainer } from "../../../theme/common/nav-link/nav-link-theme";

export const NavLink = ({ children, ...otherProps }) => (
  <NavContainer>
    <div
      className="hamburger"
      onClick={() => {
        otherProps.hamburger();
        //othis.sideBarOpen();
      }}
    >
      <div />
      <div />
      <div />
    </div>
    <div>
      {otherProps.headDetail.map((head, index) => (
        <Link key={index} to={head.path} activeClassName="active">
          {head.label}
        </Link>
      ))}
    </div>
  </NavContainer>
);
