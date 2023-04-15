import styled from "styled-components";

export const StyledAnswearList = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  padding: 5px;

  h4 {
    visibility: hidden;
    margin-bottom: 0;
  }

  .isActive {
    visibility: visible;
  }

  ol {
    padding-inline-start: 0;
    background-color: white;
    @media (min-width: ${({ theme }) => theme.media.desktop}) {
      padding-inline-start: 40px;
    }
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
      top: 7px;
      left: -7px;
      transition: 0.2s;
    }

    &:hover {
      &::after {
        top: -1px;
        left: -1px;
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
