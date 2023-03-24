import styled, { css } from "styled-components";

export const StyledContentBox = styled.div`
  width: 60%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  padding-top: 30px;
  padding-left: 0;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-left: 120px;
  } ;
`;
