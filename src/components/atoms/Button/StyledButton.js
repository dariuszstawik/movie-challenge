import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background-color: #ffcc00ff;
  cursor: pointer;
  box-sizing: border-box;
  border: "none";

  ${({ isInLiElement }) =>
    !isInLiElement &&
    css`
      width: 80px;
      height: 40px;
      font-weight: 500;
    `}
`;
