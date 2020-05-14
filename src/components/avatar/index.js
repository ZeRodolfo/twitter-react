import React from "react";

import * as Styled from "./styles";

const Avatar = ({ picture, fallbackChangePicture }) => {
  return (
    <Styled.Container
      src={`${process.env.REACT_APP_API_KEY}/${picture}`}
    ></Styled.Container>
  );
};

export default Avatar;
