import React from "react";
import Logo from "../../atoms/Logo";
import NavLinks from "../../molecules/NavLinks";
import { StyledNavbar } from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <NavLinks />
    </StyledNavbar>
  );
};

export default Navbar;
