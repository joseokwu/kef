import React from 'react';
import styled from 'styled-components';

const InputBox = ({
  label,
  subtitle,
  options,
  disabled,
  onChange,
  category,
}) => {
  return (
    <Wrapper>
      <div className='info'>
        <label htmlFor={label}>{label}</label>
        <p>{subtitle}</p>
      </div>
      <input
        name={label}
        id={label}
        defaultValue={category}
        disabled={disabled}
        onChange={onChange}
      ></input>
    </Wrapper>
  );
};

export default InputBox;

const Wrapper = styled.div`
  display: flex;
  /* gap: 8rem; */
  align-items: center;
  margin-bottom: 2rem;
  .info {
    width: 30%;
  }
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #575757;
    /* width: 15%; */
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 90%;
  }
  input {
    font-size: 1.6rem;
    font-weight: 500;
    color: #575757;
    width: 20%;
    height: 4rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
