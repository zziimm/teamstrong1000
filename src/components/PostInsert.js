import React, { useState } from 'react';
import styled from 'styled-components';

const PostInsertWrapper = styled.form`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  flex-flow: column;

  input, select {
    height: 100px;
    background-color: beige;
    margin-bottom: 30px;
    border: none;
    font-size: 20px;
  }
`;


function PostInsert(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [gender, setGender] = useState('')
  
  // const handleA = (e) => {
  //   const {name, value} = e.target;   코드 줄이기

  const titleChange = (e) => setTitle(e.target.value)
  const contentChange = (e) => setContent(e.target.value)
  const genderChange = (e) => setGender(e.target.value)
  
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

      <label htmlFor='4'>성별</label>
      <select
        id='4'
        value={gender}
        onChange={genderChange}
      >
        <option value={'남'}>남</option>
        <option value={'여'}>여</option>
      </select>

      <label htmlFor='5'>참여 인원</label>
      <select
          id='5'
        >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>

      <label htmlFor='6'>경기 방식</label>
      <select
          id='6'
        >
          <option>단식</option>
          <option>복식</option>
      </select>
    </PostInsertWrapper>
  );
}

export default PostInsert;