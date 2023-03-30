import styled from "styled-components";

export const StyledYoutubePlayer = styled.div`
  width: 280px;
  margin-bottom: 10000px;
  position: relative;
  background-color: black;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-content: center;

  &:after {
    content: "";
    width: 100%;
    height: 70px;
    position: absolute;
    background-color: black;
    color: black;
    top: 0;
    left: 0;
  }

  @media (min-width: 460px) {
    width: 380px;
  }

  @media (min-width: 560px) {
    width: 420px;
  }
  @media (min-width: 660px) {
    width: 520px;
  }
  @media (min-width: 760px) {
    width: 620px;
  }
  @media (min-width: 800px) {
    width: 720px;
  }
  @media (min-width: 1180px) {
    width: 820px;
  }
`;
