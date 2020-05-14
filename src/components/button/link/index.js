import React from "react";

import * as Styled from "./styles";

const Primary = ({ text = "", children, ...rest }) => {
  return <Styled.Container {...rest}>{children || text}</Styled.Container>;
};

export default Primary;
