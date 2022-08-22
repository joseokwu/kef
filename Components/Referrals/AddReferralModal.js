import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';

const AddReferralModal = ({ setModal, modal, createReferral }) => {
  const [name, setName] = useState('');

  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div>
            <h3>Generate Link</h3>
            <p>Generate link for new celebrities</p>
          </div>
          <div>
            <label htmlFor='description'>Celebrity Name</label>
            <input
              name='description'
              id='description'
              placeholder='Ex. Jonathan'
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <hr />
          <div className='btns'>
            <Actions
              setLocation={() => setModal(false)}
              title={'Generate Link'}
              onClick={() => {
                createReferral(name);
              }}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default AddReferralModal;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 48rem;
  padding: 4rem 4rem;

  .cancel-icon {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h3 {
      color: #000000;
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
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
    input {
      background: #f8f9fd;
      border: 1px solid #bebdbd;
      border-radius: 10px;
      width: 100%;
      padding: 1.5rem 2rem;
      font-size: 14px;
    }
    .btns {
      text-align: center;
    }
  }
`;
