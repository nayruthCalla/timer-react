import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import icon from '../../assets/images/gear.svg';
import {fill} from '../../utils/utils';

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
  display: flex;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: "bebas";
  font-size: 196px;
  height: 214px;
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
const Timer = ({setColor}) => {
  
  const [inputValue, setInputValue] = useState("");
  const [inputValueSec, setInputValueSec] = useState("");
  const [timeIDH, setTimeIDH] = useState();
  const [text, setText] = useState("START");

  const inputT = useRef("");
  const inputSec = useRef("");

  useEffect(()=>{  
       console.log(inputValue)
    if(inputValue === '00' && inputValueSec === '00'){
      setColor('red');
    }
  },[inputValue,inputValueSec])

  const timeHandler = () => {
    inputT.current.disabled = false;
    inputSec.current.disabled = false;
    
  }  
  const valueHandler = (e) => {
    
    if(Number(e.target.value)<60 && Number(e.target.value)>0){
      setInputValue(e.target.value.toString());
    }else{
      setInputValue('00')
    }
  }

  const valueHandlerSec = (e) => {
    
    if(Number(e.target.value)<60 && Number(e.target.value)>0){
      setInputValueSec(e.target.value.toString());
    }else{
      setInputValueSec('00')
    }
    
    
  }

const startHandler = (e) => {  
  const tick = (finishTime) =>{ 
    const distance = new Date(finishTime).getTime()-new Date().getTime();   
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);      
    if (seconds <0) {          
      clearInterval(timerID);
   }

   setInputValue(fill(minutes,2));
   setInputValueSec(fill(seconds,2));
   }
   const newTimer = new Date(Date.now() + (Number(inputValue)* 60 * 1000) +(Number(inputValueSec) * 1000));   
   const timerID = setInterval( () => tick(newTimer), 1000 );
   setTimeIDH(timerID);
   inputT.current.disabled = true;
   inputSec.current.disabled = true;

   console.log(e.target.outerText);
   //e.target.outerText = 'STOP'
   setText('STOP');
   if(e.target.outerText === 'STOP'){    
    console.log('hola')
      return function cleanup() {
      clearInterval(timerID);
    }; 
    
   }
     return function cleanup() {
      clearInterval(timerID);
    };    
    
}

  return (
    <TimerCont>
      <Time>
        <Minutes>
          <Input ref = {inputT} id= "min" type="number" value = {inputValue === '-1' ? '': inputValue} onChange={valueHandler} placeholder="00" disabled/>
        </Minutes>
        <Colon >:</Colon>
        <Seconds>
          <Input ref = {inputSec} id= "sec" type="number" value = {inputValueSec === '-1' ? '' : inputValueSec} onChange={valueHandlerSec} placeholder="00" disabled/>
        </Seconds>
      </Time>
      <ButtonStart type = "button" onClick={startHandler} >{text}</ButtonStart>
      <ButtonSettings type = "button" onClick={timeHandler}>
        <img src= {icon} alt="Settings" />
      </ButtonSettings>
    </TimerCont>
  )
}

export default Timer
