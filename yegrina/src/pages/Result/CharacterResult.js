import React, { useState } from "react";
import { styled } from "styled-components";
import Confetti from "../../effects/Confetti";
import { useNavigate } from "react-router-dom";

const BeforeResult = () => {
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  const [url, setUrl] = useState(
    "https://velog.velcdn.com/images/ea_st_ring/post/6176d8db-7b0c-4516-a9e7-93ece8cfaf11/image.png"
  );
  const onClickResult = () => {
    setResult(true);
    setUrl(
      "https://velog.velcdn.com/images/ea_st_ring/post/a269b687-88b9-40eb-af7b-3cf65fdd287e/image.png"
    );
  };

  const goHome = () => {
    navigate("/home",
    {
      state: {
        url: url,
      },
    }
    );
  };
  return (
    <Section>
      {result && <Confetti />}
      <Logo>예그리나</Logo>
      <Background>
        <TextBox>
          {!result ? (
            <p>
              수고하셨습니다! <br /> 결과를 보러 가볼까요?
            </p>
          ) : (
            <p>유관순 열사를 얻었습니다!<br />&nbsp;</p>
          )}
        </TextBox>
        <Sillouette>
          <img src={url} alt="sillouete" />
        </Sillouette>
        <OutterLine>
          <button onClick={!result ? onClickResult : goHome}>
            {!result ? "확인하기" : "다른 위인 모으러 가기"}
          </button>
        </OutterLine>
      </Background>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/7ad63cb4-6c65-4efc-842a-77e047ad6cfd/image.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 20px 320px 0px 320px;
`;

const Background = styled.div`
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/3bda2caa-3918-431e-bdb1-fa9da76a9e61/image.png");
  background-size: cover;
  width: 620px;
  height: 620px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Sillouette = styled.div`
  width: 250px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    animation: dim-in 2s ease-in;
    @keyframes dim-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  margin: 16px 0 16px 0;
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutterLine = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #efb9b5;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  button {
    width: 295px;
    height: 45px;
    background: #efb9b5;
    border: none;
    border-radius: 40px;
    font-family: "YiSunShinRegular";
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default BeforeResult;
