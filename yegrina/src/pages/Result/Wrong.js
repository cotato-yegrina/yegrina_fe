import React, { useState } from "react";
import { styled } from "styled-components";
import Dummy from "../Question/Dummy.json";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Wrong = () => {
  const questions = Dummy.questions;
  const navigate = useNavigate();
  const location = useLocation();
  // const total = location.state?.total;
  // const gender = location.state?.gender;
  const onClickBack = () => {
    navigate(-1);
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
        <Contents>
          <Title>문제 {1}.</Title>
          <Divider />
          <QuestionTitle>{questions[0].question}</QuestionTitle>
          <Choice>
            {questions[0].choices.map((choice, index) => (
              <p key={index}>
                {index + 1}. {choice}
              </p>
            ))}
          </Choice>
          <AnswerSection>
            <QuestionTitle>정답</QuestionTitle>
            <AnswerBox>
              <div>틀렷음 ㅋㅋ</div>
            </AnswerBox>
          </AnswerSection>
        </Contents>
        <Footer>
          <OutterLine>
            <button onClick={onClickBack}>채점표</button>
          </OutterLine>
        </Footer>
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
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/e0e9bd4a-0313-4a3b-8ed6-d53333f01427/image.png");
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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  width: 400px;
  height: 400px;
`;
const Title = styled.h1`
  font-size: 28px;
`;

const Divider = styled.div`
  width: 400px;
  height: 2px;
  margin-top: 12px;
  background-color: #d0d0d0;
`;

const QuestionTitle = styled.h2`
  font-size: 16px;
  margin-top: 24px;
  font-family: "ChosunSm";
  font-weight: 400;
`;

const Choice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "ChosunSm";
  margin-top: 0px;
  p {
    margin-bottom: 0;
    letter-spacing: 0.5px;
  }
  line-height: 24px;
`;

const AnswerSection = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
  font-family: "ChosunSm";
`;

const Footer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

const AnswerBox = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 35px;
    border-radius: 24px;
    border: 1px solid #f85858;
    background: #fff;
    color: #b50000;
  }
`;

const OutterLine = styled.div`
  width: 100px;
  height: 35px;
  border: 1px solid #efb9b5;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 95px;
    height: 30px;
    background: #efb9b5;
    border: none;
    border-radius: 25px;
    font-family: "YiSunShinRegular";
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Wrong;
