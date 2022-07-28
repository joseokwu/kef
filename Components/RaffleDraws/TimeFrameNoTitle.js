import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const TimeFrameNoTitle = ({
  label,
  subtitle,
  category,
  onChange,
  trailing,
}) => {
  const inputRef = useRef();
  return (
    <Wrapper>
      <div className='input-container' onClick={() => inputRef.current.focus()}>
        <input
          type='text'
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

export default TimeFrameNoTitle;

const Wrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* width: 40%; */

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
    /* width: 100%; */
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
`;
