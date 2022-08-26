import React from 'react';
import styled from 'styled-components';

const RaffleCard = ({ item, index }) => {
  return (
    <Wrapper>
      <h1>{item?.number}</h1>

      <h2>{item?.name}</h2>
      <p>
        Ticket<span>- {item?.ticket}</span>
      </p>
      <p>
        Prize<span> - {item?.prize}</span>
      </p>
      <p>
        Time <span>- 12:45pm</span>
      </p>
    </Wrapper>
  );
};

export default RaffleCard;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 0rem 2rem;
  animation: fromLeft 3s ease-in-out;

  /* .active {
    transform: translateX(0%);
  }
  .inactive {
    transform: translateX(-120%);
  } */
  @keyframes fromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    80% {
      transform: translateX(10%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  h1 {
    font-size: 33px;
    font-weight: bold;
    color: #e0e0e0;
  }
  h2 {
    font-size: 20px;
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
