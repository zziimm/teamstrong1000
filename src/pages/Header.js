import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import logoImg from "../img/logo2.png";
import logoImg from "../img/TON &-logo.png";
import Search_modal from '../components/Search_modal';
import { useSelector } from 'react-redux';
import { selectLoginUserFirebase } from '../features/useinfo/userInfoSlice';
import { useEffect } from 'react';
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  
  .logo {
    margin: 20px 0 20px 0px;
    cursor: pointer;
  }
  .logo img {
    width: 100px;
    height: 95px;
  }

  .search.loginText{
    display: flex;
    align-items: center;
  }
`;

function Header() {
  const navigate = useNavigate();
  const loginUserFirebase = useSelector(selectLoginUserFirebase);
  useEffect(() => {
    console.log(loginUserFirebase);
  }, [loginUserFirebase])

  return (
    <header>
      <HeaderWrapper>
        <div 
          className='logo'
          href='#'
          onClick={() => {navigate('/')}}
          >
          <img src={logoImg} alt='logoImage' />
        </div>
        <div className='search loginText'>
          {loginUserFirebase?.email
            ? <span>{loginUserFirebase?.email}님 반갑습니다!</span>
            : ''
          }
          <Search_modal />
        </div>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
