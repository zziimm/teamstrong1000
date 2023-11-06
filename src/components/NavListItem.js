import React from 'react';
import styled from 'styled-components';


function NavListItem(props) {
  const NavListItemWrapper = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid gray;
  `;
  return (
    <NavListItemWrapper>
      <img src={props.img}/>
    </NavListItemWrapper>
  );
}

export default NavListItem;