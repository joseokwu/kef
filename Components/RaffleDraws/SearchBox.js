import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const SearchBox = ({ label, subtitle, category, onChange, trailing }) => {
  const inputRef = useRef();
  return (
    <Wrapper>
      <div className='info'>
        <label htmlFor={label}>{label}</label>
        <p>{subtitle}</p>
      </div>
      <div className='input-container' onClick={() => inputRef.current.focus()}>
        <input
          type='text'
          id={label}
          placeholder={'Search'}
          ref={inputRef}
          // value={category}
          // onChange={onChange}
        />
        <span>
          <Image src={'/search.svg'} height={20} width={20} alt='search' />
        </span>
      </div>
      <span className='trailing'>
        <h4>Kennis Music Festival</h4>
        <Image src={'/cancel.svg'} height={15} width={15} />
      </span>
    </Wrapper>
  );
};

export default SearchBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  .trailing {
    display: flex;
    gap: 1rem;
    margin-left: 4rem;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid #252525;
    border-radius: 8px;
    padding: 0.5rem 1rem;
  }
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
    width: 80%;
    height: 100%;
    border-radius: 10px;
    /* padding-left: 2rem; */
    /* padding-right: 3rem; */
  }

  .input-container {
    display: flex;
    color: #575757;
    width: 25%;
    height: 4rem;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 0rem 1rem;
    span {
      font-size: 1.1rem;
      margin-top: auto;
      margin-bottom: auto;
      height: 50%;
      padding: 0.2rem 0.3rem;
      border-radius: 5px;
      margin-left: auto;
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
