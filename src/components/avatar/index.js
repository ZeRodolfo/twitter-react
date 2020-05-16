import React, { useRef } from "react";
import validUrl from "valid-url";

import * as Styled from "./styles";

import checkAllowedExtensionFile from "../../utils/functions/checkAllowedExtensionFile"

const Avatar = ({ picture, isEditable = false, fallbackChangePicture }) => {
  const fileRef = useRef();

  const avatar = validUrl.isUri(picture)
    ? picture
    : `${process.env.REACT_APP_API_KEY}/${picture}`;

  const renderChangePicture = () => {
    isEditable && fileRef.current.click();
  };

  const checkAllowedExtension = event => {
    const allowedExtension = ["jpg", "jpeg", "png", "pjpeg", "pjp"];
    checkAllowedExtensionFile(event, allowedExtension, fallbackChangePicture)
  }

  return (
    <>
      <Styled.Container
        src={avatar}
        onClick={() => renderChangePicture()}
        isEditable={isEditable}
      />
      <Styled.InputFile
        ref={fileRef}
        type="file"
        accept="image/png, image/jpeg"
        onChange={event => checkAllowedExtension(event)}
      />
    </>
  );
};

export default Avatar;
