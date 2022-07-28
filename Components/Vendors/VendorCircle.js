import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const VendorCircle = ({ item, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Image
        className='image'
        src={'/the-place.svg'}
        height={130}
        width={130}
        alt={'Music'}
      />
    </Wrapper>
  );
};

export default VendorCircle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: 1rem 1rem; */
  background: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid #a608a3;

  /* Adjusted */

  /* box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
  border-radius: 20px; */
  /* .image {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  } */
  h4 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
  }
`;
