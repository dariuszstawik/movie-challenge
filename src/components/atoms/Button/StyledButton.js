import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background-color: white;
  cursor: pointer;
  box-sizing: border-box;

  ${({ isInLiElement }) =>
    isInLiElement
      ? css`
          border: "none";
        `
      : css`
          border: "1px solid gray";
          width: 80px;
          height: 40px;
          font-weight: 500;
        `}
`;
