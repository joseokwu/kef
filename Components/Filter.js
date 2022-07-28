import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Filter = ({ setShowFilter, showFilter }) => {
  return (
    <Wrapper onClick={() => setShowFilter(!showFilter)}>
      <p>Filter</p>
      <Image src={'/funnel.svg'} width={15} height={15} alt={'filter'} />
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  width: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  /* padding: 1rem 1.2rem; */
  border: 1px solid #c6155f;
  border-radius: 90px;
  cursor: pointer;
`;
