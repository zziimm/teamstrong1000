import React from 'react';
import styled from 'styled-components';
import PostListItem from '../components/PostListItem';
import { BsArrowDownUp, BsChevronDown } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { selectUserList } from '../features/useinfo/userInfoSlice';
import PostInsert from '../components/PostInsert';
import { useNavigate } from 'react-router';

const PostInsertBtn = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 492px;
  right: 0;
  margin: 0 auto;
  bottom: 60px;
  justify-content: space-around;
  background-color: purple;
  width: 530px;
  height: 55px;
.InsertBtn {
  width: 300px;
  height: 50px;
  background-color: beige;
}
`;
const PostListWrapper = styled.div`
  margin: 0 auto;
  width: 417px;
`;
const PostListBtn1 = styled.button`
  width: 113px;
  height: 24px;
  border-radius: 23px;
  background-color: #ff5959;
  color: #fff;
  margin: 22px 15px 22px 0;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;
const PostListBtn2 = styled.button`
  width: 80px;
  height: 24px;
  border-radius: 23px;
  background-color: #ff5959;
  color: #fff;
  margin: 22px 0;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;


function PostList(props) {
  const navigate = useNavigate();
  const userInfo = useSelector(selectUserList);
  return (
    <PostListWrapper>
      <PostListBtn1><BsArrowDownUp /> 일정 가까운 순</PostListBtn1>
      <PostListBtn2>모든 지역 <BsChevronDown /></PostListBtn2>
      {userInfo.map((postTestMap) => {
        return <PostListItem
          key={postTestMap.id}
          id={postTestMap.id}
          nick={postTestMap.nick}
        />
      })}
      <PostInsertBtn>
      <button
        className='InsertBtn'
        onClick={() => navigate('/postInsert')}
      >
        리스트인서트버튼
      </button>
      </PostInsertBtn>
    </PostListWrapper>
  );
}

export default PostList;