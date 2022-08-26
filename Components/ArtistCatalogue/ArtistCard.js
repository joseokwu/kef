import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useArtistCatalogue from '../../hooks/admin/useArtistCatalogue';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import LoadingSmall from '../LoadingSmall';

const ArtistCard = ({ item, setView, setModal }) => {
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const [isLoading, setIsLoading] = useState(false);
  const [passError, setPassError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { togglePublish, getArtistCatalogue2, stateArtistCatalogue } =
    useArtistCatalogue();

  const handlePublish = (value) => {
    const details = {
      artistId: item?.uuid,
      isPublished: value,
    };
    togglePublish({
      toggleAlertBar,
      toggleLoad: setIsLoading,
      setPassError,
      details,
      setSuccess,
    });
  };

  useEffect(() => {
    if (success) {
      getArtistCatalogue2({ toggleAlertBar, toggleLoad });
    }
  }, [success]);
  return (
    <Wrapper>
      <span className='image'>
        <h1>{item.artistName.slice(0, 2).toUpperCase()}</h1>
      </span>
      <div className='info'>
        <h2>{item?.artistName}</h2>
        <p>Music Artist</p>
        <div className='btn-container'>
          <button
            className={item?.isPublished ? 'unpublish' : 'publish'}
            onClick={() => handlePublish(!item?.isPublished)}
          >
            {isLoading ? (
              <LoadingSmall></LoadingSmall>
            ) : item?.isPublished ? (
              'Unpublish'
            ) : (
              'Publish'
            )}
          </button>
          <button
            className='view'
            onClick={() =>
              router.push({
                pathname: '/single-catalogue',
                query: { id: item?.uuid },
              })
            }
          >
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
