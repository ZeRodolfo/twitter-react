import styled from "styled-components";
import { Link as Anchor } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 15px;
  background: #fff;
  height: 100%;
  min-height: 100vh;
`;

export const Box = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: 40px;
    fill: rgba(29, 161, 242, 1);
  }
`;

export const Title = styled.h2`
  color: rgb(20, 23, 26);
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  button {
    width: 100%;
  }
`;

export const ContainerLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(Anchor)`
  color: rgb(27, 149, 224);
  text-decoration: none;
  font-size: 15px;

  :hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.span`
  color: rgb(101, 119, 134);
  padding: 0px 5px;
`;
