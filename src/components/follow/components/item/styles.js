import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid rgb(230, 236, 240);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  :hover {
    background: rgb(0, 0, 0, 0.03);
  }
`;

export const ContainerAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 10px;
`;

export const ContainerDetails = styled.div`
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsUser = styled.a`
  display: block;
  line-height: 18px;

  text-elipses
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Name = styled.div`
  color: rgb(20, 23, 26);
  font-weight: bold;
`;

export const VerifiedAccount = styled.span`
  width: 22px;
  height: 20px;
  font-size: 15px;
  text-align: center;

  svg {
    fill: rgba(29, 161, 242, 1);
    width: 18px;
    height: 18px;
  }
`;

export const Key = styled.span`
  margin-left: 0px 2px;
  color: rgb(101, 119, 134);
  font-weight: 400;
`;

export const ContainerButton = styled.div`
  width: auto;
`;