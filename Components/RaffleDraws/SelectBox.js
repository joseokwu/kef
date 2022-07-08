import React from 'react';
import styled from 'styled-components';

const SelectBox = ({ label, options, disabled, onChange, category }) => {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <select
        name={label}
        id={label}
        defaultValue={category}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default SelectBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 30%; */
  margin-bottom: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #575757;
    width: 15%;
  }
  select {
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
`;
