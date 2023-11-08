import React, { useEffect } from 'react';
import Header from './Header';
import NavList from './NavList';
import PostList from './PostList';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getAllUserInfo } from '../features/useinfo/userInfoSlice';
import { getAllUserPostList } from '../features/postListSlice/postListInsertSlice';

const MainWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: hidden;
`;

function MainPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/zziimm/db-user/userInfo')
      .then((reponse) => {
        console.log(reponse);
        dispatch(getAllUserInfo(reponse.data))
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  return (
    <MainWrapper>
      <Header />
      <NavList />
      <PostList />
    </MainWrapper>
  );
}

export default MainPage;