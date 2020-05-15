import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styled from "./styles";

import { Primary, Link, Outline } from "../index";

const Group = ({ list = [] }) => {
  const renderIcon = button => {
    if (!!button.icon) {
      return (
        <Styled.ButtonIcon color={button.colorIcon}>
          <FontAwesomeIcon icon={button.icon} />
        </Styled.ButtonIcon>
      );
    }
  };

  const renderButtonType = button => {
    switch (button.typeButton) {
      case "primary":
        return (
          <Primary onClick={button.onClick}>
            {renderIcon(button)}
            {button.text}
          </Primary>
        );

      case "outline":
        return (
          <Outline onClick={button.onClick}>
            {renderIcon(button)}
            {button.text}
          </Outline>
        );

      case "link":
        return (
          <Link onClick={button.onClick}>
            {renderIcon(button)}

            <Styled.ButtonText color={button.colorButton}>
              {button.text}
            </Styled.ButtonText>
          </Link>
        );

      default:
        return (
          <Primary onClick={button.onClick}>
            {renderIcon(button)}
            {button.text}
          </Primary>
        );
    }
  };

  const renderButtons = () => {
    return list
      .filter(button => !!button.visible)
      .map((button, index) => (
        <Styled.ButtonContainer key={`button_group_${index}`}>
          {renderButtonType(button)}
        </Styled.ButtonContainer>
      ));
  };

  return <Styled.Container>{renderButtons()}</Styled.Container>;
};

export default Group;
