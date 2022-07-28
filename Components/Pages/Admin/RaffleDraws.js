import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RaffleDashboard } from '../../RaffleDraws';
import useAuth from '../../../hooks/admin/useAuth';

const RaffleDraws = () => {
  const { setActivePage } = useAuth();

  useEffect(() => {
    setActivePage('Raffle Draws');
  }, []);

  return (
    <>
      <RaffleDashboard />
    </>
  );
};

export default RaffleDraws;

const Wrapper = styled.section`
  .btn-nav {
    display: flex;
    gap: 4rem;
    font-size: 1.4rem;
    margin-bottom: 6rem;
    button {
      font-weight: 700;
      background: #eaeaea;
      padding: 1.25rem 1.8rem;
      box-shadow: 0px 10px 34px rgba(255, 255, 255, 0.23);
      border-radius: 10px;
    }
    .active {
      background: #fcac0d;
    }
  }

  .secondary-nav {
    font-size: 1.8rem;
    color: #a5abab;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 6rem;
    cursor: pointer;
  }
`;
