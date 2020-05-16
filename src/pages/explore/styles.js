import styled from "styled-components";
import { Link as Anchor } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px 15px;
  background: #fff;
`;

export const Topic = styled.h2`
  width: 100%;
  padding: 10px 15px;
  color: rgb(20, 23, 26);
  font-weight: bold;
  margin-bottom: 0px;
`;

export const ContainerTweets = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 0px 0px;
  background: rgb(245, 248, 250);
  border: 1px solid rgb(245, 248, 250);
  border-radius: 14px;
  overflow: hidden;

  article:hover {
    background: rgb(0, 0, 0, 0.03);
  }

  article:last-child {
    border-bottom: none;
  }
`;

export const ContainerLogin = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 0px 30px;
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

export const ContainerLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.span`
  color: rgb(101, 119, 134);
  padding: 0px 5px;
`;

export const Link = styled(Anchor)`
  color: rgb(27, 149, 224);
  text-decoration: none;
  font-size: 15px;

  :hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  svg {
    width: 100px;
    height: 100px;
    fill: rgba(29, 161, 242, 1);
  }
`;
