import React from 'react';
import styled from 'styled-components';

const Notifications = ({ setEmailModal, setDirectModal, setPushModal }) => {
  return (
    <Wrapper2>
      <div className='row'>
        <div className='row-leading'>
          <h3>Email Template</h3>
          <p>Send users updates and newsletters</p>
        </div>
        <div className='row-trailing' onClick={() => setEmailModal(true)}>
          Send Email Notification
        </div>
      </div>
      <div className='row'>
        <div className='row-leading'>
          <h3>Direct Message</h3>
          <p>Send users direct mails and notifications</p>
        </div>
        <div className='row-trailing' onClick={() => setDirectModal(true)}>
          Send Direct Message
        </div>
      </div>
      <div className='row'>
        <div className='row-leading'>
          <h3>Push Notifications</h3>
          <p>Send push notifications to users</p>
        </div>
        <div className='row-trailing' onClick={() => setPushModal(true)}>
          Send Push Notification
        </div>
      </div>
    </Wrapper2>
  );
};

export default Notifications;

const Wrapper2 = styled.section`
  border: 1px solid #cecccc;
  border-radius: 20px;
  padding: 4rem;
  height: 50rem;

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    .row-leading {
      width: 50%;

      h3 {
        font-size: 2rem;
        font-weight: 600;
        color: rgba(87, 87, 87, 1);
      }
      p {
        font-size: 1.4rem;
        color: rgba(150, 150, 150, 1);
      }
    }
    .row-trailing {
      font-size: 1.6rem;
      font-weight: 700;
      color: #a307a8;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
