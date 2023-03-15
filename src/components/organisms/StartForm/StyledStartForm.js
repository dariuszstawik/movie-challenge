import styled from "styled-components";

export const StyledStartForm = styled.form`
  grid-column: 1/2;
  grid-row: 1/2;
  margin-left: 5%;
  position: relative;

  &:after {
    content: "";
    width: 2px;
    height: 120px;
    color: gray;
    background-color: gray;
    border-right: 1px solod gray;
    position: absolute;
    top: 20%;
    right: 0;
  }

  input {
    box-sizing: border-box;
    width: 130px;
    height: 42px;
    border: 1px solid gray;
    margin-right: 5%;
    padding: 3%;
  }
`;
