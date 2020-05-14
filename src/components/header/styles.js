import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 1;

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

export const ContainerAvatar = styled.div`
  position: absolute;
  z-index: 2;
  top: 95px;
  left: 30px;
  max-width: 200px;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  border: 1px solid #eeeeee;
  overflow: hidden;
`;
