import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

const Success = ({ setModal, modal, setLocation }) => {
  const handleClick = () => {
    setLocation();
    setModal(false);
  };
  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='warning'>
            <Image
              src={'/success-check.svg'}
              height={130}
              width={130}
              alt='warning'
            />
          </div>

          <h3>Campaign Created</h3>
          <p>Your campaign has been successfully created</p>
          <button onClick={handleClick}>Go to raffle draw</button>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default Success;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 44rem;
  height: 50rem;
  padding: 4rem 4rem;

  .cancel {
    display: flex;
    justify-content: flex-end;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    h3 {
      color: #000000;
      font-size: 2.2rem;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
    button {
      border-radius: 10px;
      padding: 15px 10px;
      font-size: 16px;
      font-weight: 700;
      width: 100%;
      /* border: 1px solid #fdc558; */
      color: #a307a8;
    }
  }
`;
