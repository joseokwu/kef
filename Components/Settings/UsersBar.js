import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { home_url } from '../../utils/variables';

const UsersBar = ({ item, index, setModal, setIsEditing }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let timer;
    if (check) {
      timer = setTimeout(() => {
        setCheck(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [check]);
  return (
    <Wrapper>
      <h2>{item?.name}</h2>
      <p>
        Email<span>- {item?.email}</span>
      </p>
      <p>
        Role<span>- {item?.role}</span>
      </p>
      <p>
        <button
          className='btn1 edit'
          onClick={() => {
            setModal(true);
            setIsEditing(true);
          }}
        >
          Edit User
        </button>
        <button className='btn1 delete'>Delete User</button>
      </p>
    </Wrapper>
  );
};

export default UsersBar;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.6fr 0.6fr;
  align-items: center;
  /* justify-content: start; */
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 1rem 2rem;
  transition: all 0.4s;

  .btn1 {
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 0.4rem 0.5rem;
    font-weight: 700;

    background: white;
    color: black;
  }
  .edit {
    margin-right: 1rem;
    border: 1px solid black;
    color: black;
  }
  .delete {
    color: #d82023;
    border: 1px solid #d82023;
  }
  .referral {
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
    position: relative;
  }

  .referral:active {
    transform: translateY(0.4rem);
  }

  /* .active {
    transform: translateX(0%);
  }
  .inactive {
    transform: translateX(-120%);
  } */
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #e0e0e0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
    /* margin-bottom: 0.5rem; */
  }
  p {
    display: flex;
    font-size: 1.4rem;
    font-weight: 400;
    color: #706c6c;
    /* margin-bottom: 0.2rem; */
    /* margin-left: auto; */
    margin-right: auto;
    span {
      font-weight: 700;
      margin-left: 0.2rem;
    }
  }
`;
