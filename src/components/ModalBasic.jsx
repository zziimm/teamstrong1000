import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllUserPostList, postInsertList, searchList, userPostList } from '../features/postListSlice/postListInsertSlice';
import PostListItem from './PostListItem';


// 검색창 스타일
const SearchModalWrapper = styled.div`
  background-color: #370e97;
  width: 530px;
  min-height: 30%;
  max-height: 75%;
  border-radius: 20px;
  padding: 0.1px;
  position: absolute;
  top: 70px;
  opacity: 0.95;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 1px 1px 1px 1px #000;
  .aaa {
    background-color: #370e97;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
    div {
      background-color: #e9e9e9;
      border: 1px solid #000;
    }
  }
`
const Box = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`
const InputBox = styled.input`
  background: none;
  border: 1px solid #fff;
  border-radius: 30px;
  outline: none;
  flex: 1;
  padding: 12px;
  color: #fff;
`
const Xbutton = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`

function ModalBasic(props) {
  const { setModalOpen } = props;
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const searchList = useSelector(userPostList);
  const fit = searchList.filter((item) =>
    item.title.toLowerCase().includes(searchValue) ||
    item.game.toLowerCase().includes(searchValue) ||
    item.id.toLowerCase().includes(searchValue) ||
    item.district.toLowerCase().includes(searchValue)
  );

  useEffect(() => {
    axios.get('http://localhost:3000/userPostList')
      .then((response) => {
        dispatch(getAllUserPostList(response.data))
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  const closeModal = () => setModalOpen(false)
  const changeSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <SearchModalWrapper>
      <Box>
        <InputBox
          type="text"
          placeholder='검색어를 입력하세요'
          value={searchValue}
          onChange={changeSearch}
        />
        <style>{`::placeholder {color: #9B9B9B;}`}</style>
        <Xbutton onClick={closeModal}>취소</Xbutton>
      </Box>
      {<div className='aaa'>
        {searchValue ? fit.map((item) => {
          return <PostListItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            selectDate={item.selectDate}
            gender={item.gender}
            joinPersonnel={item.joinPersonnel}
            game={item.game}
            district={item.district}
          />
        }) : null}
      </div>}
    </SearchModalWrapper>
  );
}

export default ModalBasic;