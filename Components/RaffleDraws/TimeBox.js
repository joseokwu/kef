import React from 'react';
import styled from 'styled-components';

const TimeBox = ({ label, options, disabled, time, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <input type='time' value={time} onChange={onChange} />
      {/* <select name={label} id={label} disabled={disabled}>
        {options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select> */}
    </Wrapper>
  );
};

export default TimeBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  margin-bottom: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #575757;
    width: 50%;
  }
  input {
    font-size: 1.6rem;
    font-weight: 500;
    color: #575757;
    width: 50%;
    height: 4rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
