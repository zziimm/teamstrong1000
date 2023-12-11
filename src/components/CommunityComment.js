import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CommunityCommentListItem from './CommunityCommentListItem';
import axios from 'axios';
import { useEffect } from 'react';

const CommunityCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
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
  overflow-y: scroll;
`;
const CommunityCommentIsert = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: #fff;
    height: 40px;
    flex: 1;
    margin-right: 5px;
    border-radius: 7px;
    border: none;
  }
  button {
    background-color: #FF5959;
    outline: none;
    height: 40px;
    width: 80px;
    border: none;
    border-radius: 7px;
  }
`;
function CommunityComment(props) {
  const [addComment, setAddComment] = useState('');
  const [addCommentE, setAddCommentE] = useState([]);
  
  useEffect(() => {
    const getComments = async () => {  try {
      const comments = await axios.get('http://localhost:8088/community/communityComment');
      setAddCommentE(comments.data.comments)
    } catch (err) {
      console.error(err);
    }};
    getComments();

  }, []);
  console.log(addCommentE); //  댓글 DB 객체
  console.log(addComment); // 댓글 입력값
  
  const changeAddComment = (e) => setAddComment(e.target.value);
  const handleAddComment = async () => {
    await axios.post(`http://localhost:8088/community/communityComment`, {addComment})
    }
    return (
      <CommunityCommentWrapper>
      <CommunityCommentList>
        {addCommentE.map((addCommentMap) => {
          return <CommunityCommentListItem
            key={addCommentMap.id}
            // content={addCommentMap.content}
            text={addCommentMap.text}
          />
        })}
      </CommunityCommentList>


      <CommunityCommentIsert /* onSubmit={(e) => {handleAddComment(); e.preventDefault()}} */>
        <input
          type='text'
          name='content'
          value={addComment}
          onChange={changeAddComment}
        />
        <button
          type='submit'
          onClick={() => {handleAddComment()}}
          >
            게시
          </button>
      </CommunityCommentIsert>
    </CommunityCommentWrapper>
  );
}

export default CommunityComment;