import React from "react";
import styled, { keyframes } from "styled-components";
import bugslogo from "./bugs.png";
const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  padding-top: 10%;
  align-items: center;
  min-height: 66vh;
  padding-right: 3vw;
  padding-bottom: 3vw;
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding-top: 6.6vmax;
  padding-bottom: 6.6vmax;
  margin: 0 auto;
  box-sizing: content-box;
  justify-content: center;
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(3.6vw + 1rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  padding: 17px 0px 5px 0px;
  margin: 50px 0px 5px 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  animation: ${fadein} 2s;
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
`;

const ContentContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 0 100px 0;
  padding: 5px 5px 5px 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2);
  grid-auto-rows: min-content;
  grid-gap: 20px;
`;

const FirstContentBox = styled.div`
  background-color: #d6d6d6;
  height: 40vh;
  width: 40vw%;
  grid-column: 1;
  position: relative;
  margin: 0 0 0 5px;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
`;

const SecondContentBox = styled.div`
  background-color: #d6d6d6;
  height: 40vh;
  width: 40vw%;
  grid-column: 2;
  position: relative;
  margin: 0 0 0 5px;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
`;

const ThirdContentBox = styled.div`
  background-color: #d6d6d6;
  height: 40vh;
  width: 40vw%;
  grid-column: 3;
  position: relative;
  margin: 0 5px 0 5px;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 2rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const DescriptionText = styled.p`
  position: relative;
  text-align: center;
`;

const FourthContentBox = styled.div`
  background-color: #d6d6d6;
  height: 30vh;
  width: 95%;
  grid-column: 1 / 4;
  grid-row: 4;
  position: relative;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  const handleOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          <ContentWrapper>
            <Wrapper>
              <DescriptionContainer>
                {/* <ImageContainer>
                  <Image src={bugslogo} />
                </ImageContainer> */}
                <Description>The Open Source Club at NYU</Description>
              </DescriptionContainer>
            </Wrapper>
          </ContentWrapper>
          <ContentContainer>
            <FirstContentBox>
              <Title>What's Open Source?</Title>
              <DescriptionText>
                Open source represents a form of licensing that encourages
                collaboration and transparency. Look more on Open Source Guide
              </DescriptionText>
            </FirstContentBox>
            <SecondContentBox>
              <Title>What We Offer?</Title>
              <DescriptionText>
                Other than maintaining open source projects such as Schedge,
                BUGS also co-hosts project nights weekly on Friday. The event
                serves as a friendly community for NYU students, specifically
                those majoring in Computer Science to exchange ideas, code and
                have fun. We are also experimenting with a mentorship program
                this summer, which helps students learn the basics of web
                development in React.
              </DescriptionText>
            </SecondContentBox>
            <ThirdContentBox>
              <Title>How to Contribute?</Title>
              <DescriptionText>
                If this is your first time contributing, take a look at first
                contributions. Awesome for beginers is a repository containing
                Github projects that have good first issue for new open source
                contributors. It is sorted by language so choose your language
                and PR-away. We also currently have our own open source
                projects. The site you are currently on is open source. So feel
                free to make contribution to the repository . Additionally, we
                are working on maintaining an NYU course API schedge
              </DescriptionText>
            </ThirdContentBox>
            <FourthContentBox>
            </FourthContentBox>
          </ContentContainer>
          {/* <ContentContainer>
              <FirstBox>
                <FirstContentBox />
                <SecondContentBox />
                <ThirdContentBox />
              </FirstBox>
              <SecondBox>

              </SecondBox>
          </ContentContainer> */}
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default HomePage;
