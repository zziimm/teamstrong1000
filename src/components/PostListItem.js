import React from 'react';
import styled from 'styled-components';

const PostListItemWrapper = styled.div`
  box-sizing: border-box;
  width: 417px;
  height: 93px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: left;
  padding: 9px;
  cursor: pointer;

& + & {
  margin-top: 18px;
}
`;

function PostListItem(props) {
  return (
    <PostListItemWrapper key={props.title}>
      {props.title} <br/>
      {/* {props.content} */}
      날짜: {props.selectDate} &emsp;
      성별: {props.gender} &emsp;
      참여 인원: {props.joinPersonnel} &emsp;
      경기 방식: {props.game} &emsp; <br/>
      작성자: {props.id}
    </PostListItemWrapper>
  );
}

export default PostListItem;