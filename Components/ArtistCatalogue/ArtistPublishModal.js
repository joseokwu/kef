import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';

const ArtistPublishModal = ({ setModal, modal, startDraw }) => {
  const handleClick = () => {
    startDraw();
    setModal(false);
  };
  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        {/* <div className='cancel' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div> */}
        <div className='content'>
          <div>
            <h3>Artist Description</h3>
            <p>
              Provide description details about the artist before publishing
            </p>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <textarea name='description' id='description' rows='9'></textarea>
          </div>
          <hr />
          <div className='btns'>
            <Actions setLocation={() => setModal(false)} title={'Publish'} />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default ArtistPublishModal;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 48rem;
  height: 60rem;
  padding: 4rem 4rem;

  /* .cancel {
    display: flex;
    justify-content: flex-end;
  } */
  .content {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h3 {
      color: #000000;
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: #827f7f;
    }
    label {
      font-size: 16px;
      font-weight: 500;
      color: #827f7f;
    }
    textArea {
      background: #f8f9fd;
      border: 1px solid #bebdbd;
      border-radius: 10px;
      width: 100%;
      padding: 2rem;
      font-size: 14px;
    }
  }
`;
