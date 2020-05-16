import React, { useRef } from "react";
import validUrl from "valid-url";

import * as Styled from "./styles";

import DefaultCover from "../../assets/png/default-cover.png";

import Avatar from "../../components/avatar";
import { Primary as ButtonOutline } from "../../components/button";

import checkAllowedExtensionFile from "../../utils/functions/checkAllowedExtensionFile";

const Header = ({
  userPage,
  isEditable = false,
  fallbackChangeCover,
  fallbackChangeAvatar,
}) => {
  const fileRef = useRef();

  const cover = validUrl.isUri(userPage.cover)
    ? userPage.cover
    : !!userPage.cover
    ? `${process.env.REACT_APP_API_KEY}/${userPage.cover}`
    : DefaultCover;

  const checkAllowedExtension = event => {
    const allowedExtension = ["jpg", "jpeg", "png", "pjpeg", "pjp"];
    checkAllowedExtensionFile(event, allowedExtension, fallbackChangeCover);
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
