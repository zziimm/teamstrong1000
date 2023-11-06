import React from 'react';
import {  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from "../img/logo.png";
import search from "../img/search.png";
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .logo {
    
  }
  .search {

  }
`;

function Header(props) {
  // const navigate = useNavigate();
  return (
    <header>
      <HeaderWrapper>
        <div className='logo' href='#'><img src={logoImg} /></div>
        <div className='search'><img src={search}/></div>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
