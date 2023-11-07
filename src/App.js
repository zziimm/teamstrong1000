import Header from "./pages/Header";
import NavList from "./pages/NavList";
import PostList from "./pages/PostList";
import { createGlobalStyle, styled } from "styled-components";

import { Route, Routes } from "react-router-dom";
import BottomMenu from "./pages/BottomMenu";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import imgBg from "./img/background_01.png";


const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
`;

const MainBg = styled.div`
  background-image: url(${imgBg});
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainBg>
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
