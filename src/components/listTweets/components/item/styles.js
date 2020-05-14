import styled from "styled-components";

export const Container = styled.article`
  padding: 15px 15px 15px 10px;
  border-bottom: 1px solid rgb(230, 236, 240);
  width: 100%;
  display: flex;
  flex-direction: row;

  :hover {
    background: rgb(245, 248, 250);
    cursor: pointer;
  }
`;

export const ContainerAvatar = styled.div`
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
  margin: 0 5px;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 5px;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2px;
`;

export const UserDetails = styled.div`
  display: flex;
  font-size: 15px;
`;

export const Name = styled.a`
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
    width: 20px;
    height: 20px;
  }
`;

export const Key = styled.span`
  margin-left: 0px 2px;
  color: rgb(101, 119, 134);
  font-weight: 400;
`;

export const Separator = styled.div`
  color: rgb(101, 119, 134);
  padding: 0px 5px;
`;

export const Published = styled.div`
  color: rgb(101, 119, 134);
  font-weight: 400;
  font-size: 15px;
`;

export const Content = styled.span`
  line-height: 1.3125;
  color: rgb(20, 23, 26);
  font-weight: 400;
  font-size: 15px;
`;

export const ContainerOptions = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionIcon = styled.div`
  color: rgb(101, 119, 134);
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 18px;
    height: 18px;
    fill: rgb(101, 119, 134);
  }

  :hover {
    ${({ hover }) => hover && `color: ${hover};`}

    svg {
      ${({ hover }) => hover && `fill: ${hover};`}
    }
  }

  transition-duration: 0.2s;
`;

export const OptionText = styled.div`
  font-size: 13px;
  margin-left: 10px;
`;
