import React from 'react';
import styled from 'styled-components';

const CommunityListItemWrapper = styled.div`
  box-sizing: border-box;
  width: 417px;
  /* height: 450px; */
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: left;
  padding: 9px;
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
img {
  width: 200px;
  height: 200px;
}
.div-between {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.div-center {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.id {
  color: #000;
  font-size: 18px;
}
.date {
  color: #9b9b9b;
  font-size: 14px;
}
.title {
  color: #000;
  font-size: 18px;
  margin-left: 10px;  
}
.경과일 {
  color: red;
}
`;

function CommunityListItem(props) {
  
  const aaa = new Date(2023, 10, 7)

  function elapsedTime(date) {
    const start = new Date(date);
    const end = new Date();
  
    const diff = (end - start) / 1000;
    
    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ];
  
    for (const value of times) {  
      const betweenTime = Math.floor(diff / value.milliSeconds);
  
      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return '방금 전';
  }
  console.log(elapsedTime(aaa));
  



  return (
    <CommunityListItemWrapper>
      {<div className='div-between'>
        <span className='id'>{props.id}</span>
        <span className='date'>{aaa.getFullYear()}/{(aaa.getMonth() + 1)}/{aaa.getDate()}</span>
      </div>}

      {/* {<span className='title'>{props.title}</span>} <br/> */}

      {<div className='div-center'>
        <img src={props.imagePath}/>
      </div>}

      {<div className='div-between'>
        <span>{props.content}...</span>
        <span className='경과일'>{elapsedTime(aaa)}</span>
      </div>}
    </CommunityListItemWrapper>
  );
}

export default CommunityListItem;