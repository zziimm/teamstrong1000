import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCalendarInfo, getLoginUserInfo } from '../features/useinfo/userInfoSlice';

const MyPageArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 530px;
  height: 100vh;
  gap: 10px;

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
`;


function MyPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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


  return (
    <MyPageArea>
      <button onClick={() => {handleLogout()}}>로그아웃</button>
    </MyPageArea>
  );
}

export default MyPage;