import React from 'react';
import styled from 'styled-components';
import CommunityListItem from './CommunityListItem';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { getAllUserCommunityList, userCommunityList } from '../features/communityListSlice/communityListSlice';
import { useNavigate } from 'react-router-dom';

const CommunityListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 70px;
`;
const CommunityInsertBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 888px;
  right: 0;
  bottom: 77px;
  margin: 0 auto;
  background-color: #eee;
  box-shadow: 1px 1px 1px 1px gray;
  width: 53px;
  height: 53px;
  font-size: 32px;
  border-radius: 30px;
  border: none;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #4610C0;
    color: #fff;
    box-shadow: 1px 1px 1px 1px #000;
  }
`;


function CommunityList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3000/userCummunityList')
    .then((response) => {
      dispatch(getAllUserCommunityList(response.data))
    })
  }, [])

  const communityInsert = useSelector(userCommunityList);
  return (
    <CommunityListWrapper>
      {communityInsert.map((CommunityInsertMap) => {
        return <CommunityListItem
          key={CommunityInsertMap.id}
          id={CommunityInsertMap.id}
          title={CommunityInsertMap.title}
          content={CommunityInsertMap.content}
          imagePath={CommunityInsertMap.imagePath}
        />
      })}
      <CommunityInsertBtn
        onClick={() => {navigate('/CommunityInsert')}}
      >+</CommunityInsertBtn>
    </CommunityListWrapper>
  );
}

export default CommunityList;