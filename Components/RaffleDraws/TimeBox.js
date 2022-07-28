import React from 'react';
import styled from 'styled-components';

const TimeBox = ({ label, subtitle, time, onChange }) => {
  return (
    <Wrapper>
      <div className='info'>
        <label htmlFor={label}>{label}</label>
        <p>{subtitle}</p>
      </div>
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
  /* justify-content: flex-start;
  width: 30%; */
  margin-bottom: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #575757;
    /* width: 50%; */
  }
  input {
    font-size: 1.6rem;
    font-weight: 500;
    color: #575757;
    width: 15%;
    height: 4rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
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
