import styled from 'styled-components';

import React from 'react';
// import './spinner.css';

const Loading = () => {
  return (
    <Wrapper>
      <div className='spinner-container'>
        <div className='loading-spinner'></div>
      </div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    height: 150px;
    border: 10px solid #a608a3; /* Light grey */
    border-top: 10px solid #d82023; /* Black */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
