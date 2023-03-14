import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  background-color: white;
  color: inherit;
  cursor: pointer;

  ${({ isInLiElement }) =>
    isInLiElement
      ? css`
          border: "none";
        `
      : css`
          border: "1px solid black";
          width: 80px;
          height: 40px;
          font-weight: bold;
        `}
`;
