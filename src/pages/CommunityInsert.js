import React from 'react';
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCommunityInsert } from '../features/communityListSlice/communityListSlice';

const CommunityInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

function CommunityInsert(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [insertTitle, setInsertTitle] = useState('');
  const [insertContent, setInsertContent] = useState('');
  const [insertImgUp, setInsertImgUp] = useState();

  const changeTitle = (e) => setInsertTitle(e.target.value)
  const changeContent = (e) => setInsertContent(e.target.value)

  return (
    <CommunityInsertWrapper>
      {<div className='titleContentDiv'>
        {<input
          className='title'
          type='text'
          placeholder='제목입력'
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
          value={insertImgUp}
        />}
      </div>}

      <Stack gap={2} className="col-md-5 mx-auto">
        <Button
          variant="secondary"
          onClick={() => {
            dispatch(getAllCommunityInsert({
              insertTitle:insertTitle,
              insertContent:insertContent
            }))}}
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