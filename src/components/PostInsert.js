import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllInsert } from '../features/postListSlice/postListInsertSlice';

import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import { getDate } from 'date-fns';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navigate, useNavigate } from 'react-router-dom';

const PostInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  flex-flow: column;

  input, select {
    height: 55px;
    background-color: beige;
    margin-bottom: 30px;
    border: none;
    font-size: 20px;
  }


  .datePicker {   // 라이브러리 css
  display: flex;
  align-items: center;
  border: 1px solid GRAY;
  border-radius: 15px;
  background-color: black;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  color: WHITE;
  text-align: center;
  padding-right: 14px;
  outline: none;

  &:focus {
    border: 2px solid ORANGE;
  }
}
  .calenderWrapper {
  background-color: orange;
}
.react-datepicker__time-list-item {
  color: orange;
  
  &:hover {
    color: purple;
    background-color: aqua;
  }
}
`;


const inputStyle = styled.div`
  display: flex;
`;


function PostInsert(props) {
  const [title, setTitle] = useState('제목입력');
  const [content, setContent] = useState('내용입력')
  const [selectDate, setSelectDate] = useState(new Date().toISOString().slice(0, 16))
  const [gender, setGender] = useState('남')
  const [joinPersonnel, setJoinPersonnel] = useState('1')
  const [game, setGame] = useState('단식')
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
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
        placeholder='맵 api 생기면 수정~~~~~~~~~~~~~~~'
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

      <Stack gap={2} className="col-md-5 mx-auto">
        <Button
          variant="secondary"
          onClick={() => {dispatch(getAllInsert({
          title:title,
          content:content,
          selectDate:selectDate,
          gender:gender,
          joinPersonnel:joinPersonnel,
          game:game
        }))}}
          >Save changes</Button>
        <Button 
          variant="outline-secondary"
          onClick={() => navigate('/')}
        >Cancel</Button>
      </Stack>

                  {/* <DatePicker 
                  className='datePicker'
                  calendarClassName='calenderWrapper'
                  dayClassName={(d) => (d.getDate() === !selectedDate.getDate() ? '.selectedDay' : '.unselectedDay')}
                  dateFormat="yyyy/MM/dd h:mm aa" // 날짜 형태
                  showTimeSelect // 시간 나오게 하기
                  timeFormat="HH:mm" //시간 포맷 
                  timeIntervals={30} // 15분 단위로 선택 가능한 box가 나옴
                  timeCaption="time"
                  shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                  minDate={new Date()} // minDate 이전 날짜 선택 불가
                  maxDate={new Date('2050-01-01')} // maxDate 이후 날짜 선택 불가
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  /> */}

    </PostInsertWrapper>
  );
}

export default PostInsert;