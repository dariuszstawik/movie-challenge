import React from "react";
import Hamburger from "../../atoms/Hamburger";
import Logo from "../../atoms/Logo";
import NavLinks from "../../molecules/NavLinks";
import { StyledNavbar } from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <NavLinks />
      <Hamburger />
    </StyledNavbar>
  );
};

export default Navbar;
