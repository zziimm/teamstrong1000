import './App.css';
import Search_modal from './components/Search_modal';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-size: 16px;
    color: #1C1B1F;
    background-color: #fff;
    box-sizing: border-box;
  }

  .box {
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 7px;
  }
`

// main color: #4610C0
// sub color: #FF5959

function App() {
  return (
      <Search_modal/>
  );
}

export default App;
