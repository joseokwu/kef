import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MusicCard from '../Cards/MusicCard';
import GoBack from '../GoBack';
import MusicPopUp from './MusicPopUp';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useArtistCatalogue from '../../hooks/admin/useArtistCatalogue';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const SingleArtistCatalogue = () => {
  const [activeNav, setActiveNav] = useState('Albums');
  const [popUp, setPopUp] = useState(false);
  const [catalogueIndex, setCatalogueIndex] = useState();
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const [passError, setPassError] = useState('');

  const router = useRouter();
  const {
    getSingleCatalogue,
    stateArtistCatalogue: {
      singleCatalogue: { catalogues },
    },
  } = useArtistCatalogue();

  const { id } = router.query;

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

  useEffect(() => {
    if (id) {
      getSingleCatalogue({ toggleAlertBar, toggleLoad, setPassError, id: id });
    }
  }, [id]);
  return (
    <Wrapper>
      <GoBack text={'Go Back'} onClick={() => router.back()} />
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
        {catalogues?.length > 0 ? (
          catalogues?.map((item, index) => {
            return (
              <MusicCard
                item={item}
                index={index}
                setCatalogueIndex={setCatalogueIndex}
                key={index}
                popUp={popUp}
                setPopUp={() => setPopUp(true)}
              />
            );
          })
        ) : (
          <Wrapper1>No Catalogue Available</Wrapper1>
        )}
        {popUp && (
          <MusicPopUp
            popUp={popUp}
            setPopUp={setPopUp}
            info={catalogues[catalogueIndex]}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default SingleArtistCatalogue;

const Wrapper = styled.section`
  position: relative;
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

const Wrapper1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: gray;
  border: 1px solid #cecccc;
  border-radius: 20px;
  height: 30rem;
  width: 100%;
  padding: 3rem 3rem;
  box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
`;
