import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const TimeFrame = ({ label, subtitle, category, onChange, trailing }) => {
  const inputRef = useRef();
  return (
    <Wrapper>
      <div className='info'>
        <label htmlFor={label}>{label}</label>
        <p>{subtitle}</p>
      </div>
      <div className='input-container' onClick={() => inputRef.current.focus()}>
        <input
          type='number'
          id={label}
          placeholder={1}
          ref={inputRef}
          value={category}
          onChange={onChange}
        />
        <span>{trailing}</span>
      </div>
    </Wrapper>
  );
};

export default TimeFrame;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #575757;
    /* width: 80%; */
  }
  input {
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    width: 30%;
    height: 100%;
    border-radius: 10px;
    padding-left: 2rem;
    /* padding-right: 3rem; */
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .input-container {
    display: flex;
    color: #575757;
    width: 15%;
    height: 4rem;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    span {
      font-size: 1.1rem;
      margin-top: auto;
      margin-bottom: auto;
      background-color: #f2f2f2;
      height: 50%;
      padding: 0.2rem 0.3rem;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 90%;
  }
  .info {
    width: 30%;
  }
`;
