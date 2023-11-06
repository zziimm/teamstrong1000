import React from 'react';
import styled from 'styled-components';
import PostListItem from '../components/PostListItem';

const PostListWrapper = styled.div`
`;

const postTest  = [
  {
    id: '1',
    img: 'http://via.placeholder.com/50.jpg/',
    text: '게시글1'
  },
  {
    id: '2',
    img: 'http://via.placeholder.com/50.jpg/',
    text: '게시글2'
  },
  {
    id: '3',
    img: 'http://via.placeholder.com/50.jpg/',
    text: '게시글3'
  }
]

function PostList(props) {
  return (
    <PostListWrapper>
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