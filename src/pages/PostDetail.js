import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSelectPost, selectedPost } from '../features/postListSlice/postListInsertSlice';

const PostDetailWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;


.top-box{
  width: 490px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px ;
}

.date {
  color: #4610C0;
  font-weight: 800;
  margin-bottom: 15px;
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
  margin: 0 auto;
  background-color: #36009C;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px ;
}

`;

function PostDetail(props) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const selectPost = useSelector(selectedPost);
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/userPostList/${userId}`)
        console.log(response.data);
        dispatch(getSelectPost(response.data))
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserId();
  }, []);

  const {title, content, district, game, gender, id, joinPersonnel, selectDate} = selectPost

  console.log(selectPost);
  return (
    <PostDetailWrapper>
      <div className='top-box'>
        <div className='date'>{selectDate}</div>
        <div className='title'>{title}</div>
        {/* <div>innerBox */}
          <div className='innerBoxTitle'>장소</div>
          <div className='innerBoxContent'>{district}</div>
          <div className='innerBoxTitle'>일시</div>
          <div className='innerBoxContent'>{selectDate}</div>
          <div className='innerBoxTitle'>경기 방식</div>
          <div className='innerBoxContent'>{game}</div>
          <div className='innerBoxTitle'>참여 인원</div>
          <div className='innerBoxContent'>{joinPersonnel}</div>
          <div className='innerBoxTitle'>일정 소개</div>
          <div className='innerBoxContent'>{content}</div>
        {/* </div>innerBox */}
      </div>
      
      <div className='bottom-box'>

      </div>
    </PostDetailWrapper>
  );
}

export default PostDetail;