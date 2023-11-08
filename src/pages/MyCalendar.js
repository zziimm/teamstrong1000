import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import styled from "styled-components";
import { useState } from "react";

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
  /* thead tr th.fc-col-header:first-child,
  thead tr th.fc-col-header:last-child {
    background-color: #5E0AFD;
  } */
`;

const InputArea = styled.div`
  padding: 50px;
  background: #4610C0;
  border-radius: 15px;
`;
const InputH4 = styled.p`
  color: #fff;
`;
const InputAreaDetail = styled.div`
`;

function MyCalendar(props) {
  const [todo, setTodo] = useState();
  const [inputStartDate, setInputStartDate] = useState();
  const [inputEndDate, setInputEndDate] = useState();


  const handletodo = (e) => {
    setTodo(e.target.value)
  };
  const handleinputStartDate = (e) => {
    setInputStartDate(e.target.value)
  };
  const handleInputEndDate = (e) => {
    setInputEndDate(e.target.value)
  };

  const pushTodo = () => {

  };




  function accessToGeo (position) {
    const positionObj = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    console.log(positionObj)
  }

  function askForLocation () {
    navigator.geolocation.getCurrentPosition(accessToGeo)
  }
  askForLocation();

  return (
    <>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dayMaxEvents={true}
          events={[
            {title:{todo}, start:{inputStartDate}, end:{inputEndDate}}
          ]}
          dateClick={() => {
            alert('클릭')
          }}
          height={'550px'}
          width={'500px'}
          editable={true}
        />
        <InputArea>
          <InputAreaDetail>
            <InputH4>
              할일
            </InputH4>
            <input value={todo} onChange={handletodo}/>
          </InputAreaDetail>
          <InputAreaDetail>
            <InputH4>
              시작할 날짜
            </InputH4>
            <input value={inputStartDate} onChange={handleinputStartDate}/>
          </InputAreaDetail>
          <InputAreaDetail>
            <InputH4>
              끝낼 날짜
            </InputH4>
            <input value={inputEndDate} onChange={handleInputEndDate}/>
          </InputAreaDetail>

        </InputArea>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;

// class MyCalendar extends Component {
//   render() {
//       return (
//         <div className="App">
//           <FullCalendar 
//             defaultView="dayGridMonth" 
//             plugins={[ dayGridPlugin ]}
//           />
//         // </div>
//       );
//   }
// }
// export default MyCalendar;