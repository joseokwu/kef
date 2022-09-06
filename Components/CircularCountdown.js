import React, { useRef, useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';

const RenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  useEffect(() => {
    let t;
    if (remainingTime === 0) {
      t = setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }
    return () => clearTimeout(t);
  }, [remainingTime]);

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <Wrapper1>
      <div className='time-wrapper'>
        <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? 'down' : ''}`}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    </Wrapper1>
  );
};

const CircularCountdown = ({ onComplete, title }) => (
  <Wrapper>
    <h3>{title} Complete</h3>
    <p>Next round starts in: </p>
    <div className='timer-wrapper'>
      <CountdownCircleTimer
        isPlaying={true}
        duration={5}
        colors={['#C6155F', '#A608A3', '#A608A3', '#D82023', '#C6155F']}
        colorsTime={[10, 8, 6, 4, 2]}
        strokeWidth={20}
        // size={500}
        isSmoothColorTransition={true}
        onComplete={onComplete}
      >
        {RenderTime}
      </CountdownCircleTimer>
    </div>
  </Wrapper>
);

export default CircularCountdown;

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  background: rgba(240, 240, 240, 0.9);
  padding: 5rem;
  border-radius: 50%;
  z-index: 999;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: #a5abab;
    margin-bottom: 1rem;
  }

  .timer-wrapper {
    display: flex;
    justify-content: center;
  }
`;

const Wrapper1 = styled.div`
  h1 {
    font-family: 'Roboto';
    text-align: center;
    margin-bottom: 40px;
  }

  .timer-wrapper {
    display: flex;
    justify-content: center;
  }

  .time-wrapper {
    position: relative;
    width: 80px;
    height: 60px;
    font-size: 48px;
    font-weight: 600;
    font-family: 'Montserrat';
  }

  .time-wrapper .time {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s;
  }

  .time-wrapper .time.up {
    opacity: 0;
    transform: translateY(-100%);
  }

  .time-wrapper .time.down {
    opacity: 0;
    transform: translateY(100%);
  }
`;
