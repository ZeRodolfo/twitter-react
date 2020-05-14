import React from "react";

import * as Styled from "./styles";

const Avatar = ({ picture, fallbackChangePicture }) => {
  return <Styled.Container src={picture}></Styled.Container>;
};

export default Avatar;
