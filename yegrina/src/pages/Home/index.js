import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Dummy from "../Question/Dummy.json";

const Home = () => {
  const questions = Dummy.questions;
  const location = useLocation();
  const url = location.state
    ? location.state.url
    : "https://velog.velcdn.com/images/ea_st_ring/post/cb9dc328-36cb-47b9-aac8-70def524ca1e/image.png";
  console.log(url);
  const accessToken = useSelector((state) => state.login.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      window.location.href = "/login";
    }
  }, [accessToken]);

  const onClickStart = () => {
    navigate("/question/1", {
      state: {
        questions,
      },
    });
  };

  return (
    <Section>
      <Logo>예그리나</Logo>
      <Background>
        <Title>“ 시대를 선택해 문제를 맞춰보세요! ”</Title>
        <CategoryGrid>
          <Goryeo>
            <CategoryFormat>
              <StyledH2>고려</StyledH2>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/fbbdaefc-7122-4758-9c7d-d54f77a6e80e/image.png" />
              </ImageWrapper>
              <OutterLine>
                <button onClick={onClickStart}>시작하기</button>
              </OutterLine>
            </CategoryFormat>
          </Goryeo>

          <Chosun>
            <CategoryFormat>
              <StyledH2>조선</StyledH2>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/d854a85e-2eab-42b2-93cc-b837e65b9e2e/image.png" />
              </ImageWrapper>
              <OutterLine>
                <button onClick={onClickStart}>시작하기</button>
              </OutterLine>
            </CategoryFormat>
          </Chosun>

          <Colony>
            <CategoryFormat>
              <StyledH2>일제강점기</StyledH2>
              <ImageWrapper>
                <img src={url} />
              </ImageWrapper>
              <OutterLine>
                <button onClick={onClickStart}>시작하기</button>
              </OutterLine>
            </CategoryFormat>
          </Colony>

          <Contemporary>
            <CategoryFormat>
              <StyledH2>광복 이후</StyledH2>
              <ImageWrapper>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/db7155b8-614b-45a4-b599-9952b271dc5f/image.png" />
              </ImageWrapper>
              <OutterLine>
                <button onClick={onClickStart}>시작하기</button>
              </OutterLine>
            </CategoryFormat>
          </Contemporary>
        </CategoryGrid>
      </Background>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/76c0f39a-1627-4da7-8a25-a293a3fcfa08/image.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 20px 320px 0px 320px;
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

const Background = styled.div`
  background-image: url("https://velog.velcdn.com/images/ea_st_ring/post/1912fa73-47f8-4fdb-b873-cd5a29d3bfea/image.png");
  background-size: cover;
  width: 620px;
  height: 620px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0px;
`;
const StyledH2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const CategoryGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 20px 40px 40px 40px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Goryeo Chosun"
    "Colony Contemporary";
`;

const Goryeo = styled.div`
  grid-area: Goryeo;
`;

const Chosun = styled.div`
  grid-area: Chosun;
`;

const Colony = styled.div`
  grid-area: Colony;
`;

const Contemporary = styled.div`
  grid-area: Contemporary;
`;

const CategoryFormat = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 130px;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 16px;
`;

const OutterLine = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid #efb9b5;
  }
  button {
    width: 95px;
    height: 25px;
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

export default Home;
