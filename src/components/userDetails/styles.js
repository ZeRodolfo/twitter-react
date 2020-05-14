import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Name = styled.h3`
  font-weight: bold;
  margin: 0;
  line-height: 1.3125;
  overflow-wrap: break-word;
`;

export const VerifiedAccount = styled.span`
  width: 20px;
  margin-left: 2px;

  svg {
    fill: rgba(29, 161, 242, 1);
  }
`;

export const Key = styled.span`
  font-size: 12px;
`;

export const Description = styled.p`
  font-weight: 400;

  margin: 10px 0px;
`;

export const Icon = styled.div`
  width: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: rgb(101, 119, 134);

  :hover {
    color: inherit;
  }
`;

export const Text = styled.span``;
