import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getTeamInfo } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';


const ClubWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 30px 55px;
  }

  h2 {
    font-size: 25px;
    font-weight: bold;
    margin: 0 30px 20px;
    margin-top: 40px;
  }
`;

const MyClub = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  padding: 20px ;
  cursor: pointer;
  line-height: 20px;

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &:hover {
    border: 1px solid #9b9b9b;
  }
`;
const OtherClub = styled.div`
  width: 480px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  padding: 20px ;
  cursor: pointer;
  line-height: 20px;

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &:hover {
    border: 1px solid #9b9b9b;
  }
  & + & {
    margin-top: 20px;
  }
`;

const CommunityInsertBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 888px;
  right: 0;
  bottom: 77px;
  margin: 0 auto;
  background-color: #eee;
  box-shadow: 1px 1px 1px 1px gray;
  width: 53px;
  height: 53px;
  font-size: 32px;
  border-radius: 30px;
  border: none;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;

  .hoverText {
    display: none;
  }

  &:hover .hoverText {
    display: block;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 10px 10px 0 10px ;
    font-size: 16px;
    width: 130px;
    height: 30px;
    top: -30px;
    right: 43px;
    background-color: #4610C0;
  }

  &:hover {
    background-color: #4610C0;
    color: #fff;
    box-shadow: 1px 1px 1px 1px #000;
  }
`;

function Club(props) {
  const teamInfo = useSelector(getTeamInfo);
  const navigate = useNavigate();
  
  return (
    <ClubWrapper>
      <Header />
      <h1>클럽</h1>
      <h2>내 클럽</h2>
      {teamInfo.map((myTeam) => {
        return (
          myTeam.teamName === 'Strong1000' &&
          <MyClub>
            <h4>{myTeam.teamName}</h4>
            <p>지역: {myTeam.maindistrict}</p>
            <p>
              팀원:
              {myTeam.members.map(member => <span> {member} </span>)}
            </p>
          </MyClub>
        )
      })}
      <h2>이웃 클럽</h2>
      {teamInfo.map((myTeam) => {
        return (
          !(myTeam.teamName === 'Strong1000') &&
          <OtherClub>
            <h4>{myTeam.teamName}</h4>
            <p>지역: {myTeam.maindistrict}</p>
            <p>
              팀원:
              {myTeam.members.map(member => <span> {member} </span>)}
            </p>
          </OtherClub>
        )
      })}
      

      <CommunityInsertBtn
        onClick={() => {navigate('/clubInsert')}}
      >
        +
        <span className='hoverText'>클럽 개설하기</span>
      </CommunityInsertBtn>
    </ClubWrapper>
  );
}

export default Club;