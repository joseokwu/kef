import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const VendorCard = ({ item, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image
        className='image'
        src={item.image}
        height={120}
        width={120}
        alt={'Music'}
      />
      <h4>{item.name}</h4>
    </Wrapper>
  );
};

export default VendorCard;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 1rem 2rem;
  background: #ffffff;
  height: 12rem;
  width: 32rem;

  /* Adjusted */

  box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
  border-radius: 20px;
  .image {
    border-radius: 20px;
  }
  h4 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
  }
`;
