import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 170px;
  position: relative;

  :hover button {
    display: block;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ src }) =>
    src &&
    `
    background-image: url(${src});
  `}
`;

export const ChangeCover = styled.button`
  position: absolute;
  top: 15px;
  right: 50px;
  display: none;
`;

export const InputFile = styled.input`
  display: none;
`;
