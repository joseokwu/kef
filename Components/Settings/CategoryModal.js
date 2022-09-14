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

const CategoryModal = ({ setModal, modal }) => {
  const [branchModal, setBranchModal] = useState(false);
  const [categoryList, setCategoryList] = useState([1]);
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

  // const handleAdd = (value) => {
  //   setBranchList([...branchList, value]);
  //   console.log(branchList);
  // };

  // const details = {
  //   name,
  //   vendorNumber: number,
  //   logoUrl: imageURL,
  //   branches: branchList,
  // };

  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='title'>
            <h3>Category List & Amount</h3>
            <p>Set the categories and amounts per category</p>
          </div>
          {categoryList?.map((item, index) => {
            return (
              <div className='input' key={index}>
                <div>
                  <label htmlFor='name'>Title</label>
                  <input
                    name='name'
                    id='name'
                    placeholder='Ex. Jonathan'
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className='dual-inputs'>
                  <div>
                    <label htmlFor='name'>Minimum Amount</label>
                    <input
                      type='number'
                      name='name'
                      id='name'
                      placeholder='0000'
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor='name'>Maximum Amount</label>
                    <input
                      type='number'
                      name='name'
                      id='name'
                      placeholder='0000'
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <button
            className='add-category'
            onClick={() => setCategoryList([...categoryList, 1])}
          >
            Add New Category
          </button>
          <div className='btns'>
            <Actions
              // onClick={() => handleAddVendor(details)}
              setLocation={() => setModal(false)}
              title={'Save Category'}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default CategoryModal;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 48rem;
  padding: 2rem 4rem;

  .add-category {
    margin-right: auto;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #a307a8;
    text-decoration: underline;
    cursor: pointer;
  }

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

      .dual-inputs {
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
        margin-bottom: 2rem;

        input {
          width: 100%;
        }
      }
    }
  }
`;
