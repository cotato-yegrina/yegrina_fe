import React from "react";
import { styled } from "styled-components";
import Dummy from "../Question/Dummy.json";

const Result = () => {
  const questions = Dummy.questions;
  const onClickNext = () => {
    window.location.href = "/result/character";
  };
  return (
    <Section>
      <Logo>
        
        예그리나
      </Logo>
      <Background>
        <Header>
          <div>일제 강점기</div>
        </Header>
        <Title>채점 결과</Title>
        <ResultBox>
          {/* 틀린 문제에는 onClick useNavigate로 값만 전달, Wrong에서 받기 */}
          {questions.map((question, index) => (
            <Choice key={index}>
              <Check src="https://velog.velcdn.com/images/ea_st_ring/post/e0d9f751-d051-435e-adcc-36230cd745e9/image.png" />
              <p>
                {index + 1}. &nbsp;&nbsp;&nbsp;&nbsp;{question.answer}
              </p>
            </Choice>
          ))}
        </ResultBox>
        <OutterLine>
          <button onClick={onClickNext}>위인 보러가기</button>
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
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/80f50988-e39e-41cb-b128-3bf64c5cf9a9/image.png");
  background-size: cover;
  width: 620px;
  height: 620px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
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

const Header = styled.div`
  position: relative;
  width: 95%;
  top: 12px;
  height: 24px;
  display: flex;
  justify-content: flex-start;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 4px 12px;
    height: 24px;
    border-radius: 15px;
    text-align: center;
    background-color: #ddd;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const ResultBox = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 32px 32px 0 0;
  img {
    position: relative;
    left: 30px;
  }
`;

const Check = styled.img`
  width: 45px;
  height: 45px;
`

const Choice = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
  }
`;

const OutterLine = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #efb9b5;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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

export default Result;
