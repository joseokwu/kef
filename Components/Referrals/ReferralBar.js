import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ReferralBar = ({ item, index }) => {
  return (
    <Wrapper>
      <h2>{item?.name}</h2>
      <p>
        Sign Ups<span>- {item?.signUps}</span>
      </p>
      <p>
        Minted Tickets<span>- {item?.mintedTickets}</span>
      </p>
      <p>
        User Link<span> - {item?.referalCode}</span>{' '}
        <Image
          src={'/copy.svg'}
          height={18}
          width={18}
          alt={'copy'}
          onClick={() => navigator.clipboard.writeText(item?.referalCode)}
        />
      </p>
    </Wrapper>
  );
};

export default ReferralBar;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.65fr 1fr;
  align-items: center;
  /* justify-content: start; */
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 1rem 2rem;
  img {
    cursor: pointer;
  }

  /* .active {
    transform: translateX(0%);
  }
  .inactive {
    transform: translateX(-120%);
  } */
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #e0e0e0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
    /* margin-bottom: 0.5rem; */
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #706c6c;
    /* margin-bottom: 0.2rem; */
    /* margin-left: auto; */
    margin-right: auto;
    span {
      font-weight: 700;
      margin-left: 0.2rem;
    }
  }
`;
