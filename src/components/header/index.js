import React, { useRef } from "react";
import { notification } from "antd";

import * as Styled from "./styles";

import Avatar from "../../components/avatar";

const Header = ({ userPage, isEdit = false, fallbackChangeCover }) => {
  const fileRef = useRef();

  const checkAllowedExtension = event => {
    const allowedExtension = ["jpg", "jpeg", "png", "pjpeg", "pjp"];
    const files = event.currentTarget.files;

    if (!!files.length) {
      const file = files[0];
      const filename = file.name.toLowerCase();
      const extension = filename
        .split(".")
        .pop()
        .toLowerCase();

      if (allowedExtension.indexOf(extension) !== -1) {
        fallbackChangeCover(file);
      } else {
        const extensionsAllowedString = allowedExtension
          .join(", ")
          .toUpperCase();

        notification.warn({
          message: "Atenção",
          description: `A extensão informada não é compatível com as extensões permitidas: ${extensionsAllowedString}.`,
        });
      }
    }
  };

  const renderChangeCover = () => {
    return (
      <>
        <Styled.ChangeCover onClick={() => fileRef.current.click()}>
          Mudar capa
        </Styled.ChangeCover>
        <Styled.InputFile
          ref={fileRef}
          type="file"
          accept="image/png, image/jpeg"
          onChange={event => checkAllowedExtension(event)}
        />
      </>
    );
  };

  return (
    <>
      <Styled.Container src={userPage.cover}>
        {isEdit && renderChangeCover()}
      </Styled.Container>

      <Styled.ContainerAvatar>
        <Avatar picture={userPage.avatar} />
      </Styled.ContainerAvatar>
    </>
  );
};

export default Header;
