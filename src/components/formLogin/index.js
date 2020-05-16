import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

import * as Styled from "./styles";

import { Primary as ButtonPrimary } from "../button";
import { Field as InputField } from "../input";

const FormLogin = ({ fallbackSubmit }) => {
  const [isDisabledSend, setIsDisabledSend] = useState(true);

  const schema = yup
    .object()
    .shape({
      username: yup.string().required("Campo obrigatório."),
      password: yup.string().required("Campo obrigatório."),
    })
    .when((current, schema) =>
      schema.test({
        test: value => {
          const isDisabled =
            !!value.username === false || !!value.password === false;
          setIsDisabledSend(isDisabled);

          return isDisabled;
        },
      })
    );

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={({ username, password }, { reset }) => {
        fallbackSubmit(username, password);
        reset();
      }}
    >
      {() => (
        <Form>
          <Styled.Row>
            <Field
              component={InputField}
              inputType="secondary"
              type="text"
              name="username"
              placeholder="Username"
            />
          </Styled.Row>
          <Styled.Row>
            <Field
              component={InputField}
              inputType="secondary"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Styled.Row>
          <Styled.ContainerButton>
            <ButtonPrimary disabled={isDisabledSend}>Entrar</ButtonPrimary>
          </Styled.ContainerButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
