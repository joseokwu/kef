import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BranchCard = ({ item, index }) => {
  return (
    <Wrapper>
      <h2>{item?.name}</h2>
      <p>
        Total Transactions<span>- {item?.total}</span>
      </p>
      <p>
        Store Link<span> - {item?.link}</span>{' '}
        <Image src={'/copy.svg'} height={18} width={18} alt={'copy'} />
      </p>
    </Wrapper>
  );
};

export default BranchCard;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 0.5rem 2rem;

  /* .active {
    transform: translateX(0%);
  }
  .inactive {
    transform: translateX(-120%);
  } */
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #e0e0e0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #706c6c;
    margin-bottom: 0.2rem;
    span {
      font-weight: 700;
      margin-left: 0.2rem;
    }
  }
`;
