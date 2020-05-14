import React from "react";

import * as Styled from "./styles";

const ListItem = ({ data = {}, onClick = () => {} }) => {
  return (
    <Styled.Container onClick={onClick} isActive={!!data.active}>
      <Styled.Label>{data.label}</Styled.Label>
      <Styled.Value>{data.value}</Styled.Value>
    </Styled.Container>
  );
};

export default ListItem;
