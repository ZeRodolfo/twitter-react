import React from "react";

import * as Styled from "./styles";

import Item from "./components/item";

const ListTweets = ({ list = [], fallbackSelectUser = () => {} }) => {
  const renderItems = () => {
    return list.map((item, index) => (
      <Item
        key={`list_tweets_${index}`}
        data={item}
        fallbackSelectUser={(value) => fallbackSelectUser(value)}
      />
    ));
  };

  return <Styled.Container>{renderItems()}</Styled.Container>;
};

export default ListTweets;
