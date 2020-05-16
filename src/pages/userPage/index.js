import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  faUserAlt,
  faUserEdit,
  faUserPlus,
  faUserMinus,
  faDoorOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./styles";

import { Group as ButtonGroup } from "../../components/button";

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

function UserPage({
  history,
  match,
  currentUser,
  userPage,
  listTweets,
  trends,
  listFollow,
  clearTweetContent,
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

  const buttonsMenu = [
    {
      text: "Follow",
      typeButton: "link",
      icon: faUserPlus,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => followUserHandle(),
      visible:
        !!currentUser.username === false ||
        (currentUser.username !== userPage.username &&
          !currentUser.followers.some(item => item === userPage._id)),
    },
    {
      text: "Unfollow",
      typeButton: "link",
      icon: faUserMinus,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => followUserHandle(),
      visible:
        !!currentUser.username &&
        currentUser.username !== userPage.username &&
          currentUser.followers.some(item => item === userPage._id),
    },
    {
      text: "Home",
      typeButton: "link",
      icon: faHome,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () =>
        history.push(
          !!currentUser.username ? `/users/${currentUser.username}` : "/"
        ),
      visible:
        !!currentUser.username &&
        ["/", `/users/${currentUser.username}`].indexOf(
          history.location.pathname
        ) === -1,
    },
    {
      text: "Edit Profiler",
      typeButton: "link",
      icon: faUserEdit,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => editProfilerHandle(),
      visible:
        !!currentUser.username && currentUser.username === userPage.username,
    },
    {
      text: "Login",
      typeButton: "link",
      icon: faUserAlt,
      colorIcon: "rgb(26, 145, 218)",
      colorButton: "rgb(101, 119, 134)",
      onClick: () => history.push("/login"),
      visible: !!currentUser.username === false,
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

  useEffect(() => {
    const username = !!match.params.username ? match.params.username : "";

    dispatch(userPageActions.getDataUserPage(username));
    dispatch(tweetsActions.getTweetsList());
    dispatch(trendsActions.getTrendsList());
    dispatch(followActions.getFollowList());
    dispatch(followersActions.getFollowersList());

    // eslint-disable-next-line
  }, [dispatch]);

  const selectUserHandle = data => {
    dispatch(userPageActions.getDataUserPage(data.username));
  };

  const editProfilerHandle = () => {
    history.push("/profiler/edit");
  };

  const followUserHandle = () => {
    if (!!currentUser.username) {
      dispatch(followActions.followUser());
    } else {
      history.push("/login", { follow: userPage });
    }
  };

  const postTweetTextHandle = text => dispatch(tweetsActions.postTweet(text));

  return (
    <>
      <Header userPage={userPage} />

      <Styled.ContainerMenu>
        <Navbar options={linksMenu}>
          <Styled.ContainerMenuButtons>
            <ButtonGroup list={buttonsMenu} />
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
            <Tweet
              placeholder="What's happening"
              clearContent={clearTweetContent}
              fallbackTweetText={postTweetTextHandle}
            />
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
  clearTweetContent: state.tweets.clearTweetContent,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserPage);
