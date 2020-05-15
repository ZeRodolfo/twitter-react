import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./styles";

import { Link as ButtonLink } from "../../components/button";

import Header from "../../components/header";
import UserDetails from "../../components/userDetails";
import Tweet from "../../components/tweet";
import Followers from "../../components/followers";
import Navbar from "../../components/navbar";
import Search from "../../components/search";
import Trends from "../../components/trends";
import Follow from "../../components/follow";
import ListTweets from "../../components/listTweets";

import * as authActions from "../../store/modules/auth/actions";
import * as userPageActions from "../../store/modules/userPage/actions";
import * as tweetsActions from "../../store/modules/tweets/actions";
import * as trendsActions from "../../store/modules/trends/actions";
import * as followActions from "../../store/modules/follow/actions";
import * as followersActions from "../../store/modules/followers/actions";

function Main({
  history,
  match,
  currentUser,
  userPage,
  listTweets,
  trends,
  listFollow,
  listFollowers,
}) {
  const dispatch = useDispatch();

  const linksMenu = [
    {
      id: "tweets",
      label: "Tweets",
      value: listTweets.length,
      onClick: () => console.log("Tweets"),
      active: true,
    },
    {
      id: "following",
      label: "Following",
      value: "1,123",
      onClick: () => console.log("Following"),
    },
    {
      id: "followers",
      label: "Followers",
      value: "2M",
      onClick: () => console.log("Followers"),
    },
    {
      id: "favorites",
      label: "Favorites",
      value: "20",
      onClick: () => console.log("Favorites"),
    },
  ];

  useEffect(() => {
    const username = !!match.params.username ? match.params.username : "";

    // dispatch(authActions.getCurrentUser());
    dispatch(userPageActions.getDataUserPage(username));
    dispatch(tweetsActions.getTweetsList());
    dispatch(trendsActions.getTrendsList());
    dispatch(followActions.getFollowList());
    dispatch(followersActions.getFollowersList());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("userPage", userPage);
  // }, [userPage]);

  // useEffect(() => {
  //   console.log("trends", trends);
  // }, [trends]);

  // useEffect(() => {
  //   console.log("listTweets", listTweets);
  // }, [listTweets]);

  // useEffect(() => {
  //   console.log("listFollow", listFollow);
  // }, [listFollow]);

  // useEffect(() => {
  //   console.log("currentUser", currentUser);
  // }, [currentUser]);

  const selectUserHandle = data => {
    dispatch(userPageActions.getDataUserPage(data.username));
  };

  const editProfilerHandle = () => {
    history.push("/profiler/edit");
  };

  const followUserHandle = () => {
    const route = !!currentUser.username ? "/profiler/edit" : "/login";
    history.push(route);
  };

  return (
    <>
      <Header userPage={userPage} />

      <Styled.ContainerMenu>
        <Navbar options={linksMenu}>
          <Styled.ContainerMenuButtons>
            {/* <Styled.MenuButton width={50}>
              <ButtonLink>
                <Styled.ButtonIcon color="rgb(101,119,134)">
                  <FontAwesomeIcon icon={faCog} />
                </Styled.ButtonIcon>
              </ButtonLink>
            </Styled.MenuButton> */}

            {!!currentUser.username &&
            currentUser.username === userPage.username ? (
              <Styled.MenuButton>
                <ButtonLink>
                  <Styled.ButtonText onClick={() => editProfilerHandle()}>
                    <Styled.ButtonIcon color="rgb(26, 145, 218)">
                      <FontAwesomeIcon icon={faUserEdit} />
                    </Styled.ButtonIcon>
                    Edit Profiler
                  </Styled.ButtonText>
                </ButtonLink>
              </Styled.MenuButton>
            ) : (
              <Styled.MenuButton>
                <ButtonLink onClick={() => followUserHandle()}>
                  <Styled.ButtonText>
                    <Styled.ButtonIcon color="rgb(26, 145, 218)">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </Styled.ButtonIcon>
                    Follow
                  </Styled.ButtonText>
                </ButtonLink>
              </Styled.MenuButton>
            )}
          </Styled.ContainerMenuButtons>
        </Navbar>
      </Styled.ContainerMenu>

      <Styled.Body>
        <Styled.Aside>
          <Styled.ContainerUserDetails>
            <UserDetails userPage={userPage} />
            <Followers
              list={userPage.followers}
              fallbackSelectUser={selectUserHandle}
            />
          </Styled.ContainerUserDetails>
        </Styled.Aside>

        <Styled.Main>
          <Styled.ContainerTweet>
            <Tweet placeholder="What's happening" />
          </Styled.ContainerTweet>
          <Styled.ContainerTweets>
            <ListTweets
              list={listTweets}
              fallbackSelectUser={selectUserHandle}
            />
          </Styled.ContainerTweets>
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
  userPage: state.userPage.data,
  listTweets: state.tweets.list,
  trends: state.trends.list,
  listFollow: state.follow.list,
  listFollowers: state.followers.list,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Main);
