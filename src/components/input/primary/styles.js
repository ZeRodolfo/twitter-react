import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 50px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  font-family: Arial;

  :active,
  :focus {
    border-color: rgb(29, 161, 242);
  }
`;
