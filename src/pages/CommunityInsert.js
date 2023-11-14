import React from 'react';
import styled from 'styled-components';

const CommunityInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 30px 55px;
  }
`;

function CommunityInsert(props) {
  return (
    <CommunityInsertWrapper>
      커뮤니티 게시글 인서트페이지입니다~~~
    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;