import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../features/useinfo/userInfoSlice';

const Area = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  padding: 20px ;
  line-height: 20px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 23px;
  font-weight: bold;

  & + & {
    margin-top: 10px;
  }

  .alert {
    color: red;
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
  const { title, district, joinPersonnel, joinMember, game, selectDate, postId, lo, check } = props
  const [popup, setPopup] = useState(false);
  const [hotNews, setHotNews] = useState(false);
  const [newsCheck, setNewsCheck] = useState(check);
  const loginUser = useSelector(getLoginUser);
  
  const handlePopup = () => {
    if (lo === 'red') {
      return setHotNews(true)
    }
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
    if (game === "단식") {
      await withOutMe.forEach(member => axios.post(`${process.env.REACT_APP_ADDRESS}/myPage/winAlert`, { member, postId, game }, { withCredentials:true }));
      alert('결과기록 요청을 보냈습니다!');
    } else {
      const winMemberGet = prompt('함께 승리한 팀원의 아이디를 적어주세요!', '');
      const winMember = joinMember.filter(member => member == winMemberGet)[0];


      if (winMember != winMemberGet) {
        alert('정확한 아이디를 입력해주세요!');
      } else {
        await withOutMe.forEach(member => axios.post(`${process.env.REACT_APP_ADDRESS}/myPage/winAlert`, { member, postId, game, winMember }, { withCredentials:true }));
        alert('결과기록 요청을 보냈습니다!');
      }

    }

  };

  const confirmBtn = async () => {
    const result = await axios.post(`${process.env.REACT_APP_ADDRESS}/myPage/matchResult`, { postId }, { withCredentials: true });
    if (result.data.readyFlag) {
      alert(result.data.message);
      setNewsCheck(check);
    } 
    if (result.data.flag) {
      alert(result.data.message);
      setNewsCheck(check);
    }
  };
  // 핫뉴스 받은 유저의 뉴스값 날리고(postId)
  // 해당 게시글 삭제시키거
  // 마이 매치에서 해당 경기 삭제 
  // 요청보낸 유저(승리버튼)는 1승 뉴스값 받은 유저는 1패 추가
  
  return (
    <Area>
      <div onClick={handlePopup}>
        <p>{title}</p>
        <p>{district}</p>
        <p>{joinPersonnel}</p>
        <p>{game}</p>
        <p>{selectDate}</p>
        {lo === 'red' 
          ? <p className='alert'>상대의 결과기록 요청이 있습니다!</p>
          : ''
        }
      </div>
      { hotNews ?
        <div className='popupBox'>
          {newsCheck === 1
            ? <button>확인완료</button>
            : <button onClick={confirmBtn}>패배</button>
          }
          
        </div>
        : popup 
        ?
        <div className='popupBox'>
          <button onClick={handleWinBtn}>승리</button>
          <button onClick={handleCancelBtn}>불참하기</button>
          <button onClick={handlClose}>닫기</button>
        </div>
        : ''
      }
    </Area>
  );
}

export default MypageMatchItem;