import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

// TODO 3초간 스플래시 후 메인

const Main = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  });
  const onClickStart = () => {
    window.location.href = "/home";
  };
  return (
    <Section>
      {splash ? (
        <DimBox>
          <h2>
            여러분은 애국을 하고 계신가요? <br />
            대한민국에 대해 얼마나 알고 계시나요?
          </h2>
        </DimBox>
      ) : (
        <AfterSplashBox splash={splash}>
          <DivideBox>
            <TextBox>
              <h2>"예그리나"</h2>
              <p>
                예(옛)+그린(그리워하다)+아(아이, 사람)를 합친 말로, ’사랑하는
                우리 사이’라는 뜻을 담았다.
                <br />
                <br />
                <br />
                <br />
                그대는 평소에 우리 나라를 얼마나 사랑하나.
                <br /> 얼마나 사랑한다고 말할 수 있나. <br />
                <br />
                ‘예그리나’의 우리나라 퀴즈를 통해
                <br /> 우리 나라를 얼마나 사랑하는지 알 수 있다.
                <br />
                <br /> 퀴즈를 풀고 우리나라를 빛낸 위인들을 모아보아라.
              </p>
              <OutterLine>
                <button onClick={onClickStart}>위인 모으러 가기</button>
              </OutterLine>
            </TextBox>
            <img
              src="https://velog.velcdn.com/images/ea_st_ring/post/4f5dcc1c-1a01-431d-baf8-4dd8c61d8a24/image.png"
              alt="man"
            />
          </DivideBox>
        </AfterSplashBox>
      )}
      <Logo>예그리나</Logo>
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

const DimBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    line-height: 42px;
    margin-top: 24px;
  }
  animation: dim-out 6s ease-in;
  @keyframes dim-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const AfterSplashBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: white;
  margin-top: 100px;
  animation: dim-in 2s ease-in;
  @keyframes dim-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  text-align:center;
  align-items: center;
  position: relative;
  z-index: 999;
  p {
    line-height: 24px;
    font-size: 18px;
  }
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #000;
  position: absolute;
  top: 20px;
  transition: all 3s ease-in;
  animation: logo-after-splash 6s ease-in;
  img {
    margin-right: 12px;
  }
  @keyframes logo-after-splash {
    0% {
      top: 250px;
      transform: scale(2);
    }
    50% {
      top: 250px;
      transform: scale(2);
    }
    100% {
      transform: translateY(0px);
      transform: scale(1);
    }
  }
`;

// const LogoImg = styled.img`
//   position: absolute;
//   top: 38px;
//   left: 635px;
//   animation: dim-in 7s ease-in;
//   @keyframes dim-in {
//     0% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

const OutterLine = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
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

export default Main;
