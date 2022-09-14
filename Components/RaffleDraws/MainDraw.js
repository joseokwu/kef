import React, { useEffect, useRef, useState } from 'react';
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
import authFetch from '../../axios/admin';

const MainDraw = ({ list, id }) => {
  // const [list, setList] = useState();
  const [loading, setLoading] = useState(false);
  const [initialTime, setInitialTime] = useState();
  const [time, setTime] = useState(0);
  const [timePct, setTimePct] = useState(100);
  const [winners, setWinners] = useState([[]]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [confetti, setConfetti] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [index, setIndex] = useState(1);
  const [activateNav, setActivateNav] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [passError, setPassError] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [startFetching, setStartFetching] = useState(true);
  const [waiting, setWaiting] = useState(true);
  const [resData, setResData] = useState();
  const [date, setDate] = useState('');
  const [navs, setNavs] = useState([]);
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
      activeDrawDetails: {
        campaignDetail: { typeOfDraw, status },
        cycles,
        draw,
        iterations,
        nextTime,
      },
    },
  } = useRaffleDraw();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // const nextTime = '2022-09-05T00:10:40.349Z';

  function formatDate(dateToFormat) {
    return `${new Date(dateToFormat).getDate()} ${
      months[new Date(dateToFormat).getMonth()]
    }, ${new Date(dateToFormat).getFullYear()}`;
  }

  // const navs = [

  // ];

  const data = [
    {
      winners: [
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
      status: 'Completed',
    },
    {
      winners: [
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
      status: 'Completed',
    },
    {
      winners: [
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
      status: 'Pending',
    },
    {
      winners: [
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
    },
    {
      winners: [
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
    },
  ];

  // useEffect(() => {
  //   if (cycles) {
  //     let tempWinners = [];
  //     // for (let index = 0; index < cycles; index++) {
  //     //   tempWinners.push(new Array());
  //     // }
  //     setWinners([]);
  //   }
  // }, [cycles]);
  // console.log(winners);

  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  //   //Remember the latest callback
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   // Set up the interval
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       const id = setInterval(tick, delay);
  //       return () => {
  //         clearInterval(id);
  //       };
  //     }
  //   }, [callback, delay]);
  // }

  // useInterval(async () => {
  //   console.log('Checking if ready to download');
  //   const data = await authFetch.get(`/draw/get-active-draws/${id}`);
  //   console.log(resData);
  //   setResData(data);
  // }, 15000);

  const handleOnComplete = () => {
    setListIndex(listIndex + 1);
    setShowCountdown(false);
  };

  const handleType = (val) => {
    if (!activateNav) {
      return;
    }
    setTitle(val);
    const navIndex = navs.indexOf(val);
    setListIndex(navIndex);

    // if (val === 'Category 1') {
    //   setListIndex(0);
    // }
  };

  useEffect(() => {
    if (startFetching) {
      getActiveDraws({
        toggleAlertBar,
        toggleLoad,
        setPassError,
        uuid: id,
        setLoading,
      });
    }
    setStartFetching(false);
  }, [id, startFetching]);

  useEffect(() => {
    if (nextTime) {
      const d = Date.parse(nextTime) - Date.parse(new Date());
      setTime(d);
      setInitialTime(d);
      console.log(d);
    }
  }, [nextTime]);

  useEffect(() => {
    if (winners.length > 0 && iterations.length > 0) {
      console.log('winners list greater than 0');
      console.log(winners.length, parseInt(cycles));
      if (navs.length < parseInt(cycles)) {
        console.log('add nav');

        let tempNavs = [...navs];
        if (!tempNavs.includes(`Iteration ${listIndex + 1}`)) {
          tempNavs.push(`Iteration ${listIndex + 1}`);
          setNavs(tempNavs);
        }
        setTitle(`Iteration ${listIndex + 1}`);
      }

      // if (
      //   winners?.length === parseInt(cycles) &&
      //   winners[parseInt(cycles) - 1]?.length ===
      //     iterations[parseInt(cycles) - 1]?.winners?.length
      // ) {
      //   console.log('finished');
      //   if (activateNav) {
      //     console.log('hihu');
      //     return;
      //   }
      //   setConfetti(true);
      //   setActivateNav(true);
      //   return;
      // }
      console.log(iterations[listIndex]?.status);
      if (iterations[listIndex]?.status === 'Completed') {
        console.log('check if winners in data list completed');
        if (
          winners[listIndex]?.length === iterations[listIndex]?.winners?.length
        ) {
          console.log('check if winners list finished pushing');
          setIndex(1);
          // setListIndex(listIndex + 1);
          setShowCountdown(true);
          if (winners?.length < parseInt(cycles)) {
            console.log('push new list to winners');
            setWinners([...winners, []]);
          }
        } else {
          console.log('push another winner');
          setIndex(index + 1);
        }
        const interval = setInterval(() => {
          console.log('interval start');
          if (
            winners[listIndex]?.length < iterations[listIndex]?.winners?.length
          ) {
            console.log('winners list not yet complete');
            setWinners(() => {
              let newWinners = [...winners];
              newWinners[listIndex]?.push(
                iterations[listIndex]?.winners[index - 1]
              );
              return newWinners;
            });
          }
        }, 2000);

        return () => clearInterval(interval);
      } else {
        console.log('waiting');
        setWaiting(true);
      }
      if (
        winners?.length === parseInt(cycles) &&
        winners[parseInt(cycles) - 1]?.length ===
          iterations[parseInt(cycles) - 1]?.winners?.length
      ) {
        console.log('finished');
        if (activateNav) {
          console.log('hihu');
          return;
        }
        setConfetti(true);
        setActivateNav(true);
        return;
      }
    }
  }, [winners, listIndex, list, iterations]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (confetti) {
        setConfetti(false);
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [confetti]);

  useEffect(() => {
    if (time <= 0) {
      setStartFetching(true);
      return;
    }
    const interval = setInterval(() => {
      if (time >= 0) {
        setTime(time - 1000);
        const perc = (time / initialTime) * 100;
        setTimePct((prev) => perc);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      {showCountdown && (
        <CircularCountdown onComplete={handleOnComplete} title={title} />
      )}
      <Wrapper>
        <div className={fullScreen ? 'b' : ''}>
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
                <h3 onClick={() => console.log(winners.length)}>
                  Cycle {draw && draw}
                </h3>
                {status === 'Completed' ? (
                  ''
                ) : (
                  <p>
                    The next raffle draw will happen on {formatDate(nextTime)}{' '}
                  </p>
                )}
              </div>
              <div className='timer'>
                {/* {status === 'Complete' ? (
                  <p className='status'>Completed</p>
                ) : ( */}
                <CountDown time={time} />
                {/* )} */}
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
            {/* {!fullScreen && activateNav && (
              <div className='ml-auto flex gap-4 w-[38%]'>
                <Filter />
                <SearchAdmin
                // onChange={(e) => setSearch(e.target.value)}
                ></SearchAdmin>
              </div>
            )} */}
          </section>
          <Wrapper2>
            <div className='card-container'>
              <h2 className='title'>{title} Winners</h2>
              {loading ? (
                <Loading />
              ) : winners[listIndex]?.length > 0 ? (
                winners[listIndex]
                  ?.map((item, index) => {
                    return <RaffleCard item={item} index={index} key={index} />;
                  })
                  .reverse()
              ) : (
                <Wrapper4>No Winners Available</Wrapper4>
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
        /* margin-bottom: 2rem; */
      }
      .timer {
        margin-left: auto;
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

const Wrapper4 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: gray;
`;
