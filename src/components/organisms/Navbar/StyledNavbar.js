import styled from "styled-components";

export const StyledNavbar = styled.div`
  z-index: 1;
  width: 72%;
  box-sizing: border-box;
  border-top: 3px solid black;
  margin: 0 auto;
  transform: translateX(6%);
  padding: 0 2%;
  margin-bottom: 1%;
  margin-top: 1%;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    justify-content: space-around;
  }

  &::after {
    content: "";
    position: absolute;
    width: 95%;
    border-bottom: 3px solid black;
    bottom: 0;
    left: 5%;
  }
`;
