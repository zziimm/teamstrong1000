import React, { useState } from 'react';
import { styled } from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, pushUserInfo, selectUserList } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 530px;
  height: 100vh;
  gap: 10px;

  button {
    margin-top: 20px;
    border: none;
    background: #4610C0;
    color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #4610C0;
  }
  button:hover {
    background: #fff;
    color: #4610C0;
    border: 1px solid #4610C0;
  }
  button + button {
    margin: 10px 0;
  }

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    transition: 0.3s;
  }
  input:focus {
    outline: none;
    border: 1px solid #4610C0;
    background: #d8d1e8;
  }
`;


function SignUp(props) {
  const [inputUserId, setInputUserId] = useState('');
  const [inputUserPass, setInputUserPass] = useState('');
  const [inputUserPassCheck, setInputUserPassCheck] = useState('');
  const [inputUserNick, setInputUserNick] = useState('');
  const signUp = { id: inputUserId, passwd: inputUserPass, nick: inputUserNick }
  const navigate = useNavigate();
  const userId = useSelector(selectUserList);

  


  const handleInputUserId = (e) => {
    setInputUserId(e.target.value)
  };
  const handleInputUserPass = (e) => setInputUserPass(e.target.value);
  const handleInputUserPassCheck = (e) => {
    setInputUserPassCheck(e.target.value);
  }

  const handleInputUserNick = (e) => setInputUserNick(e.target.value);

  const handlePushUserInfo = (signUp) => {
    console.log(signUp);
    if (inputUserId === '') {
      alert('ID를 입력해주세요!')
    } else if (inputUserPass !== inputUserPassCheck) {
      alert('비밀번호가 일치하지 않습니다!')
    } else if (userId.find(id => id.id === inputUserId)) {
      alert('이미 가입된 아이디 입니다!')
    } else if (inputUserNick === '') {
      alert('닉네임을 입력해주세요!')
    } else if (userId.find(id => id.nick === inputUserNick)) {
      alert('이미 존재하는 닉네임입니다!')
    } else {
      axios.post(`http://localhost:3000/userInfo`, signUp)
      alert('가입을 환영합니다! 로그인해주세요!')
      navigate('/login')
    }
  };


  return (
    <SignArea>
      아이디 <input type='text' value={inputUserId} onChange={handleInputUserId}/>
      비밀번호 <input type='password' value={inputUserPass} onChange={handleInputUserPass}/>
      비밀번호 확인<input type='password' value={inputUserPassCheck} onChange={handleInputUserPassCheck}/>
      {
        !(inputUserPass !== '')
        ? <span></span>
        : inputUserPass === inputUserPassCheck
          ? <span>비밀번호가 일치합니다</span>
          : <span>비밀번호가 일치하지 않습니다.</span>
      }
      닉네임 <input type='text' value={inputUserNick} onChange={handleInputUserNick}/>
      <button onClick={() => handlePushUserInfo(signUp)}>
        가입하기
      </button>
    </SignArea>
  );
}

export default SignUp;