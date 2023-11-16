import React, { useRef } from 'react';
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCommunityInsert } from '../features/communityListSlice/communityListSlice';
import axios from 'axios';

const CommunityInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  .titleContentDiv {
    width: 95%;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }
  .title {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
  }
  .content {
    width: 100%;
    height: 700px;
    margin-bottom: 10px;
  }
  .imgup {
    width: 100%;
  }
  button:last-child {
    margin-bottom: 90px;
  }
`;

function CommunityInsert(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [insertTitle, setInsertTitle] = useState('');
  const [insertContent, setInsertContent] = useState('');
  const [insertImgUp, setInsertImgUp] = useState([]);


  const changeTitle = (e) => setInsertTitle(e.target.value)
  const changeContent = (e) => setInsertContent(e.target.value)
  const changeImgUp = (e) => setInsertImgUp(e.target.value)

  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setInsertImgUp(reader.result);
    };
  };

  const communityInput = {
    id: insertTitle,
    content: insertContent,
    imagePath: insertImgUp
  }
  const handlePushCommunity = () => {
    axios.post(`http://localhost:3000/userCummunityList`, communityInput)
    alert('게시글이 작성되었습니다!')
    navigate('/community')
  };

  return (
    <CommunityInsertWrapper>
      {<div className='titleContentDiv'>
        {<input
          className='title'
          type='text'
          placeholder='아이디입력'
          value={insertTitle}
          onChange={changeTitle}
          />}
        {<textarea 
          className='content'
          placeholder='내용 입력'
          value={insertContent}
          onChange={changeContent}
        />}
        {<input 
          className='imgup'
          type='file'
          accept='image/*'
          ref={imgRef}
          onChange={saveImgFile}
        />}
      </div>}

      <Stack gap={2} className="col-md-5 mx-auto">
        <Button
          variant="secondary"
          onClick={handlePushCommunity}
          // onClick={() => {
          //   dispatch(getAllCommunityInsert({
          //     title:insertTitle,
          //     content:insertContent,
          //     imagePath:insertImgUp
          //   })); 
          //   navigate('/community')}}
          >Save changes</Button>
        <Button 
          variant="outline-secondary"
          onClick={() => navigate('/community')}
        >Cancel</Button>
      </Stack>



    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;