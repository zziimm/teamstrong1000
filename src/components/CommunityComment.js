import React from 'react';
import styled from 'styled-components';

const CommunityCommentWrapper = styled.div`
  background-color: pink;
  box-sizing: border-box;
  width: 417px;
  height: 350px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: left;
  padding: 9px;
  box-shadow: 1px 1px 1px 1px #e9e9e9;
  cursor: pointer;
  &:hover {
    border: 1px solid #9b9b9b;
  }
  &:last-child {
    margin-bottom: 75px;
  }
& + & {
  margin-top: 18px;
}
`;

function CommunityComment(props) {
  return (
    <CommunityCommentWrapper>
      댓글창입니다!~~~
    </CommunityCommentWrapper>
  );
}

export default CommunityComment;