import styled from "styled-components";

export const Container = styled.button`
  background-color: rgb(29, 161, 242);
  color: #fff;
  transition-duration: 0.2s;
  min-height: 37px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  user-select: none;
  font-weight: bold;
  border-radius: 50px;

  :hover {
    background-color: rgb(26, 145, 218);
  }

  :disabled {
    background-color: rgb(29, 161, 242, 0.5);
    cursor: default;
    pointer-events: none;
  }
`;
