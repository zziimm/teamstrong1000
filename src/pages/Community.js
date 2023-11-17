import React from 'react';
import styled from 'styled-components';
import CommunityList from '../components/CommunityList';
import logoImg from "../img/logo2.png";



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
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin: 0 auto;
  align-items: center;
  
  .logo {
    margin: 20px 0 34px 0px;
  }
`;


function Community(props) {
  return (
    <CommunityWrapper>
      <HeaderWrapper>
        <div className='logo' href='#'><img src={logoImg} /></div>
        <div />
      </HeaderWrapper>
      <h1>커뮤니티</h1>
      <CommunityList />
    </CommunityWrapper>
  );
}

export default Community;