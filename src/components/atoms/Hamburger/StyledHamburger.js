import styled from "styled-components";

export const StyledHamburger = styled.div`
  margin: auto 0;
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.media.desktopLarge}) {
    display: none;
  } ;
`;
