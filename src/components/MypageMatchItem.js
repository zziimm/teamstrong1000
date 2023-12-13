import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../features/useinfo/userInfoSlice';

const Area = styled.div`
  width: 100%;
  border: 2px solid #4610C0;
  border-radius: 7px;
  padding: 20px ;
  line-height: 20px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  .popupBox {
    cursor: default;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    border-radius: 7px;
    position: absolute;
    top: 0;
    left: 0;
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
`

function MypageMatchItem(props) {
  console.log(props);
  const { title, district, joinPersonnel, joinMember, game, selectDate, postId, lo } = props
  const [popup, setPopup] = useState(false);
  const [hotNews, setHotNews] = useState(false);
  const loginUser = useSelector(getLoginUser);
  
  const handlePopup = () => {
    console.log(joinMember);
    console.log(postId);
    setPopup(true);
  };
  const handlClose = () => {
    setPopup(false);
  };
  const handleCancelBtn = async () => {
    const result = await axios.post(`${process.env.REACT_APP_ADDRESS}/myPage/cancelMatch`, { postId }, { withCredentials: true });
    if (!result.data.flag) {
      alert(result.data.message);
    }
    alert(result.data.message);
    setPopup(false)
  };

  const handleWinBtn = async () => {
    const withOutMe = joinMember.filter(member => member !== loginUser.userId);
    await withOutMe.forEach(member => axios.post(`${process.env.REACT_APP_ADDRESS}/myPage/winAlert`, { member, postId }, { withCredentials:true }));
    
  };

  // console.log(loginUser.news.postId);
  // const hotNewsAlert = loginUser.news.filter(news => news.postId == postId);
  // if (loginUser.news.postId) {
  //   setHotNews(true)
  // }
  
  return (
    <Area>
      <div onClick={handlePopup}>
        <p>{title}</p>
        <p>{district}</p>
        <p>{joinPersonnel}</p>
        <p>{game}</p>
        <p>{selectDate}</p>
        {lo === 'red' 
          ? <p>핫뉴스 있음</p>
          : ''
        }
      </div>
      { popup 
        ?
        <div className='popupBox'>
          <button onClick={handleWinBtn}>승리</button>
          <button>패배</button>
          <button onClick={handleCancelBtn}>불참하기</button>
          <button onClick={handlClose}>닫기</button>
        </div>
        : ''
      }
    </Area>
  );
}

export default MypageMatchItem;