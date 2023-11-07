import Header from "./pages/Header";
import NavList from "./pages/NavList";
import PostList from "./pages/PostList";
import { createGlobalStyle, styled } from "styled-components";
import { Reset } from "styled-reset";

import { Route, Routes } from "react-router-dom";
import BottomMenu from "./pages/BottomMenu";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import imgBg from "./img/background_01.png";
import imgBgTitle from "./img/background.title.png";


const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    overflow-y: hidden;
  }

  * {
    box-sizing: inherit;
  }
`;

const MainBg = styled.div`
  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainTitle = styled.div`
  background-image: url(${imgBgTitle});
  width: 442px;
  height: 515px;
  background-repeat: no-repeat;
  margin-right: 50px;
  margin-bottom: 333px;
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainBg>
        <MainTitle />
        <Routes>
          <Route path="/" element={<BottomMenu />}>
            <Route path="/" element={<MainPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signUp" element={<SignUp />}/>
          </Route>
        </Routes>
      </MainBg>
    </>
  );
}

export default App;
