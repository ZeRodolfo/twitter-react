import styled from "styled-components";

export const Container = styled.a`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -2px;

    ${({ isActive }) =>
      isActive && `border-bottom: 2px solid rgb(26, 145, 218);`}
  }

  :hover {
    background: rgba(29, 161, 242, 0.1);
  }
`;

export const Label = styled.h4`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin: 0;
  color: rgb(101, 119, 134);
`;

export const Value = styled.h3`
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
`;
