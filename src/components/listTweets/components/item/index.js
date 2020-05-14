import React, { useEffect } from "react";
import Linkify from "react-linkify";

import * as Styled from "./styles";

import { ReactComponent as VerifiedAccount } from "../../../../assets/svg/verifiedAccount.svg";
import { ReactComponent as Comment } from "../../../../assets/svg/comment.svg";
import { ReactComponent as Retweet } from "../../../../assets/svg/retweet.svg";
import { ReactComponent as Like } from "../../../../assets/svg/like.svg";
import { ReactComponent as SendTweet } from "../../../../assets/svg/sendTweet.svg";

import Avatar from "../../../avatar";

// import urlMetadata from "open-graph-scraper";

const Item = ({ data = {}, onCLick = () => {} }) => {
  useEffect(() => {
    // const teste = urlMetadata("https://dragonball.fandom.com/pt-br/wiki/Categoria:Planetas", {
    //   // fromEmail: "me@myexample.com",
    // }).then(i => console.log("kkk", i));
    // var options = {
    //   url: "https://dragonball.fandom.com/pt-br/wiki/Categoria:Planetas",
    //   timeout: 4000,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers":
    //       "Origin, X-Requested-With, Content-Type, Accept",
    //   },
    //   mode: "cors",
    // };
    // urlMetadata(options, function(error, results) {
    //   console.log("error:", error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
    //   console.log("results:", results);
    // });
  }, []);

  return (
    <Styled.Container>
      <Styled.ContainerAvatar>
        <Avatar picture={data.owner.avatar} />
      </Styled.ContainerAvatar>

      <Styled.ContainerContent>
        <Styled.Details>
          <Styled.UserDetails onClick={onCLick}>
            <Styled.Name>{data.owner.name}</Styled.Name>
            <Styled.VerifiedAccount>
              <VerifiedAccount />
            </Styled.VerifiedAccount>
            <Styled.Key>@{data.owner.username}</Styled.Key>
          </Styled.UserDetails>

          <Styled.Separator>·</Styled.Separator>

          <Styled.Published>{data.createdAt}</Styled.Published>
        </Styled.Details>

        <Styled.Content>
          <Linkify>{data.content}</Linkify>
        </Styled.Content>

        <Styled.ContainerOptions>
          <Styled.OptionIcon hover="rgb(29, 161, 242)">
            <Comment />
            <Styled.OptionText>{data.totalComments}</Styled.OptionText>
          </Styled.OptionIcon>

          <Styled.OptionIcon hover="rgb(23, 191, 99)">
            <Retweet />
            <Styled.OptionText>{data.totalComments}</Styled.OptionText>
          </Styled.OptionIcon>

          <Styled.OptionIcon hover="rgb(224, 36, 94)">
            <Like />
            <Styled.OptionText>{data.totalComments}</Styled.OptionText>
          </Styled.OptionIcon>

          <Styled.OptionIcon hover="rgb(29, 161, 242)">
            <SendTweet />
            <Styled.OptionText>{data.totalComments}</Styled.OptionText>
          </Styled.OptionIcon>
        </Styled.ContainerOptions>
      </Styled.ContainerContent>
    </Styled.Container>
  );
};

export default Item;
