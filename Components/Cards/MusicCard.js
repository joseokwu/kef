import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const MusicCard = ({ item, setPopUp }) => {
  return (
    <Wrapper onClick={() => setPopUp()}>
      <Image
        className='image'
        src={item.img}
        height={150}
        width={150}
        alt={'Music'}
        onClick={() => {
          setPopUp();
        }}
      />
      <h4>Concert Mix</h4>
      <p>2022</p>
    </Wrapper>
  );
};

export default MusicCard;

const Wrapper = styled.div`
  margin-bottom: 2rem;
  cursor: pointer;
  .image {
    border-radius: 20px;
  }
  h4 {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #252626;
  }
  p {
    font-size: 1.2rem;
    color: #bdbcbc;
    font-weight: 700;
  }
`;
