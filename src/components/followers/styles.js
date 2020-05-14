import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  width: 20px;
`;

export const Text = styled.span``;

export const ContainerAvatar = styled.a`
  width: 40px;
  height: 40px;
  padding: 0px 1px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fff;
  background: rgb(101, 119, 134, 0.1);
  margin: 0px 2px 2px 0px;
  display: block;
  text-decoration: none;
  
  :hover {
    color: transparent;
  }
`;
