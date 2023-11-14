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
const CommunityCommentList = styled.div`
  background-color: orange;
`;
const CommunityCommentIsert = styled.div`
  background-color: yellow;
`;
function CommunityComment(props) {
  return (
    <CommunityCommentWrapper>
      댓글창입니다!~~~ㅇㅇㅇㅇ내일 여기 끝내고 커뮤니티 인서트 만드러야징집집집집집집
      <CommunityCommentList>코맨트 리스트</CommunityCommentList>
      <CommunityCommentIsert>코맨트 인서트</CommunityCommentIsert>
    </CommunityCommentWrapper>
  );
}

export default CommunityComment;