import styled from "styled-components";

export const StyledAnswearList = styled.div`
  h4 {
    display: none;
  }

  .isActive {
    display: block;
  }

  li {
    /* list-style: none; */
    line-height: 2.5;
  }
  button {
    font-size: inherit;
    font-family: inherit;
    line-height: 2.5;
    background-color: white;
    color: inherit;
    cursor: pointer;
    border: none;
  }

  .winBackground {
    background-color: green;
  }
  .lossBackground {
    background-color: red;
  }
`;
