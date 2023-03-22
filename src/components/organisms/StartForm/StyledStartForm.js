import styled from "styled-components";

export const StyledStartForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  input {
    box-sizing: border-box;
    width: 130px;
    height: 42px;
    border: 1px solid gray;
    padding: 3%;
    margin-left: 50%;
    margin-right: 50%;
  }

  Button {
    margin-left: 17%;
    margin-right: 5%;
    position: relative;
    border: none;

    &::after {
      content: "";
      width: 80px;
      height: 40px;
      background-color: transparent;
      border: 1px solid black;
      position: absolute;
      top: 5px;
      left: -7px;
    }

    &:hover {
      &::after {
        content: "";
        width: 80px;
        height: 40px;
        background-color: transparent;
        border: 1px solid black;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;
