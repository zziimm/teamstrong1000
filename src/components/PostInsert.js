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
import axios from 'axios';

const PostInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  flex-direction: column;
  span {
    color: red;
  }
  .선택 {
    font-size: 12px;
    color: gray;
  }
  * {
    border-radius: 7px;
  }
`;
const TitleContentDiv = styled.div`
  width: 95%;
  height: 350px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  .title {
    width: 90%;
    height: 45px;
    margin-bottom: 15px;
  }
  .content {
    width: 90%;
    height: 190px;
  }
  label {
    position: relative;
    right: 185px;
    margin-bottom: 8px;
  }
`;
const DistrictDateDiv = styled.div`
  width: 95%;
  height: 80px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .district {
    height: 35px;
    margin-right: 25px;
  }
  .date {
    height: 35px;
  }
`;
const GenderJoinPersonnelGameDiv = styled.div`
  width: 95%;
  height: 80px;
  background-color: aliceblue;
  display: flex;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  .gender {
    height: 35px;
    margin-right: 25px;
  }
  .joinpersonnel {
    height: 35px;
    margin-right: 25px;
  }
  .game {
    height: 35px;
  }
`;

function PostInsert(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('')
  const [district, setDistrict] = useState('');
  const [selectDate, setSelectDate] = useState(new Date().toISOString().slice(0, 16))
  const [gender, setGender] = useState('남')
  const [joinPersonnel, setJoinPersonnel] = useState('2')
  const [game, setGame] = useState('단식')
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const titleChange = (e) => setTitle(e.target.value)
  const contentChange = (e) => setContent(e.target.value)
  const districtChange = (e) => setDistrict(e.target.value)
  const selectDateChange = (e) => setSelectDate(e.target.value)
  const genderChange = (e) => setGender(e.target.value)
  const joinPersonnelChange = (e) => setJoinPersonnel(e.target.value)
  const gameChange = (e) => setGame(e.target.value)
  
  // 게시글: 타이틀, 날짜, 지역, 참여인원, 경기방식, 작성자
  const postInput = {
    title: title,
    selectDate: selectDate,
    district: district,
    joinPersonnel: joinPersonnel,
    game: game,
  }
  const handlePushPost = () => {
    axios.post(`http://localhost:3000/userPostList`, postInput)
    alert('매칭 등록이 완료되었습니다!')
    navigate('/')
  };
  return (
    <PostInsertWrapper>
      <TitleContentDiv>
        <label htmlFor='1'>제목 입력<span>*</span></label>
        <input
          className='title'
          id='1'
          type='text'
          placeholder='제목을 입력하세요.'
          value={title}
          onChange={titleChange}
          />

        <label htmlFor='2'>내용 입력<span>*</span></label>
        <textarea 
          className='content'
          placeholder='내용을 입력하세요.'
          id='2'
          value={content}
          onChange={contentChange}
        />
      </TitleContentDiv>

      <DistrictDateDiv>
        <label htmlFor='3'>장소<span>*</span> : &nbsp;</label>
        <select
          className='district'
          id='3'
          value={district}
          onChange={districtChange}
        >
          <option value={'1'}>서울</option>
          <option value={'2'}>경기</option>
          <option value={'3'}>인천</option>
        </select>

        <label htmlFor='4'>날짜/시간<span>*</span> : &nbsp;</label>
        <input
          className='date'
          id='4'
          type='date'
          value={selectDate}
          onChange={selectDateChange}
        />
      </DistrictDateDiv>

      <GenderJoinPersonnelGameDiv>
        <label htmlFor='5'>성별<span className='선택'>(선택)</span> : &nbsp;</label>
        <select
          className='gender'
          id='5'
          value={gender}
          onChange={genderChange}
        >
          <option value={'남'}>남</option>
          <option value={'여'}>여</option>
        </select>

        <label htmlFor='6'>참여 인원<span>*</span> : &nbsp;</label>
        <select
            className='joinpersonnel'
            id='6'
            value={joinPersonnel}
            onChange={joinPersonnelChange}
          >
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
          <option value={'6'}>6</option>
          <option value={'7'}>7</option>
          <option value={'8'}>8</option>
        </select>

        <label htmlFor='7'>경기 방식<span>*</span> : &nbsp;</label>
        <select
            className='game'
            id='7'
            value={game}
            onChange={gameChange}
          >
            <option value={'단식'}>단식</option>
            <option value={'복식'}>복식</option>
        </select>
      </GenderJoinPersonnelGameDiv>

      <Stack gap={2} className="col-md-5 mx-auto">
        <Button
          variant="secondary"
          onClick={handlePushPost}
        //   onClick={() => {dispatch(getAllInsert({
        //   title:title,
        //   content:content,
        //   selectDate:selectDate,
        //   gender:gender,
        //   joinPersonnel:joinPersonnel,
        //   game:game
        // }))}}
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