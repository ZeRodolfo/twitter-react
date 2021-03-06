import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import * as Styled from "./styles";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import FormLogin from "../../components/formLogin";
import ListTweets from "../../components/listTweets";

import * as userPageActions from "../../store/modules/userPage/actions";
import * as authActions from "../../store/modules/auth/actions";
import * as tweetsActions from "../../store/modules/tweets/actions";

function Explore({ name = "Hooks", history, currentUser, listTweets }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tweetsActions.getTweetsList());
  }, [dispatch]);

  const selectUserHandle = data => {
    dispatch(userPageActions.getDataUserPage(data.username));
  };

  const submitFormHandle = (username, password) => {
    dispatch(authActions.signIn(username, password));
  };

  return (
    <Styled.Container>
      <Styled.ContainerTweets>
        <Styled.Topic>Explore</Styled.Topic>
        <ListTweets list={listTweets} fallbackSelectUser={selectUserHandle} />
      </Styled.ContainerTweets>
      <Styled.ContainerLogin>
        {!!currentUser.username === false ? (
          <>
            <Styled.Title>Entrar no Twitter</Styled.Title>
            <FormLogin fallbackSubmit={submitFormHandle} />
            <Styled.ContainerLink>
              <Styled.Link to="/">Esqueceu sua senha?</Styled.Link>
              <Styled.Divider>·</Styled.Divider>
              <Styled.Link to="/register">Inscrever-se no Twitter</Styled.Link>
            </Styled.ContainerLink>
          </>
        ) : (
          <Styled.Logo>
            <Logo />
          </Styled.Logo>
        )}
      </Styled.ContainerLogin>
    </Styled.Container>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  listTweets: state.tweets.list,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Explore);
