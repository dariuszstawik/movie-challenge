import React from "react";
import Button from "../../atoms/Button";
import { StyledLiItem } from "./StyledLiItem";

const LiItem = ({ movie }) => {
  return (
    <StyledLiItem>
      <Button isInLiElement>{movie.title}</Button>
    </StyledLiItem>
  );
};

export default LiItem;
