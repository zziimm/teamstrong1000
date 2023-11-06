import React, { useState } from 'react';
import { styled } from "styled-components";
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';

const SignArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


function SignUp(props) {
  const [inputUserId, setInputUserId] = useState('');
  const [inputUserPass, setInputUserPass] = useState('');
  const [inputUserPassCheck, setInputUserPassCheck] = useState('');
  const [inputUserNick, setInputUserNick] = useState('');

  const dispatch = useDispatch();
  // const navigate = useNavigate();



  const handleInputUserId = (e) => {
    setInputUserId(e.target.value)
  };
  const handleInputUserPass = (e) => setInputUserPass(e.target.value);
  const handleInputUserPassCheck = (e) => {
    setInputUserPassCheck(e.target.value);
  }

  const handleInputUserNick = (e) => setInputUserNick(e.target.value);
  const handlePushUserInfo = () => {
    dispatch(getUserInfo({
      id: inputUserId,
      pass: inputUserPass,
      nick: inputUserNick,
    }))
  };


  return (
    <SignArea>
      아이디 <input type='text' value={inputUserId} onChange={handleInputUserId}/>
      비밀번호 <input type='password' value={inputUserPass} onChange={handleInputUserPass}/>
      비밀번호 확인<input type='password' value={inputUserPassCheck} onChange={handleInputUserPassCheck}/>
      {inputUserPass === inputUserPassCheck
      ? <span>입력해주세요</span>
      : <span>일치하지 않습니다.</span>
      }
      닉네임 <input type='text' value={inputUserNick} onChange={handleInputUserNick}/>
      <button onClick={handlePushUserInfo}>
        가입하기
      </button>
    </SignArea>
  );
}

export default SignUp;