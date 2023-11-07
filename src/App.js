import Header from "./pages/Header";
import NavList from "./pages/NavList";
import PostList from "./pages/PostList";
import { createGlobalStyle } from "styled-components";

import { Route, Routes } from "react-router-dom";
import BottomMenu from "./pages/BottomMenu";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
`;

function App() {
  return (
    <>
      <Header />
      <NavList />
      <PostList />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<BottomMenu />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
