import React from "react";

import * as Styled from "./styles";

import { Primary, Secondary, Icon, TextArea } from "../index";

const Field = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  inputType,
  ...props
}) => {
  const renderInputTypes = () => {
    switch (inputType) {
      case "primary":
        return <Primary {...field} {...props} />;
      case "secondary":
        return <Secondary {...field} {...props} value={props.value} />;
      case "icon":
        return <Icon {...field} {...props} />;
      case "textArea":
        return <TextArea {...field} {...props} />;
      default:
        return <Primary {...field} {...props} />;
    }
  };

  return (
    <Styled.Container>
      {renderInputTypes()}

      {touched[field.name] && errors[field.name] && (
        <Styled.TextError className="error">
          {errors[field.name]}
        </Styled.TextError>
      )}
    </Styled.Container>
  );
};
export default Field;
