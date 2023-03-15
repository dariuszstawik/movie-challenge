import styled from "styled-components";

export const StyledContentBox = styled.div`
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1% 3%;
  border-left: 4px double black;
  border-right: 4px double black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  row-gap: 15px;
  column-gap: 40px;
  position: relative;
`;
