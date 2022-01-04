import styled from 'styled-components';
import icon from '../../assets/images/gear.svg';

const TimerCont = styled.div`
  align-items: center;
  background: radial-gradient(71.4% 71.4% at 51.7% 28.6%, #3A393F 0%, #17171A 100%);
  border-radius: 50%;
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  position: relative;
  width: 500px;
  z-index: 2;
`;

const Time = styled.div`
  display: flex;
  font-family: "bebas";
  font-size: 196px;
  margin: 30px auto;
  position: relative;
  top: 30px;
`;

const Minutes = styled.div`
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: "bebas";
  font-size: 196px;
  height: 170px;
  width: 150px;
  text-align: center;
  outline: none;
  &:disabled {
  border-bottom: none;
}
`;

const Colon = styled.div``;

const Seconds = styled.div``;

const ButtonStart = styled.button`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 10px;
  line-height: 20px;
  background: none;
  color: white;
  opacity: .5;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:hover {
  opacity: 1;
}
`;
const ButtonSettings = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
  opacity: 1;
}
`;
const Timer = () => {
  return (
    <TimerCont>
      <Time>
        <Minutes>
          <Input  type="text" value="15" disabled/>
        </Minutes>          
        <Colon>:</Colon>
        <Seconds>
        <Input  type="text" value="00" disabled/>            
        </Seconds>
      </Time>
      <ButtonStart>start</ButtonStart>
      <ButtonSettings>
      <img src= {icon} alt="Settings" />
      </ButtonSettings>
    </TimerCont>
  )
}

export default Timer
