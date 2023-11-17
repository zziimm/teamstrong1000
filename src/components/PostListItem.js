import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostDetail from '../pages/PostDetail';

const PostListItemWrapper = styled.div`
  box-sizing: border-box;
  width: 417px;
  height: 93px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: left;
  padding: 9px;
  margin: 18px 0;
  cursor: pointer;
  &:hover {
    border: 1px solid #9b9b9b;
  }

.title {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
.selectDate {
  font-size: 14px;
  color: #9b9b9b;
  display: block;
  margin-bottom: 3px;
}
/* .gender {
  font-size: 14px;
  color: #9b9b9b;
} */
.district {
  font-size: 14px;
  color: #9b9b9b;
}
.joinPersonnel {
  font-size: 14px;
  color: #9b9b9b;
}
.game {
  font-size: 14px;
  color: #9b9b9b;
}
.id {
  font-size: 12px;
  display: flex;
  justify-content: end;
  margin-top: 5px;
}
`;

function PostListItem(props) {
  const navigate = useNavigate()

  return (
    <PostListItemWrapper 
      key={props.title} 
      onClick={() => navigate(`/PostDetail/${props.id}`)}
      >
        <span className='title'>{props.title} <br/></span>
        <span className='selectDate'>날짜: {props.selectDate} <br/></span>
        <span className='district'>지역: {props.district} |&nbsp;</span>
        <span className='joinPersonnel'>참여 인원: {props.joinPersonnel} |&nbsp;</span>
        <span className='game'>경기 방식: {props.game} &emsp; <br/></span>
        <span className='id'>작성자: {props.id}</span>
        
      {/* 성별: {props.gender} &emsp;
      참여 인원: {props.joinPersonnel} &emsp;
      경기 방식: {props.game} &emsp; <br/>
      작성자: {props.id} */}
    </PostListItemWrapper>
  );
}

export default PostListItem;