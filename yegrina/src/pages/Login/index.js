import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../app/Slices/loginSlice";
import { styled } from "styled-components";
// import api from "../../api/api";

const Login = () => {
  const dispatch = useDispatch();
  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleInput = (e, setValue) => {
    setValue(e.target.value);
  };

  // async function getLogin() {
  //   await api
  //     .post(`/login`, {
  //       id: { idInput },
  //       password: { passwordInput },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       // dispatch(setAccessToken(response.data.token));
  //       // localStorage.setItem("accessToken", response.data.token);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  const onClickLogin = () => {
    // getLogin();
    window.location.href = "/";
  };

  return (
    <Section>
      <AfterSplashBox>
        <DivideBox>
          <TextBox>
            <h2>로그인 / 회원가입</h2>
            <input
              placeholder="아이디"
              onChange={(e) => handleInput(e, setIdInput)}
            ></input>
            <input
              placeholder="비밀번호"
              onChange={(e) => handleInput(e, setPasswordInput)}
            ></input>
            <OutterLine>
              <button onClick={onClickLogin}>로그인</button>
            </OutterLine>
            <span>
              <p>예그리나가 처음이신가요? </p> 회원가입
            </span>
          </TextBox>
        </DivideBox>
      </AfterSplashBox>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/76c0f39a-1627-4da7-8a25-a293a3fcfa08/image.png");
  background-size: cover;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* padding: 20px 320px 0px 320px; */
`;

const AfterSplashBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: white;
  margin-top: 100px;
`;

const DivideBox = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 580px;
  img {
    height: 550px;
    position: absolute;
    left: 120px;
    top: 160px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 999;
  p {
    line-height: 24px;
    font-size: 18px;
  }
  input {
    width: 300px;
    height: 42px;
    border: none;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    margin-top: 16px;
    &::placeholder {
      font-family: "YiSunShinRegular";
    }
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    p {
      cursor: default;
      color: #a4a2a1;
    }
  }
`;

const OutterLine = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  &:hover {
    border: 1px solid #efb9b5;
  }
  button {
    width: 295px;
    height: 45px;
    background-color: #d9d9d9;
    border: none;
    border-radius: 25px;
    font-family: "YiSunShinRegular";
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #efb9b5;
    }
  }
`;

export default Login;
