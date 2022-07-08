import React from 'react';
import styled from 'styled-components';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';

const Actions = ({ onClick }) => {
  const { setAutoPage } = useRaffleDraw();

  return (
    <Wrapper>
      <button className='cancel' onClick={() => setAutoPage('cards')}>
        Cancel
      </button>{' '}
      <button className='activate' onClick={onClick ? onClick : () => {}}>
        Activate
      </button>
    </Wrapper>
  );
};

export default Actions;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 1.6rem;
  margin-top: 4rem;
  margin-right: 16rem;

  button {
    border-radius: 10px;
    padding: 20px 14px;
    font-weight: 700;
    width: 20%;
  }
  .cancel {
    background: #f0f0f0;
  }
  .activate {
    border: 1px solid #fdc558;
  }
`;
