import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamInfo, getTeamInfo } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';
import logoImg from "../img/logo2.png";
import axios from 'axios';



const ClubWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;

  .매칭찾기 {
    margin: 44px 0 14px 37px;
    color: #1c1b1f;
    font-size: 24px;
    font-weight: 800;
  }
  
  hr {
    margin: 0 37px;
    border: 1px solid #4610C0;
  }

  .bigDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 37px;
  }
  
  .제목 {
    margin-top: 34px;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 12px;
  }
  

`;

const MyClub = styled.div`
  width: 100%;
  border: 2px solid #4610C0;
  border-radius: 7px;
  padding: 20px ;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .team {
    font-size: 12px;
    color: #fff;
    width: 60px;
    padding: 2px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 30px;
    background-color: #4610C0;
  }

  h4 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;

  }

  span {
    font-weight: 900;
  }
  
  .right {
    padding-left: 60px;
    border-left: 1px solid #E9E9E9;
  }

  .members {
    margin-bottom: 8px;
    margin-right: 30px;
    background-color: #D9D9D9;
    width: 120px;
    text-align: center;
    font-size: 14px;
    border-radius: 30px;
  }
`;

const OtherClub = styled.div`
  width: 100%;
  border: 1px solid #E9E9E9;
  border-radius: 7px;
  padding: 20px ;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;


  .team {
    font-size: 12px;
    color: #fff;
    width: 60px;
    padding: 2px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 30px;
    background-color: #000;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;

  }

  span {
    font-weight: 900;
  }

    .right {
    padding-left: 60px;
    border-left: 1px solid #E9E9E9;
  }

  .members {
    margin-bottom: 8px;
    margin-right: 30px;
    background-color: #D9D9D9;
    width: 120px;
    text-align: center;
    font-size: 14px;
    border-radius: 30px;
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
  const dispatch = useDispatch();
  const teamInfo = useSelector(getTeamInfo);
  console.log(teamInfo);
  const navigate = useNavigate();

  // useEffect((club) => {
  //   axios.get(`http://localhost:8088/club`, club)
  //     .then((response) => {
  //       console.log(response);
  //       dispatch(getAllTeamInfo(response.data))
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/club`);
        console.log(response);
        dispatch(getAllTeamInfo(response.data.data));
      } catch (error) {
        console.error(error);
      }
    };
  
    data();
  }, []);
  
  
  
  return (
    <ClubWrapper>
      <div className='매칭찾기'>클럽</div>
      <hr/>

      <div className='bigDiv'>
        <p className='제목'>내가 속한 클럽</p>
      {teamInfo?.map((myTeam) => {
        return (
          myTeam.teamName === 'Strong1000' &&
          <MyClub>
            <div className='left'>
              <div className='team'>TEAM</div>
              <h4>{myTeam.teamName}</h4>
              <p><span>지역 | </span>{myTeam.maindistrict}</p>
            </div>
            <div className='right'>
            {myTeam.members.map(member => <div className='members'> {member} </div>)}
            </div>
          </MyClub>
        )
      })}
      <p className='제목'>이웃 클럽</p>
      {teamInfo?.map((myTeam) => {
        return (
          !(myTeam.teamName === 'Strong1000') &&
          <OtherClub>
            <div className='left'>
            <div className='team'>TEAM</div>
              <h4>{myTeam.teamName}</h4>
              <p><span>지역 | </span>{myTeam.maindistrict}</p>
            </div>

            <div className='right'>
            {myTeam.members.map(member => <div className='members'> {member} </div>)}
            </div>
          </OtherClub>
        )
      })}
      

      <CommunityInsertBtn
        onClick={() => {navigate('/clubInsert')}}
      >
        +
        <span className='hoverText'>클럽 개설하기</span>
      </CommunityInsertBtn>
      </div>
    </ClubWrapper>
  );
}

export default Club;