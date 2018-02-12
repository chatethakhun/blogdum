import React from "react";
import { NavContainer } from "../../../theme/common/nav-link/nav-link-theme";

export const NavLink = ({ children, ...props }) => (
  <NavContainer>
    <div
      className="hamburger"
      onClick={() => {
        props.hamburger();
        //othis.sideBarOpen();
      }}
    >
      <div />
      <div />
      <div />
    </div>
    <div className='log-out'>
        <p onClick={props.logOut}> LOG OUT</p>
    </div>
  </NavContainer>
);

// <div>
// {otherProps.headDetail.map((head, index) => (
//   <Link key={index} to={head.path} activeClassName="active">
//     {head.label}
//   </Link>
// ))}
// </div>
