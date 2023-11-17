import React from 'react';
import {  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from "../img/logo2.png";
import Search_modal from '../components/Search_modal';
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin: 0 auto;
  align-items: center;
  
  .logo {
    margin: 20px 0 34px 0px;
    cursor: pointer;
  }
  .search {
    margin: 34px 16px 34px 0;
  }
`;

function Header(props) {
  const navigate = useNavigate();
  return (
    <header>
      <HeaderWrapper>
        <div 
          className='logo'
          href='#'
          onClick={() => {navigate('/')}}
          >
          <img src={logoImg} />
        </div>
        <Search_modal />
      </HeaderWrapper>
    </header>
  );
}

export default Header;
