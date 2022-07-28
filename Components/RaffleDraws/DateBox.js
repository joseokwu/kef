import React from 'react';
import styled from 'styled-components';

const DateBox = ({ label, subtitle, onChange, category }) => {
  const today = new Date();
  const numberOfDaysToAdd = 3;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split('T')[0]; // yyyy-mm-dd
  return (
    <Wrapper>
      <div className='info'>
        <label htmlFor={label}>{label}</label>
        <p>{subtitle}</p>
      </div>
      <input type='date' defaultValue={defaultValue} />
    </Wrapper>
  );
};

export default DateBox;

const Wrapper = styled.div`
  display: flex;
  /* gap: 8rem; */
  align-items: center;
  /* justify-content: flex-start; */
  /* width: 30%; */
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
    font-size: 1.4rem;
    font-weight: 500;
    color: #575757;
    width: 15%;
    height: 4rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
