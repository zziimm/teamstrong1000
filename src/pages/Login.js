import React, { useState } from 'react';
import { styled } from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, selectUserList } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';

const SignArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


function Login(props) {
  const [inputUserId, setInputUserId] = useState('');
  const [inputUserPass, setInputUserPass] = useState('');
  const [loingBtn, setLoginBtn] = useState(false);
  // const userList= useSelector(selectUserList);
  // console.log(userList);
  
  const navigate = useNavigate();


  const handleInputUserId = (e) => setInputUserId(e.target.value);
  const handleInputUserPass = (e) => setInputUserPass(e.target.value);


  if (!inputUserId === '' && inputUserPass === '') {
    setLoginBtn(true)
  }



  return (
    <SignArea>
      아이디<input type='text' value={inputUserId} onChange={handleInputUserId} />
      비밀번호<input type='password' value={inputUserPass} onChange={handleInputUserPass} />
      <button disabled={loingBtn ? true : false}>
        로그인
      </button>
      <button onClick={() => navigate('/signUp')}>
        회원가입
      </button>
    </SignArea>
  );
}

export default Login;