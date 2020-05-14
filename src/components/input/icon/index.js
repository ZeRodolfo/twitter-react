import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styled from "./styles";

import Secondary from "../secondary";

const Icon = ({ leftIcon = null, rightIcon = null, ...rest }) => {
  return (
    <Styled.Container leftIcon={!!leftIcon} rightIcon={!!rightIcon}>
      {leftIcon && (
        <Styled.ContainerIcon leftIcon={!!leftIcon}>
          <FontAwesomeIcon icon={leftIcon} />
        </Styled.ContainerIcon>
      )}

      <Secondary {...rest} />

      {rightIcon && (
        <Styled.ContainerIcon rightIcon={!!rightIcon}>
          <FontAwesomeIcon icon={rightIcon} />
        </Styled.ContainerIcon>
      )}
    </Styled.Container>
  );
};

export default Icon;
