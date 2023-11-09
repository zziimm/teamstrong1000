import React from 'react';
import styled, { css } from 'styled-components';
import PostListItem from '../components/PostListItem';
import { BsArrowDownUp, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserList } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router';
import { getAllUserPostList, postInsertList, userPostList } from '../features/postListSlice/postListInsertSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import DistrictModal from '../components/DistrictModal';

const PostInsertBtn = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 492px;
  right: 0;
  margin: 0 auto;
  bottom: 60px;
  justify-content: space-around;
  background-color: #eee;
  box-shadow: 1px 1px 1px 1px gray;
  width: 200px;
  height: 35px;
  border-radius: 30px;
  border: none;
  line-height: 35px;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #4610C0;
    color: #fff;
    box-shadow: 1px 1px 1px 1px #000;
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
  &:hover {
    background-color: #4610C0;
  }
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
  &:hover {
    background-color: #4610C0;
  }
  ${props => props.$showModal && css`
    background-color: #4610C0;
  `}
`;


function PostList(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal)
  };

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/zziimm/db-user/userPostList')
    .then((response) => {
      dispatch(getAllUserPostList(response.data))
    })
    .catch((error) => {
      console.error(error);
    })
  })
  
  const navigate = useNavigate();
  // const postInsert = useSelector(postInsertList);
  const postInsert = useSelector(userPostList);
  // console.log(postInsert.selectDate);

  // 필터
  const handleFilterBtn = () => {

  };

  return (
    <PostListWrapper>
      <PostListBtn1><BsArrowDownUp /> 일정 가까운 순</PostListBtn1>
      <PostListBtn2 $showModal={showModal} onClick={handleModal}>모든지역 <BsChevronDown /></PostListBtn2>
      {showModal && <DistrictModal postList={postInsert} />}
      {/* {postInsert.map((postInsertMap) => {  
        return <PostListItem
          key={postInsertMap.title}  
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
        />
      })} */}
      {postInsert.map((postInsertMap) => {
        return <PostListItem
          key={postInsertMap.id}
          id={postInsertMap.id} 
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
        />
      })}

      <PostInsertBtn
        onClick={() => navigate('/postInsert')}
      >
        게시글 추가
      </PostInsertBtn>
    </PostListWrapper>
  );
}

export default PostList;