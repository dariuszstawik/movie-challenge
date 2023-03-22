import styled from "styled-components";

export const StyledHeader = styled.h2`
  font-weight: 500;
  font-size: 18px;
  position: relative;
  padding-top: 20px;
  margin-top: 0;
  margin-bottom: 0;
  &::before {
    content: "";
    width: 40px;
    height: 1.5px;
    border-bottom: 2px solid gray;
    position: absolute;
    top: 0;
    left: -5px;
  }
`;
