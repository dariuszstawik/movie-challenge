import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 72%;
  box-sizing: border-box;
  border-top: 3px solid black;
  margin: 0 auto;
  transform: translateX(6%);
  padding: 0 2%;
  margin-bottom: 1%;
  margin-top: 1%;
  display: flex;
  justify-content: space-around;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 95%;
    border-bottom: 3px solid black;
    bottom: 0;
    left: 5%;
  }
`;
