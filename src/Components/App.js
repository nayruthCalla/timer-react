import TimerTemplate from "./TimerTemplate/TimerTemplate";
import styled from "styled-components";
import "../css/App.css";
import manual from "../assets/images/man5.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;
const Figure = styled.figure`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }
  @media screen and (min-width: 1024px) {
  }
`;
const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  margin: 1rem 0 0 0;
  color: rgba(255, 255, 255, 0.54);
`;
const TitleFooter = styled.p`
  font-size: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: 37px;
  color: rgba(255, 255, 255, 0.54);
`;

function App() {
  return (
    <Container>
      <Title>Bienvenidx a Chronos</Title>
      <Figure>
        <Image src={manual} alt="" />
      </Figure>
      <TimerTemplate />
      <TitleFooter>Made by Nayruth Calla @ 2021</TitleFooter>
    </Container>
  );
}

export default App;
