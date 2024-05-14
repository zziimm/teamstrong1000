import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getSelectPost, selectedPost } from '../features/postListSlice/postListInsertSlice';
import { getLoginUser, getMyCalendarInfo } from '../features/useinfo/userInfoSlice';
import { collection, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { dbst } from "../firebase.config";
import { selectLoginUserFirebase } from '../features/useinfo/userInfoSlice';

const PostDetailWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;


.top-box{
  width: 490px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px ;

}

.date {
  color: #4610C0;
  font-weight: 800;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
.updateBox {
  display: flex;
  color: #FF5959;
  gap: 15px;
  cursor: pointer;
}

.title {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 30px;
}

.innerBoxTitle {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.innerBoxContent {
  width: 100%;
  height: 47px;
  background-color: #f2f2f2;
  font-size: 16px;
  line-height: 47px;
  padding-left: 15px;
  border-radius: 7px;
  margin-bottom: 20px;
}

.bottom-box{
  width: 490px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px ;
  margin-bottom: 20px;
  border: 1px solid #e9e9e9;

}

.title2 {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 30px;
  color: #36009C;
}

.innerBox {
  display: flex;
  align-items: center;
  width: 50%;
}

.innerBoxTitle2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #36009C;
}

.innerBoxContent2 {
  margin-left: 10px;
  flex: 1;
  height: 30px;
  background-color: #B197FF;
  font-size: 16px;
  line-height: 30px;
  padding-left: 15px;
  border-radius: 7px;
  margin-bottom: 20px;
  color: #fff;
}

.innerBigBox {
  display: flex;
  gap: 20px;
}

`;


const Button = styled.button`
  padding: 0.1px;
  background-color: #4610C0;
  width: 450px;
  height: 47px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #fff;
  transition: 0.3s;
  margin-left: 37px;
  font-weight: 700;
  
  &.isJoined {
    padding: 0.1px;
    background-color: #FF5959;
    width: 450px;
    height: 47px;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 18px;
    color: #fff;
    margin-left: 37px;
    font-weight: 700;
    &:hover {
      background: #ff3636;
      box-shadow: 0 0 10px rgba(0,0,0,0.3); 
    }
  }

  &:hover {
    background: #36009C;
    box-shadow: 0 0 10px rgba(0,0,0,0.3); 
  }
  
  ${props => props.$joinGame && css`
    background: #FF5959;

    &:hover {
      background: #ff3636;
      box-shadow: 0 0 10px rgba(0,0,0,0.3); 
    }
  `}
`;




function PostDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  // const selectPost = useSelector(selectedPost);
  const [selectPost, setSelectPost] = useState([]);
  const [calendarInfo, setCalendarInfo] = useState([]);
  const [joinGame, setJoinGame] = useState(false);
  const [isFullMember, setIsFullMember] = useState(false);
  const loginUser = useSelector(selectLoginUserFirebase);

  useEffect(() => {
    const loadDetail = async () => {
      const docRef = doc(dbst, "listings", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const postData = docSnap.data()
        setSelectPost(postData)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      // const unsubscriber = onSnapshot(docRef, (snapshot) => {
      //   const item = snapshot.data();
      //   return item;
      // });
    }
    loadDetail();
  }, []);

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_ADDRESS}/matchingPost/${postId}`)
  //       dispatch(getSelectPost(response.data.data))
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserId();
  // }, []);

  // useEffect(() => {
  //   const calendarInfo = async () => {
  //     try {
  //       const result = await axios.get(`${process.env.REACT_APP_ADDRESS}/myCalendar`, { withCredentials: true });
  //       serCalendarInfo(result.data.data)
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   calendarInfo();
  // }, []);


  if (!selectPost) {
    return null;
  }

  const { selectDate, title, district, game, joinPersonnel, content, id, gender, joinMember} = selectPost;


  const pushDate = (title, selectDate) => {
    const joinMemberCount = joinMember.length
    if (calendarInfo?.find(gameName => gameName.title === title)) {
      alert('이미 참가한 게임입니다!')
      return;
    } else if (joinMemberCount == joinPersonnel) {
      alert('모집 인원이 가득 찼습니다.');
      return;
    } else {
      axios.post(`
        ${process.env.REACT_APP_ADDRESS}/myCalendar/insert/${postId}`, { title, district, game, joinPersonnel, joinMember, id, start: selectDate }, { withCredentials: true });
      setJoinGame(true)
      alert('참가하기 완료! 일정이 추가되었습니다!')
      // navigate('/')
    }
  };

  const deleteBtn = async () => {
    try {
      const resulte = await axios.delete(`${process.env.REACT_APP_ADDRESS}/deleteMatching/${postId}`);
      if (resulte.data.flag) {
        alert(resulte.data.message);
        navigate('/');
      } else {
        new Error(resulte.data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(joinMember);

  return (
    <PostDetailWrapper>
      <div className='top-box'> 
        <div className='date'>
          {selectDate}
          <div className='date updateBox'>
            { loginUser?.email == id?.email 
              ? <div onClick={() => {navigate(`/editMatchPost/${postId}`)}} >수정</div> 
              : ''
            }
            { loginUser?.email == id?.email 
              ? <div onClick={() => {deleteBtn()}}>삭제</div> 
              : ''
            }
          </div>
        </div>
        <div className='title'>{title}</div>
        {/* <div>innerBox */}
          <div className='innerBoxTitle'>장소</div>
          <div className='innerBoxContent'>{district}</div>
          <div className='innerBoxTitle'>일시</div>
          <div className='innerBoxContent'>{selectDate}</div>
          <div className='innerBoxTitle'>경기 방식</div>
          <div className='innerBoxContent'>{game}</div>
          <div className='innerBoxTitle'>참여 인원</div>
          {/* <div className='innerBoxContent'>
            {joinPersonnel}
            ({joinMember.map(member => <span> {member}, </span>)})
          </div> */}
          <div className='innerBoxTitle'>일정 소개</div>
          <div className='innerBoxContent'>{content}</div>
        {/* {/* </div>innerBox */}
      </div>

      
      <div className='bottom-box'>
        <div className='title2'>주최자 정보</div>
        <div className='innerBigBox'>
          <div className='innerBox'>
            <div className='innerBoxTitle2'>닉네임</div>
            <div className='innerBoxContent2'>{id?.email}</div>
          </div>
          <div className='innerBox'>
            <div className='innerBoxTitle2'>성별</div>
            <div className='innerBoxContent2'>{gender}</div>
          </div>
        </div>
      </div>

      { calendarInfo?.find(gameName => gameName.title === title)
        ? <Button className='isJoined' disabled={true}>신청되었습니다.</Button>
        : <Button $joinGame={joinGame} disabled={joinGame} onClick={() => {pushDate(title, selectDate, district, game, joinPersonnel, content, id, gender, joinMember)}}>{joinGame ? "신청되었습니다." : "참여하기"}</Button>
      }

    </PostDetailWrapper>
  );
}

export default PostDetail;