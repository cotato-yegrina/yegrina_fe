import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Question from "./pages/Question";
import MyPage from "./pages/MyPage";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import Main from "./pages/Splash";
import Wrong from "./pages/Result/Wrong";
import CharacterResult from "./pages/Result/CharacterResult";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/character" element={<CharacterResult />} />
        <Route path="/wrong/:id" element={<Wrong />} />
      </Routes>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'YiSunShinRegular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ChosunSm';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.1/ChosunSm.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  *{
    box-sizing: border-box;
  }

  *::selection{
    background-color: #fff;
    color: black;
  }

  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'YiSunShinRegular';
  }
`;

export default App;
