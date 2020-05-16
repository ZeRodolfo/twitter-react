import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import * as Styled from "./styles";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import FormLogin from "../../components/formLogin";

import * as authActions from "../../store/modules/auth/actions";

function Login({ currentUser, history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!currentUser.username) {
      history.push("/");
    }
  }, [currentUser, history]);

  const submitFormHandle = (username, password) => {
    dispatch(authActions.signIn(username, password));
  };

  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.ContainerLogo>
          <Logo />
        </Styled.ContainerLogo>
        <Styled.Title>Entrar no Twitter</Styled.Title>

        <FormLogin fallbackSubmit={submitFormHandle} />

        <Styled.ContainerLink>
          <Styled.Link to="/login">Esqueceu sua senha?</Styled.Link>
          <Styled.Divider>·</Styled.Divider>
          <Styled.Link to="/register">Inscrever-se no Twitter</Styled.Link>
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
)(Login);
