import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../../../redux/actions";
import { StyledHamburger } from "./StyledHamburger";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";

const Hamburger = () => {
  const dispatch = useDispatch();
  const selectedIsMobileMenuActive = useSelector(
    (state) => state.isMobileMenuActive
  );

  return (
    <StyledHamburger>
      {selectedIsMobileMenuActive ? (
        <CloseIcon
          fontSize="large"
          onClick={() => dispatch(toggleMobileMenu())}
        />
      ) : (
        <MenuIcon
          fontSize="large"
          onClick={() => dispatch(toggleMobileMenu())}
        />
      )}
    </StyledHamburger>
  );
};

export default Hamburger;
