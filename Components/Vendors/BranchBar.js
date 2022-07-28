import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BranchBar = ({ item, index }) => {
  return (
    <Wrapper>
      <Image src={'/building.svg'} height={15} width={15} alt={'copy'} />

      <h2>{item}</h2>

      <Image src={'/delete-icon.svg'} height={15} width={15} alt={'copy'} />
    </Wrapper>
  );
};

export default BranchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  /* .active {
    transform: translateX(0%);
  }
  .inactive {
    transform: translateX(-120%);
  } */

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #706c6c;
  }
`;
