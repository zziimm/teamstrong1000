import React from 'react';
import styled from 'styled-components';
import PostListItem from '../components/PostListItem';
import { BsArrowDownUp, BsChevronDown } from "react-icons/bs";

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

const postTest  = [
  {
    id: '1',
    text: '게시글1'
  },
  {
    id: '2',
    text: '게시글2'
  },
  {
    id: '3',
    text: '게시글3'
  }
]

function PostList(props) {
  return (
    <PostListWrapper>
      <PostListBtn1><BsArrowDownUp /> 일정 가까운 순</PostListBtn1>
      <PostListBtn2>모든 지역 <BsChevronDown /></PostListBtn2>
      {postTest.map((postTestMap) => {
        return <PostListItem
          key={postTestMap.id}
          id={postTestMap.id}
          img={postTestMap.img}
          text={postTestMap.text}
        />
      })}
    </PostListWrapper>
  );
}

export default PostList;