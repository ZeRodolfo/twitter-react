import React, { useEffect, useRef } from "react";

import * as Styled from "./styles";

const TextArea = ({
  children,
  reset = false,
  isAutoExpand = false,
  value,
  ...rest
}) => {
  const ref = useRef();

  useEffect(() => {
    isAutoExpand && ref.current.addEventListener("input", autoExpand);
  }, [isAutoExpand]);

  const autoExpand = function(event) {
    const field = event.target;
    field.style.height = "inherit";

    const computed = window.getComputedStyle(field);

    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    field.style.height = height + "px";
  };

  useEffect(() => {
    if (reset) {
      ref.current.style.height = "auto";
    }
  }, [reset]);

  return (
    <Styled.Container>
      <Styled.TextArea ref={ref} {...rest} value={value}>
        {children}
      </Styled.TextArea>
    </Styled.Container>
  );
};

export default TextArea;
