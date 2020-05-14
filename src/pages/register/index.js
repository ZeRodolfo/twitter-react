import React, { useState, useEffect } from "react";
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

function Register({ currentUser, history }) {
  const [isDisabledSend, setIsDisabledSend] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!currentUser.username) {
      history.push("/");
    }
  }, [currentUser, history]);

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Campo obrigatório."),
      username: yup.string().required("Campo obrigatório."),
      password: yup.string().required("Campo obrigatório."),
    })
    .when((current, schema) =>
      schema.test({
        test: value => {
          const isDisabled =
            !!value.name === false ||
            !!value.username === false ||
            !!value.password === false;

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
        <Styled.Title>Inscrever-se no Twitter</Styled.Title>

        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { reset }) => {
            dispatch(authActions.signUp(values));
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
                  name="name"
                  placeholder="Name"
                />
              </Styled.Row>
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
                <ButtonPrimary disabled={isDisabledSend}>
                  Inscrever-se
                </ButtonPrimary>
              </Styled.ContainerButton>
            </Form>
          )}
        </Formik>

        <Styled.ContainerLink>
          <Styled.Link to="/login">Entrar no Twitter</Styled.Link>
        </Styled.ContainerLink>
      </Styled.Box>
    </Styled.Container>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Register);
