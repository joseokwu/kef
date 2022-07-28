import React from 'react';
import styled from 'styled-components';

const ArtistCard = ({ item, setView, setModal }) => {
  return (
    <Wrapper>
      <span className='image'>
        <h1>JN</h1>
      </span>
      <div className='info'>
        <h2>Joshua Nwagu</h2>
        <p>Music Artist</p>
        <div className='btn-container'>
          <button
            className={item.type === 'Publish' ? 'publish' : 'unpublish'}
            onClick={item.type === 'Publish' ? () => setModal(true) : () => {}}
          >
            {item.type}
          </button>
          <button className='view' onClick={() => setView(true)}>
            View Catalogue
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArtistCard;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  border: 1px solid #a307a8;
  border-radius: 20px;
  /* width: 30rem; */
  padding: 1rem 1.5rem;
  /* .info {
    width: 100%;
  } */
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a307a8;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  h1 {
    /* margin-top: auto;
    margin-bottom: auto; */
    font-size: 2.4rem;
    font-weight: bold;
    color: #e0e0e0;
    /* width: 20%; */
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #706c6c;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #706c6c;
  }
  .btn-container {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    button {
      font-size: 10px;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }
    .publish {
      color: #348b52;
      border: 1px solid #348b52;
    }
    .unpublish {
      color: #d82023;
      border: 1px solid #d82023;
    }
    .view {
      color: #252525;
      border: 1px solid #252525;
    }
  }
`;
