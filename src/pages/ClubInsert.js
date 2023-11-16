import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from "../img/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 530px;
  margin: 0 auto;

  .logo {
    margin: 34px 0 34px 16px;
  }
  .search {
    margin: 34px 16px 34px 0;
  }
`;

const ClubInsertWrapper = styled.div`
  background-color: #fff;
  width: 530px;
  height: 100vh;
  color: #1c1b1f;

  h1 {
    font-size: 35px;
    font-weight: bold;
    margin: 0 0 30px 55px;
  }

  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const InputWrapper = styled.div`
  width: 490px;
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px ;


`;

const InputBox = styled.input`
  border: none;
  width: 100%;
  height: 47px;
  background-color: #f2f2f2;
  font-size: 16px;
  line-height: 47px;
  padding-left: 15px;
  border-radius: 7px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border: 2px solid #4610C0;
  }
`;

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .cancel {
    width: 95px;
    height: 30px;
    background: #ff5959;
  }
  .cancel:hover {
    background: #fff;
    color: #ff5959;
    border: 1px solid #ff5959;
  }

  button {
      width: 120px;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
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
      border: 1px solid #4610C0;
    }
`;

function ClubInsert(props) {
  const navigate = useNavigate();
  return (
      <ClubInsertWrapper>
        <HeaderWrapper>
          <div className='logo' href='#'><img src={logoImg} /></div>
        </HeaderWrapper>
        <h1>클럽 개설하기</h1>
        <InputWrapper>
          <h2>클럽명</h2>
          <InputBox />
          <h4>지역</h4>
          <InputBox />
          <h4>팀원</h4>
          <InputBox />
          <h4>추가 팀원</h4>
          <InputBox />
          <h4>추가 팀원</h4>
          <InputBox />
          <Buttonwrapper>
            <button className='cancel' onClick={() => navigate('/club')}>
              돌아가기
            </button>
            <button>
              개설하기
            </button>
          </Buttonwrapper>
        </InputWrapper>

      </ClubInsertWrapper>
  );
}

export default ClubInsert;