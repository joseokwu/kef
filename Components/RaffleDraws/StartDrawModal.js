import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';

const StartDrawModal = ({ setModal, modal, startDraw }) => {
  const handleClick = () => {
    startDraw();
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
              src={'/warning.svg'}
              height={130}
              width={130}
              alt='warning'
            />
          </div>

          <h3>Before you start</h3>
          <p>
            You are about to start this raffle draw. Be aware that once this
            draw has been started it can’t be stopped till completed
          </p>
          <button onClick={handleClick}>Continue</button>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default StartDrawModal;

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
      border: 1px solid #fdc558;
      background: linear-gradient(to right, #a608a3, #c6155f, #d82023);
      color: white;
    }
  }
`;
