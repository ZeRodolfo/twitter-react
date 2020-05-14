import React from "react";

import * as Styled from "./styles";

import Topic from "../topic";
import Item from "./components/item";

const Follow = ({ list = [], children }) => {
  const renderItems = () => {
    return list.map((item, index) => (
      <Item key={`follow_item_${index}`} data={item} />
    ));
  };

  return (
    <Styled.Container>
      <Styled.ContainerTopic>
        <Topic>{children}</Topic>
      </Styled.ContainerTopic>

      <Styled.List>{renderItems()}</Styled.List>

      <Styled.ContainerLink>
        <Styled.Link>Show more</Styled.Link>
      </Styled.ContainerLink>
    </Styled.Container>
  );
};

export default Follow;
