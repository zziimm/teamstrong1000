import React from 'react';
import styled from 'styled-components';
import CommunityListItem from './CommunityListItem';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { getAllUserCommunityList, userCommunityList } from '../features/communityListSlice/communityListSlice';

const CommunityListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

function CommunityList(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/zziimm/db-user/userCummunityList')
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
    </CommunityListWrapper>
  );
}

export default CommunityList;