import React from 'react';
import styled from 'styled-components';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';

const Actions = ({ onClick, setLocation, title }) => {
  const { setAutoPage } = useRaffleDraw();

  return (
    <Wrapper>
      <button className='cancel' onClick={setLocation}>
        Cancel
      </button>{' '}
      <button className='activate' onClick={onClick ? onClick : () => {}}>
        {title}
      </button>
    </Wrapper>
  );
};

export default Actions;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 1.4rem;
  /* margin-top: 4rem; */
  /* margin-right: 16rem; */

  button {
    border-radius: 10px;
    padding: 15px 10px;
    font-weight: 700;
    width: 15rem;
  }
  .cancel {
    background: #f0f0f0;
  }
  .activate {
    border: 1px solid #fdc558;
    background: linear-gradient(to right, #a608a3, #c6155f, #d82023);
    color: white;
  }
`;
