import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

import * as Styled from "./styles";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import { Primary as ButtonPrimary } from "../../components/button";
import { Field as InputField } from "../../components/input";

import * as authActions from "../../store/modules/auth/actions";

function Login() {
  const [isDisabledSend, setIsDisabledSend] = useState(true);

  const dispatch = useDispatch();

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
    <Styled.Container>
      <Styled.Box>
        <Styled.ContainerLogo>
          <Logo />
        </Styled.ContainerLogo>
        <Styled.Title>Entrar no Twitter</Styled.Title>

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={({ username, password }, { reset }) => {
            dispatch(authActions.signIn(username, password));
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

        <Styled.ContainerLink>
          <Styled.Link to="/login">Esqueceu sua senha?</Styled.Link>
          <Styled.Divider>·</Styled.Divider>
          <Styled.Link to="/register">Inscrever-se no Twitter</Styled.Link>
        </Styled.ContainerLink>
      </Styled.Box>
    </Styled.Container>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
