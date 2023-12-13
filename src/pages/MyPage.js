import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCalendarInfo, getLoginUser, getLoginUserInfo } from '../features/useinfo/userInfoSlice';
import MypageMatchItem from '../components/MypageMatchItem';

const MyPageArea = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: scroll;
  color: #1c1b1f;

  .myPageHeader {
    margin: 44px 0 14px 37px;
    color: #1c1b1f;
    font-size: 24px;
    font-weight: 800;
  }

  
  hr {
    margin: 0 37px;
    border: 1px solid #4610C0;
  }
  
  button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
    border: none;
    background: #4610C0;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    transition: 0.3s;
    border: 1px solid #4610C0;
    cursor: pointer;
  }
  
  button:hover {
    background: #fff;
    color: #4610C0;
    border: 1px solid #4610C0;
  }

  .bigDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 37px;
  }

  h4 {
    margin-top: 34px;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 12px;
  }
  
  .signArea {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    gap: 10px;
  }
`;

const MyMatchList = styled.div`
  width: 100%;
  border: 2px solid #4610C0;
  border-radius: 7px;
  padding: 20px ;
  line-height: 20px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;

  div {
    position: relative;
    cursor: pointer;
  }

  div .popupBox {
    cursor: default;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    border-radius: 7px;
    position: absolute;
    top: 0;
  }
  button {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    border: none;
    background: #4610C0;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    transition: 0.3s;
    border: 1px solid #4610C0;
    cursor: pointer;
  }
  
  button:hover {
    background: #fff;
    color: #4610C0;
    border: 1px solid #4610C0;
  }
`;


function MyPage(props) {
  const [matchList, setMatchList] = useState([]);
  const [popup, setPopup] = useState(false);
  const loginUser = useSelector(getLoginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getMatchList = async () => {
      const result = await axios.get(`${process.env.REACT_APP_ADDRESS}/myPage/matchList`, { withCredentials: true });
      setMatchList(result.data.data);
    };
    getMatchList();
  }, []);

  const handleLogout = async () => {
    const result = await axios.post(`${process.env.REACT_APP_ADDRESS}/user/logout`, {}, { withCredentials:true });
    console.log(result.data);
    if (result.data.flag) {
      alert(result.data.message);
      dispatch(getLoginUserInfo(null));
      dispatch(getAllCalendarInfo(null));
      navigate('/');
    }
  }
  
  const handlePopup = (id) => {
    console.log(matchList);
    const result = matchList.filter(match => id == match._id)
    console.log(result);
    if (result) {
      setPopup(!popup)
    }
  };

  const handlClose = () => {
    setPopup(false);
  };

  console.log(loginUser.news.postId);
  return (
    <MyPageArea>
      <div className='myPageHeader'>내 정보</div>
      <hr/>

      <div className='bigDiv'>
        <h4>내 경기 일정</h4>
        <MyMatchList>
          {matchList.map((match) => 
            <MypageMatchItem 
              key={match._id}
              title={match.title}
              district={match.district}
              joinPersonnel={match.joinPersonnel}
              joinMember={match.joinMember}
              game={match.game}
              selectDate={match.selectDate}
              postId={match.postId}
              lo={loginUser.news.postId == match.postId ? 'red' : ''}
            />
          )}
        </MyMatchList>

      </div>

      <div className='signArea'>
        <button onClick={() => {handleLogout()}}>로그아웃</button>
      </div>
    </MyPageArea>
  );
}

export default MyPage;