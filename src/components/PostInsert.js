import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserList } from '../features/useinfo/userInfoSlice';
import { getAllInsert } from '../features/postListSlice/postListInsertSlice';

const PostInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  flex-flow: column;

  input, select {
    height: 70px;
    background-color: beige;
    margin-bottom: 30px;
    border: none;
    font-size: 20px;
  }
`;
const inputStyle = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
  background: #adb5bd;
  }
`;


function PostInsert(props) {
  const [title, setTitle] = useState('제목입력');
  const [content, setContent] = useState('내용입력')
  const [selectDate, setSelectDate] = useState(new Date().toISOString().slice(0, 16))
  const [gender, setGender] = useState('남')
  const [joinPersonnel, setJoinPersonnel] = useState('1')
  const [game, setGame] = useState('단식')
  
  const dispatch = useDispatch()

  
  const titleChange = (e) => setTitle(e.target.value)
  const contentChange = (e) => setContent(e.target.value)
  const selectDateChange = (e) => setSelectDate(e.target.value)
  const genderChange = (e) => setGender(e.target.value)
  const joinPersonnelChange = (e) => setJoinPersonnel(e.target.value)
  const gameChange = (e) => setGame(e.target.value)

  
  return (
    <PostInsertWrapper>
      <label htmlFor='1'>제목</label>
      <input
        id='1'
        type='text'
        value={title}
        onChange={titleChange}
        />

      <label htmlFor='2'>내용</label>
      <input 
        id='2'
        type='text'
        value={content}
        onChange={contentChange}
      />

      <label htmlFor='3'>장소</label>   {/* 장소 api */}
      <input 
        id='3'
        type='text'
      />
      <label htmlFor='4'>날짜/시간</label>
      <input
        id='4'
        type='datetime-local'
        value={selectDate}
        onChange={selectDateChange}
      />

      <label htmlFor='5'>성별</label>
      <select
        id='5'
        value={gender}
        onChange={genderChange}
      >
        <option value={'남'}>남</option>
        <option value={'여'}>여</option>
      </select>

      <label htmlFor='6'>참여 인원</label>
      <select
          id='6'
          value={joinPersonnel}
          onChange={joinPersonnelChange}
        >
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
        <option value={'4'}>4</option>
        <option value={'5'}>5</option>
        <option value={'6'}>6</option>
        <option value={'7'}>7</option>
        <option value={'8'}>8</option>
      </select>

      <label htmlFor='7'>경기 방식</label>
      <select
          id='7'
          value={game}
          onChange={gameChange}
        >
          <option value={'단식'}>단식</option>
          <option value={'복식'}>복식</option>
      </select>

      <StyledButton
        onClick={() => {dispatch(getAllInsert({
          title:title,
          content:content,
          selectDate:selectDate,
          gender:gender,
          joinPersonnel:joinPersonnel,
          game:game
        }))}}
      >submit</StyledButton>
    </PostInsertWrapper>
  );
}

export default PostInsert;