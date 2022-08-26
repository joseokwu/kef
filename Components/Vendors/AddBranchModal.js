import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import Actions from '../RaffleDraws/Actions';
import { useRouter } from 'next/router';
import useVendors from '../../hooks/admin/useVendors';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import PhoneInput from 'react-phone-input-2';

const AddBranchModal = ({ setModal, modal, handleAdd }) => {
  const [branchName, setBranchName] = useState();
  const [branchLocation, setBranchLocation] = useState();
  // const [branchNumber, setBranchNumber] = useState();
  const [phoneError, setPhoneErrror] = useState('');
  const [phone, setPhone] = useState();
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();
  const { addBranch } = useVendors();

  const { id } = router.query;

  const handleSubmit = () => {
    if (id) {
      addBranch({
        toggleAlertBar,
        toggleLoad,
        setPassError,
        uuid: id,
        details: {
          name: branchName,
          location: branchLocation,
          branchNumber: phone,
        },
      });
    } else {
      handleAdd({
        name: branchName,
        location: branchLocation,
        branchNumber: phone,
      });
    }
    setModal(false);
  };

  return (
    <Dialog onClose={() => setModal(false)} open={modal}>
      <Wrapper>
        <div className='cancel-icon' onClick={() => setModal(false)}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div>
            <h3>Add Branch</h3>
            <p>Add a branch of the vendor</p>
          </div>
          <div>
            <label htmlFor='name'>Branch Name</label>
            <input
              name='name'
              id='name'
              placeholder='Ex. Jonathan'
              onChange={(e) => setBranchName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor='location'>Branch Location</label>
            <input
              name='location'
              id='location'
              placeholder='Ex. Lekki'
              onChange={(e) => setBranchLocation(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor='number' onClick={() => console.log(phone)}>
              Branch Number
            </label>
            <PhoneInput
              // containerClass=''
              inputClass={`input ${
                phoneError ? ' !border-red-500 !border-[2px]' : ''
              }`}
              name='number'
              id='number'
              country={'ng'}
              countryCodeEditable={false}
              enableTerritories={false}
              disableDropdown={true}
              disableSearchIcon={true}
              showDropdown={false}
              specialLabel=''
              value={phone}
              onChange={(phone) => {
                setPhone(`+${phone}`);
                setPhoneErrror('');
              }}
            />
            {phoneError && (
              <p className=' !text-[1.4rem] !text-red-500'>
                *{phoneError ?? 'Phone number must be valid'}
              </p>
            )}
          </div>

          <hr />
          <div className='btns'>
            <Actions
              setLocation={() => setModal(false)}
              title={'Publish'}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default AddBranchModal;

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
      font-size: 1.4rem;
    }
    .input {
      background: #f8f9fd;
      border: 1px solid #bebdbd;
      border-radius: 10px;
      width: 100%;
      padding: 1.5rem 2rem;
      font-size: 1.4rem;
    }
    .btns {
      text-align: center;
    }
  }
`;
