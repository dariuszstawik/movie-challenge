import styled from "styled-components";

export const StyledAnswearList = styled.div`
  width: 100%;
  position: relative;

  h4 {
    visibility: hidden;
  }

  .isActive {
    visibility: visible;
  }

  li {
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
    background-color: #545454ff;
    color: white;
    cursor: pointer;
    border: "2px solid gray";
    border: none;
    width: 110px;
    height: 45px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;

    &::after {
      content: "";
      width: 110px;
      height: 45px;
      background-color: transparent;
      border: 1px solid black;
      position: absolute;
      top: 5px;
      left: -7px;
    }

    &:hover {
      &::after {
        content: "";
        width: 110px;
        height: 45px;
        background-color: transparent;
        border: 1px solid black;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .winBackground {
    background-color: green;
  }
  .lossBackground {
    background-color: red;
  }
`;
