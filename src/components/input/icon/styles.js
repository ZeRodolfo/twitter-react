import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  input {
    ${({ leftIcon }) => leftIcon && `padding-left: 40px;`}
    ${({ rightIcon }) => rightIcon && `padding-right: 40px;`}
  }
`;

export const ContainerIcon = styled.div`
  position: absolute;
  top: 11px;

  ${({ leftIcon }) => leftIcon && `left: 17px;`}
  ${({ rightIcon }) => rightIcon && `right: 17px;`}
`;
