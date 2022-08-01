import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import StatV2 from '../Cards/Stats-v2';
import CountDown from './Countdown';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RaffleCard from './RaffleCard';
import NavV1 from '../NavPill/V1';
import Filter from '../Filter';
import SearchAdmin from '../Form/searchAdmin';
import StartDrawModal from './StartDrawModal';
import GoBack from '../GoBack';
import Confetti1 from '../Confetti';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import CircularCountdown from '../CircularCountdown';
import Loading from '../Loading';
import { useRouter } from 'next/router';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const MainDraw = ({ list, id }) => {
  // const [list, setList] = useState();
  const [initialTime, setInitialTime] = useState(120000);
  const [time, setTime] = useState(initialTime);
  const [timePct, setTimePct] = useState(100);
  const [winners, setWinners] = useState([[], [], [], [], [], []]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('Category 1');
  const [confetti, setConfetti] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [index, setIndex] = useState(1);
  const [activateNav, setActivateNav] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [passError, setPassError] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [date, setDate] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();

  const {
    setAutoPage,
    toggleFullScreen,
    getActiveDraws,
    getProgressiveDrawDetails,
    stateRaffleDraw: {
      fullScreen,
      activeDrawDetails: { cycles, iterations, nextTime },
    },
  } = useRaffleDraw();

  const navs = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
  ];

  const data = [
    [
      {
        number: '01',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Joshua Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
    [
      {
        number: '01',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Joshua Parag',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
    [
      {
        number: '01',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
    [
      {
        number: '01',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
    [
      {
        number: '01',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
    [
      {
        number: '01',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '02',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '03',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '04',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '05',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '06',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '07',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '08',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '09',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
      {
        number: '10',
        name: 'Martin Nwagu',
        ticket: '1233334444',
        prize: 'N100,000',
        category: '1',
      },
    ],
  ];

  const handleOnComplete = () => {
    setListIndex(listIndex + 1);
    setShowCountdown(false);
  };

  const handleType = (val) => {
    if (!activateNav) {
      return;
    }
    setTitle(val);
    if (val === 'Category 1') {
      setListIndex(0);
    }
    if (val === 'Category 2') {
      setListIndex(1);
    }
    if (val === 'Category 3') {
      setListIndex(2);
    }
    if (val === 'Category 4') {
      setListIndex(3);
    }
    if (val === 'Category 5') {
      setListIndex(4);
    }
    if (val === 'Category 6') {
      setListIndex(5);
    }
  };

  useEffect(() => {
    getActiveDraws({ toggleAlertBar, toggleLoad, setPassError, uuid: id });
  }, [id]);

  // useEffect(() => {
  //   if (nextTime) {
  //     const newTime = new Date(nextTime) - new Date(Date.now());
  //     console.log(newTime);
  //     setInitialTime(newTime);
  //   }
  // }, [nextTime]);

  useEffect(() => {
    if (winners[5].length === data[5].length) {
      if (activateNav) {
        return;
      }
      setConfetti(true);
      setActivateNav(true);
      return;
    }

    if (list) {
      if (listIndex === 0) {
        setTitle('Category 1');
      }
      if (listIndex === 1) {
        setTitle('Category 2');
      }
      if (listIndex === 2) {
        setTitle('Category 3');
      }
      if (listIndex === 3) {
        setTitle('Category 4');
      }
      if (listIndex === 4) {
        setTitle('Category 5');
      }
      if (listIndex === 5) {
        setTitle('Category 6');
      }

      if (winners[listIndex].length === data[listIndex].length) {
        setIndex(1);
        setShowCountdown(true);
        // setListIndex(listIndex + 1);
      } else {
        setIndex(index + 1);
      }
      const interval = setInterval(() => {
        if (winners[listIndex].length < data[listIndex].length) {
          setWinners(() => {
            let newWinners = [...winners];
            newWinners[listIndex].push(data[listIndex][index - 1]);
            return newWinners;
          });
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [winners, listIndex, list]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (confetti) {
        setConfetti(false);
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [confetti]);

  useEffect(() => {
    // if (initialTime <= 0) {
    //   setTime(0);
    //   setTimePct(0);
    //   return;
    // }
    const interval = setInterval(() => {
      if (time >= 0) {
        setTime(time - 1000);
        setTimePct((time / initialTime) * 100);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      {showCountdown && (
        <CircularCountdown
          onComplete={handleOnComplete}
          title={title}
          listIndex={listIndex}
        />
      )}
      <Wrapper>
        <div className={fullScreen && 'b'}>
          {fullScreen ? (
            <span
              className='fullscreen'
              onClick={() => toggleFullScreen({ value: false })}
            >
              Minimize Full Screen
            </span>
          ) : (
            <span
              className='fullscreen'
              onClick={() => toggleFullScreen({ value: true })}
            >
              Make Section Full Screen
            </span>
          )}
          <div className='top'>
            <div className='top-left'>
              <div className='top-text'>
                <h3>Week 1 of 6</h3>
                <p>The next raffle draw will happen on 20 April, 2022. </p>
                {/* <span className='fullscreen'>Make Full Screen</span> */}
              </div>
              <div className='timer'>
                {time > 0 ? (
                  <CountDown time={time} />
                ) : (
                  <p className='status'>Completed</p>
                )}
              </div>
            </div>
            <div className='start-draw2'>
              <CircularProgressbarWithChildren
                value={timePct}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: '#C6155F',
                  trailColor: 'transparent',
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <Image
                  src={'/start-draw-grey.svg'}
                  alt='start draw'
                  width={150}
                  height={150}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <section className='mt-[6rem] flex items-center mb-[2rem]'>
            <NavV1
              activeNav={title}
              navs={navs}
              onChange={(val) => {
                handleType(val);
              }}
            />
            {!fullScreen && activateNav && (
              <div className='ml-auto flex gap-4 w-[38%]'>
                <Filter />
                <SearchAdmin
                // onChange={(e) => setSearch(e.target.value)}
                ></SearchAdmin>
              </div>
            )}
          </section>
          <Wrapper2>
            <div className='card-container'>
              <h2 className='title'>{title} Winners</h2>
              {winners[listIndex].length > 0 ? (
                winners[listIndex]
                  ?.map((item, index) => {
                    return <RaffleCard item={item} index={index} key={index} />;
                  })
                  .reverse()
              ) : (
                <Loading />
              )}
            </div>
          </Wrapper2>
          {confetti && <Confetti1 />}
        </div>
      </Wrapper>
    </>
  );
};

export default MainDraw;

const Wrapper = styled.main`
  margin-top: 3rem;
  .b {
    margin-left: 26rem;
  }
  .fullscreen {
    border: 1px solid #c6155f;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #000000;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }
  .top {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-top: 3rem;
    /* height: 20rem; */

    .start-draw2 {
      cursor: pointer;
      width: 16rem;
    }
    .start-draw2:active {
      transform: translateY(4px);
    }

    .top-left {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      border-radius: 20px;
      width: 60%;
      /* height: 60%; */
      padding: 2rem;
      h3 {
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        font-size: 1.4rem;
        width: 70%;
        margin-bottom: 2rem;
      }
      .timer {
        /* width: 30%; */
        .status {
          font-size: 1.8rem;
          font-weight: 700;
          border: 1px solid rgba(163, 7, 168, 1);
          width: 100%;
          padding: 1rem 2rem;
          border-radius: 10px;
        }
      }
    }
  }
`;

const Wrapper2 = styled.section`
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-left: auto;
  margin-right: auto; */
  border: 1px solid #cecccc;
  border-radius: 20px;
  width: 80%;
  padding: 3rem 3rem;

  .card-container {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-wrap: wrap; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: 0.6s ease-in;
    .title {
      font-size: 20px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 1rem;
    }
  }
`;
