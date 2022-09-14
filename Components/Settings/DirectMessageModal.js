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

const DirectMessageModal = ({ setModal, modal }) => {
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
            <h3 onClick={() => console.log(details)}>Direct Message</h3>
            <p>Direct messages sent to users</p>
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
            <label htmlFor='name'>Search User</label>
            <input
              style={{
                backgroundPosition: '95%',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.5403 18.8028C18.6351 17.0625 20.5438 12.3324 18.8036 8.2376C17.0633 4.14284 12.3332 2.23412 8.2384 3.97435C4.14364 5.71458 2.23492 10.4448 3.97515 14.5395C5.71538 18.6343 10.4456 20.543 14.5403 18.8028Z' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.0853 17.0844L23.3333 23.3333' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
              }}
              name='name'
              id='name'
              placeholder='Ex. Jonathan'
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className='input'>
            <label htmlFor='body'>Message</label>
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

export default DirectMessageModal;

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
