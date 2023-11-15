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
`;

function PostDetail(props) {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const selectPost = useSelector(selectedPost);
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/zziimm/db-user/userPostList/${userId}`)
        console.log(response.data);
        dispatch(getSelectPost(response.data))
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserId();
  }, []);

  console.log(selectPost);
  return (
    <PostDetailWrapper>
      <div>{userId}입니다</div>
      
    </PostDetailWrapper>
  );
}

export default PostDetail;