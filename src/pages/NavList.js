import React from 'react';
import styled from 'styled-components';
import NavListItem from '../components/NavListItem';
import img1 from "../img/groups(1).png";
import img2 from "../img/map.png";
import img3 from "../img/rewarded_ads.png";
import img4 from "../img/forum.png";

const NavListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
:nth-child(1) {
    width: 86px;
    height: 88px;
    :nth-child(1) {
      width: 50px;
      height: 37px;
    }
  }
`;

const NavListTest = [
  {
    id:1,
    img: img1,
    text: '매칭 찾기'
  },
  {
    id:2,
    img: img2,
    text: '민턴장 찾기'
  },
  {
    id:3,
    img: img3,
    text: '대회 정보'
  },
  {
    id:4,
    img: img4,
    text: '커뮤니티'
  },
]

function NavList(props) {
  return (
    <NavListWrapper>
      {NavListTest.map((NavListTestMap) => {
        return <NavListItem 
          id={NavListTestMap.id}
          img={NavListTestMap.img}
          text={NavListTestMap.text}
        />
      })}
    </NavListWrapper>
  );
}

export default NavList;