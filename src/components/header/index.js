import React, { useRef } from "react";
import { notification } from "antd";

import * as Styled from "./styles";

const Header = ({
  cover = "https://www.gettyimages.com.br/gi-resources/images/500px/983794168.jpg",
  fallbackChangeCover,
}) => {
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
        console.log("update redux as image");
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

  return (
    <>
      <Styled.Container src={cover}>
        <Styled.ChangeCover onClick={() => fileRef.current.click()}>
          Mudar capa
        </Styled.ChangeCover>
      </Styled.Container>

      <Styled.InputFile
        ref={fileRef}
        type="file"
        accept="image/png, image/jpeg"
        onChange={event => checkAllowedExtension(event)}
      />
    </>
  );
};

export default Header;
