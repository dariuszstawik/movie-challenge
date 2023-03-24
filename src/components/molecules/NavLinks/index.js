import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LiLink from "../../atoms/LiLink";
import { navLinksData } from "./navLinksData";
import { StyledNavLinks } from "./StyledNavLinks";

const NavLinks = ({ children }) => {
  const selectedIsMobileMenuActive = useSelector(
    (state) => state.isMobileMenuActive
  );
  const dispatch = useDispatch;

  return (
    <StyledNavLinks isMobileMenuActive={selectedIsMobileMenuActive}>
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
