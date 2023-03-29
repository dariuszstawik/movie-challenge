import styled, { css } from "styled-components";

export const StyledNavLinks = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.media.desktopLarge}) {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ isMobileMenuActive }) =>
    isMobileMenuActive &&
    css`
      display: flex;
      flex-direction: column;
      line-height: 4.5;
      background-color: white;
      width: 40%;
      z-index: 1;
    `}

  a {
    display: inline-block;
    padding: 0 5%;
    color: black;
    text-decoration: none;
    font-weight: 500;
    z-index: 1;
  }
`;
