import styled from "styled-components";

export const StyledYoutubePlayer = styled.div`
  width: 980px;
  position: relative;
  background-color: black;
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: 1;

  &:after {
    content: "";
    width: 980px;
    height: 70px;
    position: absolute;
    background-color: black;
    color: black;
    top: 0;
    left: 0;
  }
`;
