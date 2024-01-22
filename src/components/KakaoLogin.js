import React from 'react';
import KakaoImg from "../img/kakao_login_medium_narrow.png";
import styled from 'styled-components';

const KakaoBtn = styled.div`
  cursor: pointer;
`;
function KakaoLogin(props) {




  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`
  const handleLogin = ()=>{
    window.location.href = kakaoURL
  }
  const code = new URL(window.location.href).searchParams.get("code");

  
  return (
    <KakaoBtn onClick={handleLogin}>
      <img src={KakaoImg} />
    </KakaoBtn>
  );
}

export default KakaoLogin;