import React from 'react';
import {  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from "../img/logo.png";
import Search_modal from '../components/Search_modal';
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 530px;
  margin: 0 auto;
  .logo {
    margin: 34px 0 34px 16px;
  }
  .search {
    margin: 34px 16px 34px 0;
  }
`;

function Header(props) {
  // const navigate = useNavigate();
  return (
    <header>
      <HeaderWrapper>
        <div className='logo' href='#'><img src={logoImg} /></div>
        <Search_modal />
        {/* <div className='search'><img src={search}/></div> */}
      </HeaderWrapper>
    </header>
  );
}

export default Header;
