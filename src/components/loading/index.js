import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import * as Styled from "./styles";

const Loading = ({ show = false }) => {
  return (
    <Styled.ContainerLoading>
      <Styled.Logo>
        <Logo />
      </Styled.Logo>
    </Styled.ContainerLoading>
  );
};

export default Loading;
