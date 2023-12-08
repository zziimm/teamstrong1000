import React from 'react';
import { styled } from "styled-components";
import { MdDensityMedium, MdCalendarMonth, MdPerson, MdGroups } from "react-icons/md";
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../features/useinfo/userInfoSlice';
import { useEffect } from 'react';
import axios from 'axios';


const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 492px;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  justify-content: space-around;
  background-color: purple;
  width: 530px;
  height: 55px;
  background: #1c1b1f;
  z-index: 99;
  `;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: #fff;

  svg {
    font-size: 28px;
  }

`;

function BottomMenu(props) {
  const loginUser = useSelector(getLoginUser);
    // useEffect( async () => {
    //   if (loginUser) {
    //     await axios.get(`${process.env.REACT_APP_ADDRESS}/user/loginUser`, {withCredentials: true})
    //   } else {
    //     return
    //   }
    // }, []);

  
  const navigate = useNavigate();

  return (
    <>
      <ButtonArea>
        <ButtonStyle onClick={() => navigate('/')}>
          <MdDensityMedium />
          HOME
        </ButtonStyle>
        <ButtonStyle onClick={() => navigate('/myCalendar')}>
          <MdCalendarMonth />
          내일정
        </ButtonStyle>
        <ButtonStyle onClick={() => navigate('/club')}>
          <MdGroups />
          클럽
        </ButtonStyle>
        { loginUser 
          ?
          <ButtonStyle onClick={() => navigate('/myPage')}>
            <MdPerson />
            마이페이지
          </ButtonStyle>
          :
          <ButtonStyle onClick={() => navigate('/login')}>
            <MdPerson />
            로그인
          </ButtonStyle>
        }
      </ButtonArea>

      <Outlet />
    </>
  );
}

export default BottomMenu;