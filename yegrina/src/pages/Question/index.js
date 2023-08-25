import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [nextQuestion, setNextQuestion] = useState({});
  const [selected, setSelected] = useState(0);
  const questions = location.state.questions;

  const question = {
    index: questions[id - 1].index,
    quizId: questions[id - 1].quizId,
    category: questions[id - 1].category,
    content: questions[id - 1].content,
    score: questions[id - 1].score,
    choices: questions[id - 1].choices,
    answer: questions[id - 1].answer,
  };

  useEffect(() => {
    const tmpQuestion = {
      index: questions[id - 1].index,
      quizId: questions[id - 1].quizId,
      category: questions[id - 1].category,
      content: questions[id - 1].content,
      score: questions[id - 1].score,
      choices: questions[id - 1].choices,
      answer: questions[id - 1].answer,
    };
    setSelected(tmpQuestion.answer);
    setNextQuestion(tmpQuestion);
  }, [id, questions]); // id 혹은 question 변경 시에만 동작

  const onClickChoice = (index) => {
    setSelected(index);
  };
  const onClickNumber = (index) => {
    let tmpQuestions = questions;
    tmpQuestions[id - 1].answer = selected;
    navigate(`/question/${index}`, { state: { questions: tmpQuestions } });
  };
  const onClickNext = () => {
    let tmpQuestions = questions;
    tmpQuestions[id - 1].answer = selected;
    navigate(`/question/${Number(id) + 1}`, {
      state: { questions: tmpQuestions },
    });
  };

  const onClickResult = () => {
    let tmpQuestions = questions;
    tmpQuestions[id - 1].answer = selected;
    let unAnsweredArray = [];
    const result = tmpQuestions.filter((el) => el.answer === 0);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      unAnsweredArray.push(result[i].index);
    }
    if (result.length === 0) {
      navigate(`/result`, { state: { questions: tmpQuestions } });
    } else {
      unAnsweredArray = unAnsweredArray.join(", ");
      alert(` ${unAnsweredArray} 번을 풀어주세요!`);
    }
  };
  return (
    <Section>
      <Logo>예그리나</Logo>
      <Background>
        <Header>
          <div>일제 강점기</div>
        </Header>
        <Contents>
          <Title>문제 {id}.</Title>
          <Divider />
          <QuestionTitle>{question.content}</QuestionTitle>
          <Choice>
            {question.choices.map((choice, index) => (
              <p>
                {index + 1}. {choice.content}
              </p>
            ))}
          </Choice>
          <AnswerSection>
            <QuestionTitle>정답</QuestionTitle>
            <ChoiceBox>
              <ChoiceButton
                index={1}
                selected={selected}
                onClick={() => onClickChoice(1)}
              >
                1
              </ChoiceButton>
              <ChoiceButton
                index={2}
                selected={selected}
                onClick={() => onClickChoice(2)}
              >
                2
              </ChoiceButton>
              <ChoiceButton
                index={3}
                selected={selected}
                onClick={() => onClickChoice(3)}
              >
                3
              </ChoiceButton>
              <ChoiceButton
                index={4}
                selected={selected}
                onClick={() => onClickChoice(4)}
              >
                4
              </ChoiceButton>
            </ChoiceBox>
          </AnswerSection>
        </Contents>
        <Footer>
          {questions.map((question) => (
            <QuestionLink
              index={question.index}
              id={id}
              onClick={() => {
                onClickNumber(question.index);
              }}
            >
              <p>{question.index}</p>
            </QuestionLink>
          ))}
        </Footer>
        <OutterLine>
          <button onClick={Number(id) !== 10 ? onClickNext : onClickResult}>
            {Number(id) !== 10 ? "다음" : "결과 확인"}
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
  cursor: pointer;
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

const ChoiceBox = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const ChoiceButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  background: ${(props) => (props.selected === props.index ? "red" : "none")};
  color: ${(props) => (props.selected === props.index ? "white" : "black")};
`;

const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin-right: 120px;
  align-items: center;
  flex-direction: row;
  width: 400px;
  bottom: 60px;
  height: 20px;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const QuestionLink = styled.div`
  p {
    color: ${(props) => (props.index == props.id ? "#fff" : "#9b9b9b")};
    border-bottom: ${(props) =>
      props.index == props.id ? "2px solid white" : "none"};
  }
  width: 20px;
  height: 20px;
  margin-bottom: 28px;
  text-align: center;
  & + & {
    margin-left: 24px;
  }
  &.active {
    p {
      color: #fff;
      border-bottom: 2px solid white;
    }
  }
`;

const OutterLine = styled.div`
  width: 100px;
  height: 35px;
  border: 1px solid #efb9b5;
  position: relative;
  bottom: -92px;
  left: 180px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
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

export default Question;
