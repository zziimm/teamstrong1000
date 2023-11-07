import React from 'react';
import { styled } from "styled-components";
import { MdDensityMedium, MdCalendarMonth, MdPerson } from "react-icons/md";
import { Outlet, useNavigate } from 'react-router-dom';


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
  
  const navigate = useNavigate();

  return (
    <>
      <ButtonArea>
        <ButtonStyle onClick={() => navigate('/')}>
          <MdDensityMedium />
          HOME
        </ButtonStyle>
        <ButtonStyle>
          <MdCalendarMonth />
          내일정
        </ButtonStyle>
        <ButtonStyle onClick={() => navigate('/login')}>
          <MdPerson />
          마이
        </ButtonStyle>
      </ButtonArea>

      <Outlet />
    </>
  );
}

export default BottomMenu;