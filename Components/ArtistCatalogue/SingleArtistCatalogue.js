import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MusicCard from '../Cards/MusicCard';
import GoBack from '../GoBack';
import FullScreenDialog from './MusicPopUp';

const SingleArtistCatalogue = ({ setView }) => {
  const [activeNav, setActiveNav] = useState('Albums');
  const [popUp, setPopUp] = useState(false);

  const data = [
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic1.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic2.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic3.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic1.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic2.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic3.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic1.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic2.svg',
    },
    {
      title: 'Concert Mix',
      year: 2022,
      img: '/artist-pic3.svg',
    },
  ];
  return (
    <Wrapper>
      <GoBack text={'Go Back'} onClick={() => setView(false)} />
      <div className='btn-header'>
        <BtnWrapper>
          <button
            className={activeNav === 'Albums' ? 'active' : ''}
            onClick={() => setActiveNav('Albums')}
          >
            Albums
          </button>
          <button
            className={activeNav === 'Tracks' ? 'active' : ''}
            onClick={() => setActiveNav('Tracks')}
          >
            Tracks
          </button>
        </BtnWrapper>
        <span>
          <Image src={'/filter.svg'} width={15} height={15} alt={'filter'} />{' '}
          <p>Filter</p>
        </span>
      </div>
      <div className='music-list'>
        {data.map((item, index) => {
          return (
            <MusicCard
              item={item}
              key={index}
              popUp={popUp}
              setPopUp={() => setPopUp(true)}
            />
          );
        })}
      </div>
      {popUp && <FullScreenDialog popUp={popUp} setPopUp={setPopUp} />}
    </Wrapper>
  );
};

export default SingleArtistCatalogue;

const Wrapper = styled.section`
  /* position: relative; */
  .music-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .btn-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;

    span {
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.4rem;
      font-weight: 600;
      border: 1px solid #cecccc;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  font-size: 1.8rem;
  color: #a5abab;
  display: flex;
  align-items: center;
  gap: 2rem;

  .active {
    background: linear-gradient(to left, #a608a3, #c6155f, #d82023);
    color: white;
  }

  button {
    padding: 10px 20px 10px 20px;
    width: 15%;
    border-radius: 10px;
    font-weight: 600;
    background: #eaeaea;
    color: black;
    cursor: pointer;
  }
`;
