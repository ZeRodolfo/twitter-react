import React, { useRef } from "react";
import validUrl from "valid-url";

import * as Styled from "./styles";

import Avatar from "../../components/avatar";
import { Primary as ButtonOutline } from "../../components/button";

import checkAllowedExtensionFile from "../../utils/functions/checkAllowedExtensionFile"

const Header = ({
  userPage,
  isEditable = false,
  fallbackChangeCover,
  fallbackChangeAvatar,
}) => {
  const fileRef = useRef();

  const cover = validUrl.isUri(userPage.cover)
    ? userPage.cover
    : `${process.env.REACT_APP_API_KEY}/${userPage.cover}`;

  const checkAllowedExtension = event => {
    const allowedExtension = ["jpg", "jpeg", "png", "pjpeg", "pjp"];
    checkAllowedExtensionFile(event, allowedExtension, fallbackChangeCover)
    /*const files = event.currentTarget.files;

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
    }*/
  };

  const renderChangeCover = () => {
    return (
      <>
        <Styled.ChangeCover>
          <ButtonOutline onClick={() => fileRef.current.click()}>
            Change cover
          </ButtonOutline>
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
      <Styled.Container src={cover}>
        {isEditable && renderChangeCover()}
      </Styled.Container>

      <Styled.ContainerAvatar>
        <Avatar
          picture={userPage.avatar}
          isEditable={isEditable}
          fallbackChangePicture={fallbackChangeAvatar}
        />
      </Styled.ContainerAvatar>
    </>
  );
};

export default Header;
