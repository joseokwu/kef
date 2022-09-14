import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { home_url } from '../../utils/variables';

const BranchCard = ({ item, index }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let timer;
    if (check) {
      timer = setTimeout(() => {
        setCheck(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [check]);
  return (
    <Wrapper>
      <h2>{item?.name}</h2>
      <p>
        Total Transactions<span>- {item?.branchTotalTransaction}</span>
      </p>
      <p>
        Store Link
        <span>
          {' '}
          -{' '}
          {item?.link.length > 30
            ? item?.link.slice(0, 22) + '...'
            : item?.link}
        </span>{' '}
        <span className='referral'>
          <Image
            src={'/copy.svg'}
            height={18}
            width={18}
            alt={'copy'}
            onClick={() => {
              navigator.clipboard.writeText(`${home_url}vendor${item?.link}`);
              setCheck(true);
            }}
          />
          {check && (
            <span className='good'>
              <Image
                src={'/success-check.svg'}
                height={18}
                width={18}
                alt={'copy'}
              />
            </span>
          )}
        </span>
      </p>
    </Wrapper>
  );
};

export default BranchCard;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 0.75fr 1fr;
  align-items: center;

  /* gap: 2rem; */
  border: 1px solid #a307a8;
  border-radius: 20px;
  padding: 1rem 2rem;
  transition: all 0.4s;

  img {
    cursor: pointer;
  }

  .good {
    animation: check 0.1s ease-in;
  }

  @keyframes check {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .referral {
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
    position: relative;
  }

  .referral:active {
    transform: translateY(0.4rem);
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    color: #e0e0e0;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #706c6c;
  }
  p {
    display: flex;
    font-size: 1.4rem;
    font-weight: 400;
    color: #706c6c;

    span {
      font-weight: 700;
      margin-left: 0.2rem;
    }
  }
`;
