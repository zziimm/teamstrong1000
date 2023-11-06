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
  line-height: 100px;
`;

const NavListTest = [
  {
    id:1,
    img: img1
  },
  {
    id:2,
    img: img2
  },
  {
    id:3,
    img: img3
  },
  {
    id:4,
    img: img4
  },
]

function NavList(props) {
  return (
    <NavListWrapper>
      {NavListTest.map((NavListTestMap) => {
        return <NavListItem 
          id={NavListTestMap.id}
          img={NavListTestMap.img}
        />
      })}
    </NavListWrapper>
  );
}

export default NavList;