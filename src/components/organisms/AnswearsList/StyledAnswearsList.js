import styled from "styled-components";

export const StyledAnswearList = styled.div`
  width: 75%;
  grid-column: 1/3;
  grid-row: 2/3;
  position: relative;
  margin-left: 2.5%;

  h4 {
    display: none;
  }

  .isActive {
    display: block;
  }

  li {
    /* list-style: none; */
    line-height: 2.5;

    border-bottom: 1px solid black;
  }

  .liButton {
    font-size: inherit;
    font-family: inherit;
    line-height: 2.5;
    background-color: white;
    color: inherit;
    cursor: pointer;
    border: none;
  }

  .button {
    font-size: inherit;
    font-family: inherit;
    line-height: 2.5;
    background-color: white;
    color: inherit;
    cursor: pointer;
    border: "2px solid gray";
    width: 100px;
    height: 40px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
  }

  .winBackground {
    background-color: green;
  }
  .lossBackground {
    background-color: red;
  }
`;
