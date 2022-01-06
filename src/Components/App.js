import TimerTemplate from "./TimerTemplate/TimerTemplate";
import styled from "styled-components";
import "../css/App.css";
// import ma1 from "../assets/images/man1.png";
// import ma2 from "../assets/images/man2.png";
// import ma3 from "../assets/images/man3.png";
// import ma4 from "../assets/images/ma4.png";
import ma5 from "../assets/images/man5.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;
const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  color: rgba(255, 255, 255, 0.54);
`;

function App() {
  return (
    <Container>
      <Title>Bienvenidx a Chronos</Title>
      <Figure>
        <Image src={ma5} alt="" />
      </Figure>
      <TimerTemplate />
    </Container>
  );
}

export default App;
