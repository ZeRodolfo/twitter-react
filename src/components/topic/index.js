import React from "react";

import * as Styled from "./styles";

const Topic = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Container>
  );
};

export default Topic;
