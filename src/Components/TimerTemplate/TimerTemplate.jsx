import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';


const Container = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  display: flex;
  height: 518px;
  justify-content: center;
  position: relative;
  width: 518px;
`;

const Ring = styled.div`
  position: absolute;
  left: 0;
  stroke: #09A65A;
  top: 0;
  z-index: 1;
  & ending circle {
  stroke: #900A0A;
}
`;




const TimerTemplate = () => {
  return (
    <Container>
      <Ring >
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </Ring>
      <Timer />
    </Container>
  )
}

export default TimerTemplate;
