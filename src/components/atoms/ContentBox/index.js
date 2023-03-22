import React from "react";
import { StyledContentBox } from "./StyledContentBox";

const ContentBox = ({ isStartPage, children }) => {
  return (
    <StyledContentBox isStartPage={isStartPage}>{children}</StyledContentBox>
  );
};

export default ContentBox;
