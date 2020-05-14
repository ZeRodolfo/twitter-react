import styled from "styled-components";

export const Container = styled.div``;

export const TextArea = styled.textarea`
  overflow-wrap: break-word;
  position: relative;
  font-size: 19px;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow: hidden;
  overflow-wrap: break-word;
  text-align: initial;
  overflow: auto;
  padding: 5px 15px;
  font-weight: 300;
  width: 100%;
  min-height: 5em;
  max-height: 50vh;
  border: none;
  resize: none;
  color: rgba(0, 0, 0, 0.85);

  ::placeholder {
    font-weight: 400;
    color: #9197a3;
  }
`;
