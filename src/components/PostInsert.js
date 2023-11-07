import React from 'react';
import styled from 'styled-components';

const PostInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  flex-flow: column;

  input {
    height: 100px;
    background-color: beige;
    margin-bottom: 30px;
    border: none;
  }
`;
function PostInsert(props) {
  return (
    <PostInsertWrapper>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </PostInsertWrapper>
  );
}

export default PostInsert;