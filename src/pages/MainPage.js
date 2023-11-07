import React from 'react';
import Header from './Header';
import NavList from './NavList';
import PostList from './PostList';
import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: hidden;
`;

function MainPage(props) {
  return (
    <MainWrapper>
      <Header />
      <NavList />
      <PostList />
    </MainWrapper>
  );
}

export default MainPage;