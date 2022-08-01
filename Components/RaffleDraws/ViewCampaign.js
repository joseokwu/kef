import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import StatV2 from '../Cards/Stats-v2';
import StartDrawModal from './StartDrawModal';
import GoBack from '../GoBack';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import { useRouter } from 'next/router';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import MainDraw from './MainDraw';
import useAuth from '../../hooks/admin/useAuth';

const ViewCampaign = () => {
  const [list, setList] = useState(false);
  const [modal, setModal] = useState(false);
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();

  const { id, type, status } = router.query;
  // const [fullScreen, setFullScreen] = useState(false);
  const {
    setAutoPage,
    toggleFullScreen,
    getProgressiveDrawDetails,
    startProgressiveDraw,
    stateRaffleDraw: {
      fullScreen,
      progressiveDrawDetails: { totalSubscribers, raffleWinners },
    },
  } = useRaffleDraw();

  const { setActivePage } = useAuth();

  const handleStartDrawModal = () => {
    setModal(true);
  };

  const startDraw = () => {
    setList(true);
    startProgressiveDraw({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      uuid: id,
    });
  };

  useEffect(() => {
    setActivePage('Raffle Draws');
    if (type === 'Progressive') {
      getProgressiveDrawDetails({
        setPassError,
        toggleAlertBar,
        toggleLoad,
        uuid: id,
      });
    }
    if (status === 'Active' || status === 'Completed') {
      setList(true);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, type]);

  return (
    <>
      <StartDrawModal setModal={setModal} modal={modal} startDraw={startDraw} />
      <GoBack
        text={'Kennis Music Festival'}
        onClick={() => {
          router.back();
          toggleFullScreen(false);
        }}
      />
      {!fullScreen && (
        <>
          <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem] mb-[3rem]'>
            <StatV2
              value={totalSubscribers && totalSubscribers}
              title={'Total Subscribers'}
            ></StatV2>
            <StatV2 value={10} title={'Raffle Draw Completed'}></StatV2>
            <StatV2
              value={raffleWinners && raffleWinners}
              title={'Raffle Winners'}
            ></StatV2>
          </section>
          <hr />
        </>
      )}

      {!list ? (
        <Wrapper1 className='main'>
          <div className='start-draw' onClick={handleStartDrawModal}>
            <Image
              src={'/start-draw-red.svg'}
              alt='start draw'
              width={200}
              height={200}
            />
          </div>
        </Wrapper1>
      ) : (
        <MainDraw list={list} id={id} type={type} />
      )}
    </>
  );
};

export default ViewCampaign;

const Wrapper1 = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  margin-top: 5rem;
  border-radius: 20px;
  background: #f5f4f4;
  .start-draw {
    cursor: pointer;
  }
  .start-draw:active {
    transform: translateY(4px);
  }
`;
