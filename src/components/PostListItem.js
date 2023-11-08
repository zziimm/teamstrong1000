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
    <PostListItemWrapper key={props.id}>
      {props.nick}
    </PostListItemWrapper>
  );
}

export default PostListItem;