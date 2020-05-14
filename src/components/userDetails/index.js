import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faLink,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./styles";

import { ReactComponent as VerifiedAccount } from "../../assets/svg/verifiedAccount.svg"

const UserDetails = ({ userPage = {} }) => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Name>{userPage.name}</Styled.Name>

        {userPage.verifiedAccount && (
          <Styled.VerifiedAccount>
            <VerifiedAccount />
          </Styled.VerifiedAccount>
        )}
      </Styled.Row>

      <Styled.Row>
        <Styled.Key>@{userPage.username}</Styled.Key>
      </Styled.Row>

      <Styled.Row>
        <Styled.Description>{userPage.description}</Styled.Description>
      </Styled.Row>

      <Styled.Row>
        <Styled.Icon>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Styled.Icon>
        <Styled.Text>Campos, RJ</Styled.Text>
      </Styled.Row>

      <Styled.Row>
        <Styled.Icon>
          <FontAwesomeIcon icon={faLink} />
        </Styled.Icon>
        <Styled.Link>blog.globo.com</Styled.Link>
      </Styled.Row>

      <Styled.Row>
        <Styled.Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Styled.Icon>
        <Styled.Text>Entrou em 2010</Styled.Text>
      </Styled.Row>
    </Styled.Container>
  );
};

export default UserDetails;
