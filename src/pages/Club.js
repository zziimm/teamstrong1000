import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamInfo } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClubWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: scroll;
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

const ClubItem = styled.div`
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

  .joinButton {
    cursor: pointer;
    background-color: #4610C0;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
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
  const teamInfo = useSelector(getAllTeamInfo);
  console.log(teamInfo);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get('http://localhost:8088/club', { withCredentials: true });
        dispatch(getAllTeamInfo(response.data.data));
      } catch (error) {
        console.error(error);
        // alert('로그인이 필요합니다!')
      }
    };
    data();
  }, [dispatch]);

  const handleJoin = async (teamName) => {
    try {
      const response = await axios.post('http://localhost:8088/club/join', { teamName, username }, { withCredentials: true });
      console.log(response);
      if (response.data.flag) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ClubWrapper>
      <div className='매칭찾기'>클럽</div>
      <hr/>
      <div className='bigDiv'>
        <p className='제목'>클럽 리스트</p>
        {teamInfo?.map((myTeam) => (
          <ClubItem key={myTeam.teamName}>
            <div className='left'>
              <div className='team'>TEAM</div>
              <h4>{myTeam.teamName}</h4>
              <p><span>지역 | </span>{myTeam.maindistrict}</p>
            </div>
            <div className='right'>
              {myTeam.members.map((member) => <div className='members' key={member}> {member} </div>)}
              <button className='joinButton' onClick={() => handleJoin(myTeam.teamName)}>가입하기</button>
            </div>
          </ClubItem>
        ))}
      </div>
      <CommunityInsertBtn onClick={() => {navigate('/clubInsert')}}>
        +
        <span className='hoverText'>클럽 개설하기</span>
      </CommunityInsertBtn>
    </ClubWrapper>
  );
}

export default Club;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTeamInfo, getTeamInfo } from '../features/useinfo/userInfoSlice';
// import { useNavigate } from 'react-router-dom';
// import logoImg from "../img/logo2.png";
// import axios from 'axios';
// import ReactTooltip from 'react-tooltip';
// import { Tooltip } from 'react-tooltip'



// const ClubWrapper = styled.div`
//   background-color: #fff;
//   width: 530px;
//   height: 100vh;
//   overflow-y: scroll;
//   color: #1c1b1f;

//   .매칭찾기 {
//     margin: 44px 0 14px 37px;
//     color: #1c1b1f;
//     font-size: 24px;
//     font-weight: 800;
//   }
  
//   hr {
//     margin: 0 37px;
//     border: 1px solid #4610C0;
//   }

//   .bigDiv {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     padding: 0 37px;
//   }
  
//   .제목 {
//     margin-top: 34px;
//     font-size: 18px;
//     font-weight: 800;
//     margin-bottom: 12px;
//   }
  

// `;

// const MyClub = styled.div`
//   width: 100%;
//   border: 2px solid #4610C0;
//   border-radius: 7px;
//   padding: 20px ;
//   line-height: 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;


//   .team {
//     font-size: 12px;
//     color: #fff;
//     width: 60px;
//     padding: 2px;
//     margin-bottom: 10px;
//     text-align: center;
//     border-radius: 30px;
//     background-color: #4610C0;
//   }

//   h4 {
//     font-size: 30px;
//     font-weight: bold;
//     margin-bottom: 20px;

//   }

//   span {
//     font-weight: 900;
//   }
  
//   .right {
//     padding-left: 60px;
//     border-left: 1px solid #E9E9E9;
//   }

//   .members {
//     margin-bottom: 8px;
//     margin-right: 30px;
//     background-color: #D9D9D9;
//     width: 120px;
//     text-align: center;
//     font-size: 14px;
//     border-radius: 30px;
//   }
// `;

// const OtherClub = styled.div`
//   width: 100%;
//   border: 1px solid #E9E9E9;
//   border-radius: 7px;
//   padding: 20px ;
//   line-height: 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;


//   .team {
//     font-size: 12px;
//     color: #fff;
//     width: 60px;
//     padding: 2px;
//     margin-bottom: 10px;
//     text-align: center;
//     border-radius: 30px;
//     background-color: #000;
//   }

//   h4 {
//     font-size: 22px;
//     font-weight: bold;
//     margin-bottom: 20px;

//   }

//   span {
//     font-weight: 900;
//   }

//     .right {
//     padding-left: 60px;
//     border-left: 1px solid #E9E9E9;
//   }

//   .members {
//     margin-bottom: 8px;
//     margin-right: 30px;
//     background-color: #D9D9D9;
//     width: 120px;
//     text-align: center;
//     font-size: 14px;
//     border-radius: 30px;
//   }
// `;


// const CommunityInsertBtn = styled.button`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   left: 888px;
//   right: 0;
//   bottom: 77px;
//   margin: 0 auto;
//   background-color: #eee;
//   box-shadow: 1px 1px 1px 1px gray;
//   width: 53px;
//   height: 53px;
//   font-size: 32px;
//   border-radius: 30px;
//   border: none;
//   opacity: 0.7;
//   transition: 0.3s;
//   cursor: pointer;

//   .hoverText {
//     display: none;
//   }

//   &:hover .hoverText {
//     display: block;
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     border-radius: 10px 10px 0 10px ;
//     font-size: 16px;
//     width: 130px;
//     height: 30px;
//     top: -30px;
//     right: 43px;
//     background-color: #4610C0;
//   }

//   &:hover {
//     background-color: #4610C0;
//     color: #fff;
//     box-shadow: 1px 1px 1px 1px #000;
//   }
// `;

// function Club(props) {
//   const dispatch = useDispatch();
//   const teamInfo = useSelector(getTeamInfo);
//   console.log(teamInfo);
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('')
//   const [clubName, setClubName] = useState('Strong1000');



//   useEffect(() => {
//     const data = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8088/club`, { withCredentials: true });
//         console.log(response);
//         dispatch(getAllTeamInfo(response.data.data));
//       } catch (error) {
//         console.error(error);
//         // alert('로그인이 필요합니다!')
//       }
//     };
//     data();
//   }, []);


//   const handleInsert = async () => {
//     // 사용자에게 이름을 입력받는 로직
//     const userInput = prompt('클럽에 가입할 사용자 이름을 입력하세요:', '');

//     if (userInput !== null && userInput.trim() !== '') {
//       try {
//         // 클럽이 존재하는지 확인하는 로직 추가
//         const clubExistenceCheck = await axios.get(`http://localhost:8088/club/${clubName}`, {
//           withCredentials: true,
//         });

//         if (!clubExistenceCheck.data.flag) {
//           // 클럽이 존재하지 않는 경우
//           alert('존재하지 않는 클럽입니다.');
//           return;
//         }

//         // 클럽에 가입하는 로직
//         const response = await axios.post(`http://localhost:8088/club/join`, {
//           teamName: clubName,
//           username: userInput.trim(),
//         }, { withCredentials: true });

//         console.log(response);

//         if (response.data.flag) {
//           alert(response.data.message);
//         } else {
//           alert(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert('이름을 입력해야 가입할 수 있습니다.');
//     }
//   }

  


  
//   return (
//     <ClubWrapper>
//       <div className='매칭찾기'>클럽</div>
//       <hr/>

//       <div className='bigDiv'>
//         <p className='제목'>내가 속한 클럽</p>
//       {teamInfo?.map((myTeam) => {
//         return (
//           myTeam.teamName === 'Strong1000' &&
//           <MyClub>
//             <div className='left'>
//               <div className='team'>TEAM</div>
//               <h4>{myTeam.teamName}</h4>
//               <p><span>지역 | </span>{myTeam.maindistrict}</p>
//             </div>
//             <div className='right'>
//             {myTeam.members.map(member => <div className='members'> {member} </div>)}
//             </div>
//             <button onClick={() => { handleInsert(myTeam.teamName) }}>가입하기</button>
//           </MyClub>
          
//         )
//       })}
//       <p className='제목'>이웃 클럽</p>
//       {teamInfo?.map((myTeam) => {
//         return (
//           !(myTeam.teamName === 'Strong1000') &&
//           <OtherClub>
//             <div className='left'>
//             <div className='team'>TEAM</div>
//               <h4>{myTeam.teamName}</h4>
//               <p><span>지역 | </span>{myTeam.maindistrict}</p>
//             </div>

//             <div className='right'>
//             {myTeam.members.map(member => <div className='members'> {member} </div>)}
//             </div>
//           </OtherClub>
//         )
//       })}
      

//       <CommunityInsertBtn
//         onClick={() => {navigate('/clubInsert')}}
//       >
//         +
//         <span className='hoverText'>클럽 개설하기</span>
//       </CommunityInsertBtn>
//       </div>
//     </ClubWrapper>
//   );
// }

// export default Club;