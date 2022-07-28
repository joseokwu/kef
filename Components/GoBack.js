import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const GoBack = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={'/left-arrow.svg'} width={15} height={15} alt='arrow' />
      <h3>{text}</h3>
    </Wrapper>
  );
};

export default GoBack;

const Wrapper = styled.div`
  font-size: 1.8rem;
  color: #a5abab;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
`;
