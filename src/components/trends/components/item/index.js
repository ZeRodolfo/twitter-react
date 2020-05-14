import React from "react";

import * as Styled from "./styles";

const Item = ({ data = {} }) => {
  return (
    <Styled.Container>
      <Styled.Category>{data.category}</Styled.Category>
      <Styled.Text>{data.text}</Styled.Text>
      <Styled.Tweets>{data.tweets} Tweets</Styled.Tweets>
    </Styled.Container>
  );
};

export default Item;
