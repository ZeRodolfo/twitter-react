import React from "react";

import * as Styled from "./styles";

import { ReactComponent as VerifiedAccount } from "../../../../assets/svg/verifiedAccount.svg";

import Avatar from "../../../avatar";
import { Outline as ButtonOutline } from "../../../button";

const Item = ({ data = {} }) => {
  return (
    <Styled.Container>
      <Styled.ContainerAvatar>
        <Avatar picture={data.avatar} />
      </Styled.ContainerAvatar>
      <Styled.ContainerDetails>
        <Styled.DetailsUser>
          <Styled.Details>
            <Styled.Name>{data.name}</Styled.Name>
            {!!data.verifiedAccount && (
              <Styled.VerifiedAccount>
                <VerifiedAccount />
              </Styled.VerifiedAccount>
            )}
          </Styled.Details>
          <Styled.Key>@{data.key}</Styled.Key>
        </Styled.DetailsUser>
        <Styled.ContainerButton>
          <ButtonOutline>Follow</ButtonOutline>
        </Styled.ContainerButton>
      </Styled.ContainerDetails>
    </Styled.Container>
  );
};

export default Item;
