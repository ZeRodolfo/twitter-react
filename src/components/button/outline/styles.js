import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  color: rgb(29, 161, 242);
  border: 1px solid rgb(29, 161, 242);
  transition-duration: 0.2s;
  min-height: 37px;
  padding-left: 20px;
  padding-right: 20px;
  user-select: none;
  font-weight: bold;
  border-radius: 50px;

  :hover {
    background-color: rgb(29, 161, 242, 0.1);
  }

  :disabled {
    background-color: rgb(29, 161, 242, 0.1);
    cursor: default;
    pointer-events: none;
  }
`;
