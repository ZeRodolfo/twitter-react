import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 2px solid rgb(230, 236, 240);
  padding-left: 320px;
  padding-right: 50px;
`;

export const ContainerMenuButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuButton = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "auto")};
`;

export const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.aside`
  width: ${({ width }) => (width ? width : 320)}px;
  height: auto;
  background: rgb(245, 248, 250);
  padding: 0px;
`;

export const ContainerUserDetails = styled.div`
  padding: 40px 15px 0px 15px;
`;

export const ContainerRight = styled.div`
  padding: 15px 45px 15px 30px;
  background: #fff;
  min-height: calc(100vh - 213px);
`;

export const ContainerSearch = styled.div`
  width: 100%;
`;

export const ContainerTrends = styled.div`
  width: 100%;
`;

export const ContainerFollow = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const ContainerTweet = styled.div`
  margin: 0px 0px;
  padding-bottom: 10px;
  background: rgb(230, 236, 240);
`;

export const Main = styled.section`
  width: 100%;
  max-width: calc(100% - 750px);
  min-height: calc(100vh - 213px);
  height: auto;
  padding: 0px;
  background: #fff;
  border: 1px solid rgb(230, 236, 240);
  border-top: none;
  border-bottom: none;
`;

export const ContainerTweets = styled.section`
  background: #fff;
  padding: 0px;
`;
