import React from 'react';
import styled from 'styled-components';

const Finance = ({ setNigerianModal, setDiasporaModal, setCategoryModal }) => {
  return (
    <Wrapper2>
      <div className='row'>
        <div className='row-leading'>
          <h3>Nigerian Payment</h3>
          <p>Set the amount for tickets for local user</p>
        </div>
        <div className='row-trailing' onClick={() => setNigerianModal(true)}>
          Set Payment
        </div>
      </div>
      <div className='row'>
        <div className='row-leading'>
          <h3>Category List & Amount</h3>
          <p>Set the categories and amounts per category</p>
        </div>
        <div className='row-trailing' onClick={() => setCategoryModal(true)}>
          Set List & Amount
        </div>
      </div>
      <div className='row'>
        <div className='row-leading'>
          <h3>Diaspora Payment</h3>
          <p>Set the amount and currency for foreign users</p>
        </div>
        <div className='row-trailing' onClick={() => setDiasporaModal(true)}>
          Set Payment
        </div>
      </div>
    </Wrapper2>
  );
};

export default Finance;

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
