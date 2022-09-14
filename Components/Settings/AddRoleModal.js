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

const AddRoleModal = ({ setModal, modal, isEditing }) => {
  const [branchModal, setBranchModal] = useState(false);
  const [branchList, setBranchList] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [passError, setPassError] = useState('');

  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const roles = [
    'Overview',
    'Raffle Draws',
    'Cards',
    'Events',
    'Transactions',
    'Users',
    'Artist Catalogue',
    'Vendors',
    'Referrals',
    'Settings',
  ];

  const handleAdd = (value) => {
    setBranchList([...branchList, value]);
    console.log(branchList);
  };

  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='title'>
            <h3>{isEditing ? 'Edit Role' : 'Add Role'}</h3>
            <p>{isEditing ? 'Edit user role' : 'Add a new user role'}</p>
          </div>
          <div className='input'>
            <label htmlFor='name'>Role Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Ex. Jonathan'
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className='input'>
            <label htmlFor='email'>Features</label>
            <div className='checkbox-container'>
              {roles.map((item, index) => {
                return (
                  <span key={index}>
                    <input type='checkbox' name='role' id={item} />
                    <label htmlFor={item}>{item}</label>
                  </span>
                );
              })}
            </div>
          </div>

          <hr />
          <div className='btns'>
            <Actions
              // onClick={() => handleAddVendor(details)}
              setLocation={() => setModal(false)}
              title={isEditing ? 'Update User' : 'Add User'}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default AddRoleModal;

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

    .checkbox-container {
      /* display: grid;
      grid-template-columns: 1fr 1fr; */
      align-items: center;
      font-size: 1.4rem;
      font-weight: 400;
      color: #706c6c;
      -moz-column-count: 2;

      column-count: 2;
      margin-top: 2rem;

      span {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        input {
          width: 10%;
        }

        input:checked {
          accent-color: #a307a8;
        }
      }
    }

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
    select {
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
