import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import styled from "styled-components";
import { useState } from "react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const CalendarWrapper = styled.div`
  width: 530px;
  height: 100vh;
  background: #fff;
  
  
  .fc-event {
    background-color: #4610C0;
    border: none;
    border-radius: 15px;
    padding: 1px 5px;
    font-size: 12px;
    font-weight: bold;
  }
  .fc-button {
    background-color: #4610C0;
    border: none;
    border-radius: 10px;
  }
  .fc-button:hover {
    background-color: #5E0AFD;
  }
  .fc-header-toolbar {
    margin-top: 24px;
  }
  .fc-toolbar-title {
    background-color: #4610C0;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
  }
  .fc-col-header {
    background-color: #4610C0;
    color: #fff;
  }
  `;

const InputArea = styled.div`
  padding: 50px;
  background: #4610C0;
  border-radius: 15px;
  position: relative;

  button {
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 15px;
    padding: 5px 13px;
    background: #FFF;
    font-weight: bold;
    position: absolute;
    right: 50px;
    transition: 0.3s;
  }
  button:hover {
    background: #FF5959;
    border: 2px solid #FF5959;
    color: #FFF;
  }
`;
const InputH4 = styled.p`
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
`;
const InputAreaDetail = styled.div`

  & + & {
    margin-top: 10px;
  }
  input {
    color: black;
    /* transition: 0.3; */
    background: #FFF;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    transition: 0.3s;
  }
  input:focus {
    color: #FFF;
    background: #8169b8;
  }

`;

function MyCalendar(props) {
  const [todo, setTodo] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [list, setList] = useState([]);


  const handletodo = (e) => {
    setTodo(e.target.value)
  };
  const handleinputStartDate = (e) => {
    setInputStartDate(e.target.value)
  };
  const handleInputEndDate = (e) => {
    // if (inputStartDate > inputEndDate) {
    //   alert('정확한 날짜를 입력해주세요!')
    //   return
    // } else {
    // }
    setInputEndDate(e.target.value)
  };


  const handlePush = () => {
    const copyList = [...list]
    copyList.push({title: todo, start: inputStartDate, end: inputEndDate});
    
    setList(copyList)
    setTodo('')
    setInputStartDate('')
    setInputEndDate('')
  }


  return (
    <>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          dayMaxEvents={true}
          events={list}
          dateClick={() => {
            alert('클릭')
          }} 
          eventClick={() => {
            
          }}
          height={'550px'}
          width={'500px'}
          editable={true}
          locale='ko'
          googleCalendarApiKey="AIzaSyBKjGhLK_Xjl8DgqkIMLiWIzGdPrivNWM4"
          eventSources={[
            {
              googleCalendarId : "ko.south_korea#holiday@group.v.calendar.google.com", 
              color: 'red', 
              textColor: 'white'
            }
          ]}

        />
        <InputArea>
          <InputAreaDetail>
            <InputH4>
              추가할 일정
            </InputH4>
            <input value={todo} onChange={handletodo}/>
          </InputAreaDetail>
          <InputAreaDetail>
            <InputH4>
              시작할 날짜
            </InputH4>
            <input type="date" value={inputStartDate} onChange={handleinputStartDate}/>
          </InputAreaDetail>
          <InputAreaDetail>
            <InputH4>
              끝낼 날짜
            </InputH4>
            <input type="date" value={inputEndDate} onChange={handleInputEndDate}/>
          </InputAreaDetail>
          <button onClick={handlePush}>
            일정 추가하기
          </button>
        </InputArea>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;