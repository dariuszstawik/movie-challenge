import styled from "styled-components";

export const StyledStartForm = styled.form`
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
    height: 42px;
    display: block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    position: relative;
    border: none;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      margin-right: 0;
      margin-top: 10px;
      margin-bottom: 0;
    }

    &::after {
      content: "";
      width: 78px;
      height: 40px;
      background-color: transparent;
      border: 1px solid black;
      position: absolute;
      top: 7px;
      left: -7px;
      transition: 0.2s;
    }

    &:hover {
      &::after {
        top: 0;
        left: 0;
      }
    }
  }
`;
