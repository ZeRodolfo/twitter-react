import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { faHome, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

import * as Styled from "./styles";

import { Group as ButtonGroup } from "../../components/button";

import Header from "../../components/header";
import UserDetails from "../../components/userDetails";
import Followers from "../../components/followers";
import Navbar from "../../components/navbar";
import Search from "../../components/search";
import Trends from "../../components/trends";
import Follow from "../../components/follow";
import { Primary as ButtonPrimary } from "../../components/button";
import { Field as InputField } from "../../components/input";

import * as authActions from "../../store/modules/auth/actions";
import * as userPageActions from "../../store/modules/userPage/actions";
import * as tweetsActions from "../../store/modules/tweets/actions";
import * as trendsActions from "../../store/modules/trends/actions";
import * as followActions from "../../store/modules/follow/actions";
import * as followersActions from "../../store/modules/followers/actions";

function ProfilerEdit({ history, currentUser, trends, listFollow }) {
  const dispatch = useDispatch();

  const buttonsMenu = [
    {
      text: "Home",
      typeButton: "link",
      icon: faHome,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => homeHandle(),
      visible: !!currentUser.username && history.location.pathname !== "/",
    },
    {
      text: "Logout",
      typeButton: "link",
      icon: faDoorOpen,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => dispatch(authActions.logout()),
      visible: !!currentUser.username,
    },
  ];

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    description: yup.string().required("Campo obrigatório."),
  });

  useEffect(() => {
    dispatch(tweetsActions.getTweetsList());
    dispatch(trendsActions.getTrendsList());
    dispatch(followActions.getFollowList());
    dispatch(followersActions.getFollowersList());
  }, [dispatch]);

  const changeCoverHandle = picture => {
    dispatch(authActions.changeCover(picture));
  };

  const changeAvatarHandle = picture => {
    dispatch(authActions.changeAvatar(picture));
  };

  const homeHandle = () => {
    history.push("/");
  };

  const selectUserHandle = data => {
    dispatch(userPageActions.getDataUserPage(data.key));
  };

  return (
    <>
      <Header
        userPage={currentUser}
        isEditable={true}
        fallbackChangeCover={changeCoverHandle}
        fallbackChangeAvatar={changeAvatarHandle}
      />

      <Styled.ContainerMenu>
        <Navbar options={[]}>
          <Styled.ContainerMenuButtons>
            <Styled.MenuButton>
              <ButtonGroup list={buttonsMenu} />
            </Styled.MenuButton>
          </Styled.ContainerMenuButtons>
        </Navbar>
      </Styled.ContainerMenu>

      <Styled.Body>
        <Styled.Aside>
          <Styled.ContainerUserDetails>
            <UserDetails userPage={currentUser} />
            <Followers
              list={currentUser.followers}
              fallbackSelectUser={selectUserHandle}
            />
          </Styled.ContainerUserDetails>
        </Styled.Aside>

        <Styled.Main>
          <Styled.ContainerForm>
            <Formik
              initialValues={{
                name: currentUser.name,
                description: currentUser.description,
              }}
              validationSchema={schema}
              onSubmit={(values, { reset }) => {
                dispatch(authActions.savePersonalData(values));
              }}
            >
              {() => (
                <Form>
                  <Styled.Row>
                    <Field
                      component={InputField}
                      inputType="primary"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </Styled.Row>
                  <Styled.Row>
                    <Field
                      component={InputField}
                      inputType="textArea"
                      type="textarea"
                      name="description"
                      placeholder="Description"
                    />
                  </Styled.Row>
                  <Styled.ContainerButton>
                    <ButtonPrimary>Save</ButtonPrimary>
                  </Styled.ContainerButton>
                </Form>
              )}
            </Formik>
          </Styled.ContainerForm>
        </Styled.Main>

        <Styled.Aside width={430}>
          <Styled.ContainerRight>
            <Styled.ContainerSearch>
              <Search />
            </Styled.ContainerSearch>

            <Styled.ContainerTrends>
              <Trends list={trends}>Trends for you</Trends>
            </Styled.ContainerTrends>

            <Styled.ContainerFollow>
              <Follow list={listFollow}>Who to follow</Follow>
            </Styled.ContainerFollow>
          </Styled.ContainerRight>
        </Styled.Aside>
      </Styled.Body>
    </>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  listTweets: state.tweets.list,
  trends: state.trends.list,
  listFollow: state.follow.list,
  listFollowers: state.followers.list,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilerEdit);
