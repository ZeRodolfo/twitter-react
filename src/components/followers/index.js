import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./styles";

import Avatar from "../avatar";

const Followers = ({ list = [], fallbackSelectUser = () => {} }) => {
  const renderFollowers = () => {
    return list.map((follower, index) => {
      return (
        <Styled.ContainerAvatar
          key={`follower_${index}`}
          onClick={() => fallbackSelectUser(follower)}
        >
          <Avatar picture={follower.avatar} />
        </Styled.ContainerAvatar>
      );
    });
  };

  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Icon>
          <FontAwesomeIcon icon={faUser} />
        </Styled.Icon>
        <Styled.Text>{list.length} Followers you know</Styled.Text>
      </Styled.Row>
      <Styled.Row>{renderFollowers()}</Styled.Row>
    </Styled.Container>
  );
};

export default Followers;
