import styled from "styled-components";

export const StyledStartForm = styled.form`
  position: relative;
  display: block;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 0;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
  }
`;

export const StyledInputAndButtonWrapper = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  input {
    box-sizing: border-box;
    width: 130px;
    height: 42px;
    border: 1px solid gray;
    padding: 3%;
    margin-bottom: 10px;
    /* margin-top: 0; */
    margin-left: 0;
    margin-right: 20px;
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      margin-left: 20%;
      margin-right: 20%;
      margin-bottom: 0;
      margin-top: 10px;
    }
  }

  Button {
    box-sizing: border-box;
    width: 80px;
    height: 40px;
    display: block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    position: relative;
    border: none;

    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      width: 220px;
      margin-right: 0;
      margin-top: 10px;
      margin-bottom: 0;
    }

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
