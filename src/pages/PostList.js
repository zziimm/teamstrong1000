import React from 'react';
import styled, { css } from 'styled-components';
import PostListItem from '../components/PostListItem';
import { BsArrowDownUp, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserList } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router';
import { getAllUserPostList, handleFilter, postInsertList, sortList, userPostList } from '../features/postListSlice/postListInsertSlice';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import DistrictModal from '../components/DistrictModal';
import { PulseLoader } from 'react-spinners';

const PostInsertBtn = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 492px;
  right: 0;
  bottom: 60px;
  margin: 0 auto;
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
  margin-bottom: 70px;
  width: 417px;
`;
const PostListBtn1 = styled.button`
  width: 113px;
  height: 24px;
  border-radius: 23px;
  background-color: #ff5959;
  color: #fff;
  margin: 22px 15px 0 0;
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
  margin: 22px 0 0 0;
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
  const [district, setDistrict] = useState(false);
  const [district2, setDistrict2] = useState(false);
  const [district3, setDistrict3] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleModal = () => {
    setShowModal(!showModal)
  };

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/userPostList')
    .then((response) => {
      dispatch(getAllUserPostList(response.data))
    })
    .catch((error) => {
      console.error(error);
    })
    setLoading(false);
  },[])
  
  const navigate = useNavigate();
  // const postInsert = useSelector(postInsertList);
  const postInsert = useSelector(userPostList);
  // console.log(postInsert.selectDate);

  // 필터
  const handleDistrict0 = () => {
    setDistrict(false)
    setDistrict2(false)
    setDistrict3(false)
  };
  const handleDistrict = () => {
    setDistrict(!district)
  };
  const handleDistrict2 = () => {
    setDistrict2(!district2)
  };
  const handleDistrict3 = () => {
    setDistrict3(!district3)
  };

  return (
    <PostListWrapper>
      <PostListBtn1 onClick={() => {dispatch(sortList())}}><BsArrowDownUp /> 일정 가까운 순</PostListBtn1>
      <PostListBtn2 $showModal={showModal} onClick={handleModal}>모든지역 <BsChevronDown /></PostListBtn2>
      {showModal && <DistrictModal postList={postInsert} district={district} district2={district2} district3={district3} handleDistrict0={handleDistrict0} handleDistrict={handleDistrict} handleDistrict2={handleDistrict2} handleDistrict3={handleDistrict3}/>}
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

      {!district && !district2 && !district3 && postInsert.map((postInsertMap) => {
        return <PostListItem
          key={postInsertMap.id}
          id={postInsertMap.id} 
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
          district={postInsertMap.district}
        />
      })}
      {district && postInsert.map((postInsertMap) => {
        return postInsertMap.district === '서울' && <PostListItem
          key={postInsertMap.id}
          id={postInsertMap.id} 
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
          district={postInsertMap.district}
        />
      })}
      {district2 && postInsert.map((postInsertMap) => {
        return postInsertMap.district === '경기' && <PostListItem
          key={postInsertMap.id}
          id={postInsertMap.id} 
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
          district={postInsertMap.district}
        />
      })}
      {district3 && postInsert.map((postInsertMap) => {
        return postInsertMap.district === '인천' && <PostListItem
          key={postInsertMap.id}
          id={postInsertMap.id} 
          title={postInsertMap.title}
          content={postInsertMap.content}
          selectDate={postInsertMap.selectDate}
          gender={postInsertMap.gender}
          joinPersonnel={postInsertMap.joinPersonnel}
          game={postInsertMap.game}
          district={postInsertMap.district}
        />
      })}


      {loading &&
        <PulseLoader
          color="#4610C0"
          margin={25}
          size={25}
        />
      }

      <PostInsertBtn
        onClick={() => navigate('/postInsert')}
      >
        게시글 추가
      </PostInsertBtn>


    </PostListWrapper>
  );
}

export default PostList;