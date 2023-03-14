import React from "react";
import { Link } from "react-router-dom";
import LiLink from "../../atoms/LiLink";
import { navLinksData } from "./navLinksData";
import { StyledNavLinks } from "./StyledNavLinks";

const NavLinks = ({ children }) => {
  return (
    <StyledNavLinks>
      {navLinksData.map(({ path, content }) => {
        return (
          <LiLink>
            {" "}
            <Link to={path}>{content}</Link>
          </LiLink>
        );
      })}
    </StyledNavLinks>
  );
};

export default NavLinks;
