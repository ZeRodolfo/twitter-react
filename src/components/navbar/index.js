import React, { useState, useEffect } from "react";

import * as Styled from "./styles";

import ListItem from "./components/listItem";

const Navbar = ({ options = [], children }) => {
  const [data, setData] = useState([]);

  useEffect(() => setData(options), [options]);

  const listItemHandle = item => {
    const newData = data.map(option => ({
      ...option,
      active: option.id === item.id,
    }));

    setData(newData);
    item.onClick();
  };

  return (
    <Styled.Container>
      {data.map((item, index) => (
        <ListItem
          key={`list_item_${index}:${item.label}`}
          data={item}
          onClick={() => listItemHandle(item)}
        />
      ))}

      {children}
    </Styled.Container>
  );
};

export default Navbar;
