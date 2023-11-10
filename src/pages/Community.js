import React from 'react';
import styled from 'styled-components';
import CommunityList from '../components/CommunityList';
import Search_modal from '../components/Search_modal';
import Header from './Header';


const CommunityWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 30px 55px;
  }
`;

function Community(props) {
  return (
    <CommunityWrapper>
      <Header/>
      <h1>커뮤니티</h1>
      <CommunityList />
    </CommunityWrapper>
  );
}

export default Community;