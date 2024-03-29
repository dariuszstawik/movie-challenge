import styled from "styled-components";
import charlieChaplinImg from "./charlie-chaplin.png";

export const StyledContainer = styled.div`
  width: 100vw;
  min-height: 120vh;
  max-height: 180vh;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    min-height: 110vh;
    background-image: url(${charlieChaplinImg});
    background-size: 70%;
    background-repeat: no-repeat;
  } ;
`;
