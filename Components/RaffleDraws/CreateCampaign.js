import React, { useEffect, useState } from 'react';
import SelectBox from './SelectBox';
import styled from 'styled-components';
import TimeBox from './TimeBox';
import Actions from './Actions';
import TimeFrame from './TimeFrame';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import DateBox from './DateBox';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import GoBack from '../GoBack';
import Success from '../Success';
import { useRouter } from 'next/router';
import TimeFrameNoTitle from './TimeFrameNoTitle';
import TimeFrameNoTitle2 from './TimeFrameNoTitle2';
import Image from 'next/image';

const CreateCampaign = ({ setLocation }) => {
  const [passError, setPassError] = useState('');
  const [progressiveGifts, setProgressiveGifts] = useState([1]);
  const [campaignTitle, setCampaignTitle] = useState('');
  const [typeOfDraw, setTypeOfDraw] = useState('Weekly');
  const [campaignDuration, setCampaignDuration] = useState();
  const [campaignStartDate, setCampaignStartDate] = useState();
  const [drawStartDate, setDrawStartDate] = useState();
  const [drawDays, setDrawDays] = useState('Monday');
  const [drawTime, setDrawTime] = useState();
  const [winnerPerCategory, setWinnerPerCategory] = useState();
  const [intervalOfDraw, setIntervalOfDraw] = useState('minutes10');
  const [amountPerTicket, setAmountPerTicket] = useState();
  const [winnerPerInterval, setWinnerPerInterval] = useState();
  const [cycleOfDraw, setCycleOfDraw] = useState(0);
  const [gifts, setGifts] = useState([
    {
      giftName: 'string',
      giftQuantity: 0,
    },
  ]);

  const [gifts2, setGifts2] = useState([
    {
      giftName: 'string',
      giftQuantity: 0,
    },
    {
      giftName: 'string',
      giftQuantity: 0,
    },
    {
      giftName: 'string',
      giftQuantity: 0,
    },
    {
      giftName: 'string',
      giftQuantity: 0,
    },
    {
      giftName: 'string',
      giftQuantity: 0,
    },
    {
      giftName: 'string',
      giftQuantity: 0,
    },
  ]);

  const [modal, setModal] = useState(false);
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const { createCampaign } = useRaffleDraw();
  const router = useRouter();

  const handleGifts = (e, value, i) => {
    let mainGifts = [...gifts];
    if (mainGifts.length < i + 1) {
    }

    for (let index = 0; index < gifts.length; index++) {
      if (index === i) {
        if (value === 'name') {
          mainGifts[i].giftName = e.target.value;
        }
        if (value === 'number') {
          mainGifts[i].giftQuantity = parseInt(e.target.value);
        }
      }
    }
    setGifts(mainGifts);
  };

  const handleGifts2 = (e, i) => {
    let mainGifts = [...gifts2];
    mainGifts[i] = e.target.value;
    setGifts2(mainGifts);
  };

  const handleInterval = (interval) => {
    if (interval === '1 minute') {
      return 'minutes1';
    }
    if (interval === '10 minutes') {
      return 'minutes10';
    }
    if (interval === '20 minutes') {
      return 'minutes20';
    }
    if (interval === '30 minutes') {
      return 'minutes30';
    }
    if (interval === '120 minutes') {
      return 'minutes120';
    }
    if (interval === '1 hour') {
      return 'hour1';
    }
    if (interval === '2 hours') {
      return 'hours2';
    }
  };

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const intervals = [
    '1 minute',
    '10 minutes',
    '20 minutes',
    '30 minutes',
    '120 minutes',
    '1 hour',
    '2 hours',
  ];

  const duration = ['1', '2', '3'];

  const weeklyDetails = {
    campaignTitle,
    typeOfDraw,
    campaignDuration: parseInt(campaignDuration),
    campaignStartDate,
    drawStartDate,
    drawDays,
    drawTime,
    winnerPerCategory: parseInt(winnerPerCategory),
    giftsCategory: gifts2,
  };
  const progressiveDetails = {
    campaignTitle,
    typeOfDraw,
    intervalOfDraw,
    amountPerTicket: parseInt(amountPerTicket),
    winnerPerInterval: parseInt(winnerPerInterval),
    cycleOfDraw: parseInt(cycleOfDraw),
    gifts,
  };

  const handleSubmit = () => {
    if (typeOfDraw === 'Weekly') {
      console.log(weeklyDetails);
      createCampaign({
        toggleAlertBar,
        toggleLoad,
        setPassError,
        details: weeklyDetails,
        setModal,
      });
    } else {
      createCampaign({
        toggleAlertBar,
        toggleLoad,
        setPassError,
        details: progressiveDetails,
        setModal,
      });
    }
  };

  return (
    <>
      <GoBack text={'Create New Campaign'} onClick={() => router.back()} />
      <Wrapper>
        <InputBox
          label={'Campaign Title'}
          subtitle={'Put in a name for your campaign'}
          disabled={false}
          onChange={(e) => setCampaignTitle(e.target.value)}
        />

        <div className=''>
          <SelectBox
            label={'Type of Draw'}
            subtitle={'Choose the type of raffle draw process'}
            options={['Weekly', 'Progressive']}
            disabled={false}
            onChange={(e) => setTypeOfDraw(e.target.value)}
          />
        </div>
        <div className='winners'>
          {typeOfDraw === 'Weekly' ? (
            <>
              <SelectBox
                label={'Campaign Duration'}
                subtitle={
                  'Choose how long for the campaign. All campaigns occurs in weeks'
                }
                options={duration}
                disabled={false}
                onChange={(e) => setCampaignDuration(e.target.value)}
              />
              <DateBox
                label={'Campaign Start Date'}
                subtitle={'Choose a the date of your campaign'}
                onChange={(e) => setCampaignStartDate(e.target.value)}
              />
              <DateBox
                label={'Draw start day'}
                subtitle={'Choose a the date for your draw to start'}
                onChange={(e) => setDrawStartDate(e.target.value)}
              />
              <SelectBox
                label={'Draw days'}
                subtitle={'Choose the days for your draw'}
                options={days}
                disabled={false}
                onChange={(e) => setDrawDays(e.target.value)}
              />
              <TimeBox
                label={'Draw time'}
                // category={category3}
                subtitle={'Choose a the time for your draw'}
                onChange={(e) => setDrawTime(e.target.value)}
              />{' '}
              <TimeFrame
                label={'Winners per category'}
                // category={category3}
                subtitle={'Choose how many winners for each category'}
                trailing={'Per Category'}
                onChange={(e) => setWinnerPerCategory(e.target.value)}
              />
              <div className='gifts'>
                <h2>Gift To Be Won</h2>

                <div className='gifts-frame'>
                  <label htmlFor=''>Category 1</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => setGifts2([])}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                <div className='gifts-frame'>
                  <label htmlFor=''>Category 2</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => handleGifts2(e, index)}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                <div className='gifts-frame'>
                  <label htmlFor=''>Category 3</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => handleGifts2(e, index)}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                <div className='gifts-frame'>
                  <label htmlFor=''>Category 4</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => handleGifts2(e, index)}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                <div className='gifts-frame'>
                  <label htmlFor=''>Category 5</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => handleGifts2(e, index)}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                <div className='gifts-frame'>
                  <label htmlFor=''>Category 6</label>
                  <TimeFrameNoTitle
                    // category={category3}
                    trailing={'Item'}
                    // onChange={(e) => handleGifts2(e, index)}
                  />
                  <span className='x'>x</span>
                  <TimeFrameNoTitle2
                    // category={category3}
                    trailing={'Number of winners'}
                    // onChange={(e) => handleGifts(e, 'number', index)}
                  />
                </div>
                {/* <div className='cancel-icon'>
                        <Image
                          src={'/cancel.svg'}
                          height={20}
                          width={20}
                          alt={'cancel'}
                        />
                      </div> */}
                {/* <button onClick={() => setGifts2([...gifts2, ''])}>
                  Add Another Item+
                </button> */}
              </div>
            </>
          ) : (
            <>
              <SelectBox
                label={'Interval of draw'}
                subtitle={'Choose how long for the draw'}
                options={intervals}
                disabled={false}
                onChange={(e) =>
                  setIntervalOfDraw(handleInterval(e.target.value))
                }
              />
              <InputBox
                label={'Cycles of draw'}
                subtitle={'Input draw cycles'}
                disabled={false}
                onChange={(e) => setCycleOfDraw(e.target.value)}
              />
              <InputBox
                label={'Amount per ticket'}
                subtitle={'Input amount for the tickets'}
                disabled={false}
                onChange={(e) => setAmountPerTicket(e.target.value)}
              />
              <TimeFrame
                label={'Total winners per interval'}
                // category={category3}
                subtitle={'Choose how many winners for each interval'}
                trailing={'Per Category'}
                onChange={(e) => setWinnerPerInterval(e.target.value)}
              />
              <div className='gifts'>
                <h2>Gift To Be Won</h2>
                {progressiveGifts.map((item, index) => {
                  return (
                    <div className='gifts-frame' key={index}>
                      <TimeFrameNoTitle
                        // category={category3}
                        trailing={'Item'}
                        onChange={(e) => handleGifts(e, 'name', index)}
                      />
                      <span className='x'>x</span>

                      <TimeFrameNoTitle2
                        // category={category3}
                        trailing={'Number of winners'}
                        onChange={(e) => handleGifts(e, 'number', index)}
                      />
                    </div>
                  );
                })}
                <button
                  onClick={() =>
                    setGifts([
                      ...gifts,
                      {
                        giftName: '',
                        giftQuantity: 0,
                      },
                    ])
                  }
                >
                  Add Another Item+
                </button>
              </div>
            </>
          )}
        </div>

        <Actions
          setLocation={() => router.replace('/raffle-draws')}
          onClick={() => handleSubmit()}
          title='Create Campaign'
        />
      </Wrapper>
      <Success
        setModal={setModal}
        modal={modal}
        setLocation={() => router.replace('/raffle-draws')}
      />
    </>
  );
};

export default CreateCampaign;

const Wrapper = styled.section`
  .time {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .gifts {
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #a5abab;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    button {
      margin-top: 1rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: #a307a8;
      text-decoration: underline;
    }
    .cancel-icon {
      /* margin-top: auto; */
      margin-bottom: 2rem;
      cursor: pointer;
    }
  }
  .gifts-frame {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 60%;
    margin-bottom: 2rem;
    label {
      font-size: 1.8rem;
      font-weight: 600;
      color: #575757;
      width: 30%;
    }
    .x {
      display: block;
      /* margin-top: auto; */

      font-size: 2rem;
    }
  }
  .winners {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    border: 1px solid #a307a8;
    border-radius: 20px;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  hr {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;
