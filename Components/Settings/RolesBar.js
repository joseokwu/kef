import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { home_url } from '../../utils/variables';

const RolesBar = ({ title }) => {
  const [check, setCheck] = useState(false);

  const roles = [
    'Overview',
    'Raffle Draws',
    'Cards',
    'Events',
    'Transactions',
    'Users',
    'Artist Catalogue',
    'Vendors',
    'Referrals',
    'Settings',
  ];

  // useEffect(() => {
  //   let timer;
  //   if (check) {
  //     timer = setTimeout(() => {
  //       setCheck(false);
  //     }, 2000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [check]);
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className='roles'>
        {roles.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>

      <div className='checkbox-container'>
        <span>
          <input type='checkbox' name='role' id='role1' />
          <label htmlFor='role1'>Create</label>
        </span>

        <span>
          <input type='checkbox' name='role' id='role2' />
          <label htmlFor='role2'>Edit</label>
        </span>
        <span>
          <input type='checkbox' name='role' id='role3' />
          <label htmlFor='role3'>View</label>
        </span>
        <span>
          <input type='checkbox' name='role' id='role4' />
          <label htmlFor='role4'>Delete</label>
        </span>
      </div>
    </Wrapper>
  );
};

export default RolesBar;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.7fr 1fr;
  align-items: center;
  /* justify-content: start; */
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 2rem 2rem;
  transition: all 0.4s;

  .roles {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    span {
      font-weight: 600;
      padding: 0.7rem 1.2rem;
      background-color: #ffefff;
      color: #a307a8;
      border-radius: 8px;
    }
  }

  h2 {
    height: 100%;
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
    /* margin-bottom: 0.5rem; */
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    font-size: 1.4rem;
    font-weight: 400;
    color: #706c6c;
    height: 100%;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;

      input:checked {
        accent-color: #a307a8;
      }
    }
  }
`;
