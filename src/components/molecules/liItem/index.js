import React from "react";
import { StyledLiItem } from "./StyledLiItem";

const LiItem = ({ children }) => {
  return (
    <StyledLiItem>
      <Button isInLiElement>{children}</Button>
    </StyledLiItem>
  );
};

export default LiItem;
