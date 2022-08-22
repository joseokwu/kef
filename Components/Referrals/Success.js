import React from 'react';
import { Dialog } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Success = ({ setModal, modal, setLocation, referralLink }) => {
  const router = useRouter();
  const handleClose = () => {
    window.location.reload();
    setModal(false);
  };
  return (
    <Dialog onClose={handleClose} open={modal}>
      <Wrapper>
        <div className='cancel' onClick={handleClose}>
          <Image src={'/cancel.svg'} height={30} width={30} alt='cancel' />
        </div>
        <div className='content'>
          <div className='warning'>
            <Image
              src={'/success-check.svg'}
              height={130}
              width={130}
              alt='warning'
            />
          </div>

          <h3>Link Generated</h3>
          <p>You have successfully added a celebrity and generated link</p>
          <div className='link-box'>
            <p>
              User Link
              <span>- {referralLink && referralLink}</span>
              <Image
                src={'/copy.svg'}
                height={18}
                width={18}
                alt={'copy'}
                onClick={() => navigator.clipboard.writeText(referralLink)}
              />
            </p>
          </div>
          <button onClick={handleClose}>Go to referrals</button>
        </div>
      </Wrapper>
    </Dialog>
  );
};

export default Success;

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 44rem;
  height: 50rem;
  padding: 4rem 4rem;
  img {
    cursor: pointer;
  }

  .cancel {
    display: flex;
    justify-content: flex-end;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    .link-box {
      padding: 2rem;
      background: #f8f9fd;
      border: 1px solid #bebdbd;
      border-radius: 10px;

      p {
        font-size: 12px;
        font-weight: 400;
        color: #706c6c;
        /* margin-bottom: 0.2rem; */
        margin-left: auto;
        margin-right: auto;
        span {
          font-weight: 700;
          margin-left: 0.2rem;
          margin-right: 1rem;
        }
      }
    }

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
      /* border: 1px solid #fdc558; */
      color: #a307a8;
    }
  }
`;
