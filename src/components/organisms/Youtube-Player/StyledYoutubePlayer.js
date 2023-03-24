import styled from "styled-components";

export const StyledYoutubePlayer = styled.div`
  width: 800px;
  margin-bottom: 300px;
  position: relative;
  background-color: black;
  z-index: 1;

  &:after {
    content: "";
    width: 800px;
    height: 70px;
    position: absolute;
    background-color: black;
    color: black;
    top: 0;
    left: 0;
  }
`;
