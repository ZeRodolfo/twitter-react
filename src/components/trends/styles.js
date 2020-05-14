import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background-color: rgb(245, 248, 250);
  border: 1px solid rgb(245, 248, 250);
  border-radius: 14px;
  overflow: hidden;
`;

export const ContainerTopic = styled.div`
  padding: 5px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;

export const List = styled.div``;

export const ContainerLink = styled.div`
  :hover {
    background: rgb(0, 0, 0, 0.03);
  }
`;

export const Link = styled.a`
  padding: 15px;
  font-weight: 400;
  font-size: 15px;
  color: rgba(29, 161, 242, 1);
  cursor: pointer;
  display: block;
`;
