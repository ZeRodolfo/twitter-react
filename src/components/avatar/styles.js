import styled from "styled-components";

export const Container = styled.img`
  width: 100%;
  height: auto;

  :hover {
    ${({ isEditable }) => isEditable && `
      cursor: pointer;
    `}
  }
`;

export const InputFile = styled.input`
  display: none;
`;