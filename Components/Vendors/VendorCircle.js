import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const VendorCircle = ({ item, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <div
        style={{
          backgroundImage: `url(${item})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* <Image
        className='image'
        src={item ?? item}
        height={130}
        width={130}
        alt={'Music'}
      /> */}
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

  div {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  /* Adjusted */

  /* box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
  border-radius: 20px; */
  /* .image {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  } */
`;
