import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';
import AddBranchModal from './AddBranchModal';
import { useState } from 'react';
import BranchBar from './BranchBar';

const AddVendorModal = ({ setModal, modal, startDraw }) => {
  const [branchModal, setBranchModal] = useState(false);
  const [branchList, setBranchList] = useState(['The Place, Lekki']);

  const handleAdd = (value) => {
    setBranchList([...branchList, value]);
  };
  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='title'>
            <h3>Add Vendor</h3>
            <p>Provide vendor details to manage transactions</p>
          </div>
          <div className='input'>
            <label htmlFor='description'>Vendor Name</label>
            <input
              name='description'
              id='description'
              placeholder='Ex. Jonathan'
            ></input>
          </div>
          <div className='input file'>
            <label htmlFor='description'>Vendor Logo</label>
            <div className='input-container'>
              <div className='file-upload-overlay'>
                <Image
                  src={'/upload.svg'}
                  height={15}
                  width={15}
                  alt='upload'
                />
                <p>Upload a display image</p>
              </div>
              <input
                name='description'
                id='description'
                placeholder='Ex. 0000'
                type='file'
              ></input>
            </div>
          </div>
          <div className='input'>
            <label htmlFor='description'>Vendor Number</label>
            <input
              name='description'
              id='description'
              placeholder='Ex. 0000'
            ></input>
          </div>
          {branchList.length > 0 && (
            <div>
              <div className='input'>
                <label htmlFor='description' className='branch-title'>
                  Branches
                </label>
                {branchList.map((item, index) => {
                  return <BranchBar key={index} item={item} />;
                })}
              </div>
            </div>
          )}
          <button className='add-item' onClick={() => setBranchModal(true)}>
            Add Branch+
          </button>
          <hr />
          <div className='btns'>
            <Actions setLocation={() => setModal(false)} title={'Publish'} />
          </div>
        </div>
        <AddBranchModal
          setModal={setBranchModal}
          modal={branchModal}
          handleAdd={handleAdd}
        />
      </Wrapper>
    </Dialog>
  );
};

export default AddVendorModal;

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
