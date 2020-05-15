import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  padding: 10px;
`;

export const ButtonIcon = styled.span`
  ${({ color }) => color && `color: ${color};`}
  margin-right: 10px;
`;

export const ButtonText = styled.span`
  ${({ color }) => color && `color: rgb(101, 119, 134);`}
`;
