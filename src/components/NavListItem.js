import React from 'react';
import styled from 'styled-components';


function NavListItem(props) {
  const NavListItemWrapper = styled.div`
    width: 86px;
    height: 88px;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
    display: block;
    margin: 0 12px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
  & + & {    // 얘 왜 안되니?
  }
  .NavImg {
    width: 40px;
    height: 33px;
    margin-bottom: 4px;
}
  `;
  
  return (
    <NavListItemWrapper>
      <img src={props.img} className='NavImg'/>
      {props.text}
      
    </NavListItemWrapper>
  );
}

export default NavListItem;