import React, { useState, useEffect } from "react";

import * as Styled from "./styles";

import { TextArea } from "../input";
import { Primary as ButtonPrimary } from "../button";

const Tweet = ({ placeholder }) => {
  const [tweetText, setTweetText] = useState("");
  const [isButtonDisabled, setIsDisabledButton] = useState(true);

  useEffect(() => {
    setIsDisabledButton(tweetText.trim().length === 0);
  }, [tweetText]);

  return (
    <Styled.Container>
      <Styled.ContainerText>
        <TextArea
          placeholder={placeholder}
          isAutoExpand={true}
          onChange={e => setTweetText(e.target.value)}
        >
          {tweetText}
        </TextArea>
      </Styled.ContainerText>

      <Styled.Footer>
        <ButtonPrimary disabled={isButtonDisabled}>Tweet</ButtonPrimary>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Tweet;
