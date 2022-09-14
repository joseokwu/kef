import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';
import { useState } from 'react';
import useVendors from '../../hooks/admin/useVendors';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import authFetch from '../../axios/admin';
import { useRef } from 'react';
import PhoneInput from 'react-phone-input-2';

const EmailTemplateModal = ({ setModal, modal }) => {
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
            <h3>Email Template</h3>
            <p>A general email to be sent to users</p>
          </div>
          <div className='input'>
            <label htmlFor='name'>Title</label>
            <input
              name='name'
              id='name'
              placeholder='Ex. Jonathan'
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className='input'>
            <label htmlFor='body'>Email Body</label>
            <textarea
              className='body'
              name='body'
              id='body'
              cols='30'
              rows='5'
            ></textarea>
          </div>
          <div className='input file'>
            <label htmlFor='logo'>Media (optional)</label>
            <div className='input-container'>
              <div className='file-upload-overlay'>
                <Image
                  src={'/upload.svg'}
                  height={15}
                  width={15}
                  alt='upload'
                />
                <p>Upload Image (Max. Size 10mb)</p>
              </div>
              <input
                name='logo'
                id='logo'
                placeholder='Ex. 0000'
                type='file'
                onChange={updateAvatar}
              ></input>
            </div>
          </div>
          {previewImage && (
            <img src={previewImage} alt='22' height={50} width={50} />
          )}

          <hr />
          <div className='btns'>
            <Actions
              // onClick={() => handleAddVendor(details)}
              setLocation={() => setModal(false)}
              title={'Send'}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default EmailTemplateModal;

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
    p {
      font-size: 16px;
      font-weight: 500;
      color: #827f7f;
    }
    label {
      display: block;
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
