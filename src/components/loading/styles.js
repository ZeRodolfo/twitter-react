import styled from "styled-components";

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  position: fixed;
  background: rgb(255, 255, 255, 1);
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;

  svg {
    fill: rgba(29, 161, 242, 1);
  }
`;
