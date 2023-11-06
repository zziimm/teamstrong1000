import React from 'react';
import styled from 'styled-components';

const PostListItemWrapper = styled.div`
  padding: 10px 0;
  border: 1px solid #000;
`;

function PostListItem(props) {
  return (
    <PostListItemWrapper key={props.id}>
      {props.text}
    </PostListItemWrapper>
  );
}

export default PostListItem;