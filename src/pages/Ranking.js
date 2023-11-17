import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamInfo, getTeamInfo } from '../features/useinfo/userInfoSlice';
import logoImg from "../img/logo2.png";


const RankingWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;
  
  div + div {
    margin-top: 10px;
  }

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 30px 55px;
  }

  &:nth-child(){
    width: 450px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
  }

  .firstTeam {
    width: 450px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
    background-color: #ffd700;
  }

  .secondTeam {
    width: 450px;
    height: 80px;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
    background-color: #c0c0c0;
  }

  .thirdTeam {
    width: 450px;
    height: 70px;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
    background-color: #743531;
  }
`;

const TeamList = styled.div`
  width: 450px;
  height: 50px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  background-color: #c0c0c0;

`;

const FirstTeam = styled.div`
  width: 450px;
  height: 120px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  background-color: #ffd700;
`;

const SecondTeam = styled.div`
  width: 450px;
  height: 80px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  background-color: #c0c0c0;
`;

const ThirdTeam = styled.div`
  width: 450px;
  height: 70px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  background-color: #743531;
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

function Ranking(props) {
  const dispatch = useDispatch();
  const teamList = useSelector(getTeamInfo);


  useEffect(() => {
    axios.get(`http://localhost:3000/team`)
      .then((response) => {
        dispatch(getAllTeamInfo(response.data))
      })
      .catch(error => console.error(error))
  }, []);

  if (!teamList) {
    return null;
  }


  return (
    <RankingWrapper>
      <HeaderWrapper>
        <div className='logo' href='#'><img src={logoImg} /></div>
        <div />
      </HeaderWrapper>
      <h1>명예의 전당</h1>
      {teamList.map((team, index) => {
        return (
          index === 0
          ?
            <FirstTeam key={team.teamName}>
              <p>{team.teamName}</p>
              <p>승률: {Math.round(100 * (team.winscore / (team.winscore + team.losescore)))}%</p>
              <p>{team.maindistrict}</p>
              {team.members.map(member => <span>{member} </span>)}
            </FirstTeam>
          : index === 1
            ?
              <SecondTeam key={team.teamName}>
                  <p>{team.teamName}</p>
                  <p>승률: {Math.round(100 * (team.winscore / (team.winscore + team.losescore)))}%</p>
                  <p>{team.maindistrict}</p>
              </SecondTeam>
            : index === 2
              ?
                <ThirdTeam key={team.teamName}>
                  <p>{team.teamName}</p>
                  <p>승률: {Math.round(100 * (team.winscore / (team.winscore + team.losescore)))}%</p>
                  <p>{team.maindistrict}</p>
                </ThirdTeam>
              :
                <TeamList key={team.teamName}>
                  <p>{team.teamName}</p>
                  <p>승률: {Math.round(100 * (team.winscore / (team.winscore + team.losescore)))}%</p>
                  <p>{team.maindistrict}</p>
                </TeamList>
        )
      })}



{/* 
      <FirstTeam>
      </FirstTeam>
      <SecondTeam>

      </SecondTeam>
      <ThirdTeam>

      </ThirdTeam> */}
    </RankingWrapper>
  );
}

export default Ranking;