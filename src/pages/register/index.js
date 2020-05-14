import React from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

import * as Styled from "./styles";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import { Primary as ButtonPrimary } from "../../components/button";
import { Secondary as InputSecondary } from "../../components/input";

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido. Ex.: fulanodetal@gmail.com")
      .required("Campo obrigatório."),
    senha: yup.string().required("Campo obrigatório."),
  });

  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.ContainerLogo>
          <Logo />
        </Styled.ContainerLogo>
        <Styled.Title>Inscrever-se no Twitter</Styled.Title>

        <Formik
          initialValues={{
            email: "",
            senha: "",
          }}
          validationSchema={schema}
          onSubmit={({ email, senha }, { reset }) => {
            // dispatch(signInRequest(email, senha));
            reset();
          }}
        >
          {() => (
            <Form>
              <Styled.Row>
                <InputSecondary type="text" placeholder="Name" />
              </Styled.Row>
              <Styled.Row>
                <InputSecondary type="text" placeholder="Username" />
              </Styled.Row>
              <Styled.Row>
                <InputSecondary type="password" placeholder="Password" />
              </Styled.Row>
              <Styled.ContainerButton>
                <ButtonPrimary disabled={true}>Inscrever-se</ButtonPrimary>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
