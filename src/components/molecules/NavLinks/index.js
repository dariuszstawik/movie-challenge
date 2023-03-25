import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMobileMenu } from "../../../redux/actions";
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
      {navLinksData.map(({ path, content }, i) => {
        return (
          <LiLink key={i}>
            {" "}
            <Link to={path} onClick={() => dispatch(closeMobileMenu())}>
              {content}
            </Link>
          </LiLink>
        );
      })}
    </StyledNavLinks>
  );
};

export default NavLinks;
