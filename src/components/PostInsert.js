import React from 'react';
import styled from 'styled-components';

const PostInsertWrapper = styled.form`
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
    font-size: 24px;
  }
`;
function PostInsert(props) {
  return (
    <PostInsertWrapper>
      <input type='text' />
      <input type='text' />
      <input type='date' />
      <input type='text' placeholder='장소 api 되면 업데이트' /> {/* 장소 api 업데이트 */}
    </PostInsertWrapper>
  );
}

export default PostInsert;