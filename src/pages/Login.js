import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserInfo, getUserInfo, selectUserList } from '../features/useinfo/userInfoSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import KakaoLogin from '../components/KakaoLogin';
import logoImg from "../img/logo.png";

// kakao



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
  }
  button:hover {
    background: #fff;
    color: #4610C0;
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

const LogoImg = styled.img`
  margin-bottom: 20px;
`;



function Login(props) {
  const [inputUserId, setInputUserId] = useState('');
  const [inputUserPass, setInputUserPass] = useState('');
  const [loingBtn, setLoginBtn] = useState(false);
  const userInfo = useSelector(selectUserList);
  
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:3000/userInfo')
      .then((reponse) => {
        console.log(reponse.data);
        dispatch(getAllUserInfo(reponse.data))
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);


  const userId = userInfo.find(user => inputUserId === user.id);

  const handLogin = () => {
    if (inputUserId== '') {
      toast.error('아이디를 입력해주세요!');
      return
    } else if (inputUserPass === '') {
      toast.error('비밀번호를 입력해주세요!');
      return
    } else if (userId === undefined) {
      toast.error('회원가입되지 않은 ID 입니다!');
    } else if (userId.passwd !== inputUserPass) {
      toast.error('비밀번호가 다릅니다!');
      return
    } else {
      alert(`환영합니다! ${userId.nick}님!`);
      navigate('/')
    }
  };

  const navigate = useNavigate();


  const handleInputUserId = (e) => setInputUserId(e.target.value);
  const handleInputUserPass = (e) => setInputUserPass(e.target.value);




  return (
    <SignArea>
      <LogoImg src={logoImg}/>
      아이디<input type='text' value={inputUserId} onChange={handleInputUserId} />
      비밀번호<input type='password' value={inputUserPass} onChange={handleInputUserPass} />
      
      <button onClick={handLogin}>
        로그인
      </button>
      <button onClick={() => navigate('/signUp')}>
        회원가입
      </button>
      <KakaoLogin />



    </SignArea>
  );
}

export default Login;