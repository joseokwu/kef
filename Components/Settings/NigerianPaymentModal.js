import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';
import { useState } from 'react';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import authFetch from '../../axios/admin';
import { useRef } from 'react';
import InputBox from './InputBox';

const NigerianPaymentModal = ({ setModal, modal }) => {
  const [branchModal, setBranchModal] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [imageFile, setImageFile] = useState();
  const [passError, setPassError] = useState('');
  const [previewImage, setPreviewImage] = useState();
  const [imageURL, setImageURL] = useState();
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const updateAvatar = async (e) => {
    toggleLoad();
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    try {
      const resp = await authFetch.post('/profile/upload-avatar', formData);
      console.log('response is', resp);
      const {
        data: { avatar },
      } = resp.data;
      console.log(avatar);
      toggleAlertBar(resp.data.message, 'success', true, 3000);
      setImageURL(avatar);
      // URL.revokeObjectURL(uploadImgUrl);
      toggleLoad();
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    } catch (error) {
      toggleAlertBar(
        'Problem Updating Profile Picture. Please Ensure all Fields are Correct and Try Again!',
        'error',
        true,
        8000
      );
      toggleLoad();
    }
  };

  const handleAdd = (value) => {
    setBranchList([...branchList, value]);
    console.log(branchList);
  };

  const details = {
    name,
    vendorNumber: number,
    logoUrl: imageURL,
    branches: branchList,
  };

  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='title'>
            <h3>Nigerian Payment</h3>
            <p className='subtitle'>
              Set the amount for tickets for local user
            </p>
          </div>

          <InputBox
            label={'Ticket Minting'}
            subtitle={'Choose an amount for ticket minting'}
            disabled={false}
            type='number'
          />

          <InputBox
            label={'Weekly Ticket'}
            subtitle={'Choose an amount for weekly ticket'}
            disabled={false}
            type='number'
          />

          <InputBox
            label={'Event Ticket'}
            subtitle={'Choose an amount for event ticket'}
            disabled={false}
            type='number'
          />

          <InputBox
            label={'Amount To Win Ticket'}
            subtitle={'Choose an amount to win ticket'}
            disabled={false}
            type='number'
          />

          <hr />
          <div className='btns'>
            <Actions
              // onClick={() => handleAddVendor(details)}
              setLocation={() => setModal(false)}
              title={'Update Payment'}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default NigerianPaymentModal;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 48rem;
  padding: 2rem 4rem;

  .cancel-icon {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex-direction: column;

    .add-item {
      margin-top: 1rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: #a307a8;
      text-decoration: underline;
      margin-right: auto;
      margin-bottom: 2rem;
    }

    h3 {
      color: #000000;
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      font-size: 16px;
      font-weight: 500;
      color: #827f7f;
    }
    .body {
      height: 100%;
      background: #f8f9fd;
      border: 1px solid #bebdbd;
      width: 100%;
      border-radius: 10px;
      padding: 2rem;
      font-size: 14px;
    }
    .btns {
      text-align: center;
      margin-top: 2rem;
    }
    .title {
      margin-bottom: 4rem;
    }
    .input {
      margin-bottom: 2rem;
    }

    .input-container {
      position: relative;
      height: 10rem;
      background: #fafafa;
      border-radius: 10px;
      input {
        position: absolute;
        top: 0;
        opacity: 0;
        height: 100%;
        width: 100%;
        border: none;
        /* opacity: 0.1; */
      }
    }
    .file-upload-overlay {
      position: relative;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    .branch-title {
      color: #000000;
      font-weight: 600;
    }
  }
`;
