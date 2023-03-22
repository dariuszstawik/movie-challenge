import styled, { css } from "styled-components";

export const StyledContentBox = styled.div`
  width: 60%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 120px;
  position: relative;

  /* ${({ isStartPage }) =>
    isStartPage
      ? css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 2fr;
          row-gap: 5px;
          column-gap: 40px;
        `
      : ""}; */
`;
