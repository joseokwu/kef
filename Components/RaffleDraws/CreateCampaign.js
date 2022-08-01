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
  const [intervalOfDraw, setIntervalOfDraw] = useState('10 Minutes');
  const [amountPerTicket, setAmountPerTicket] = useState();
  const [winnerPerInterval, setWinnerPerInterval] = useState();
  const [cycleOfDraw, setCycleOfDraw] = useState();
  const [gifts, setGifts] = useState([
    {
      giftName: 'string',
      giftQuantity: 0,
    },
  ]);
  const [giftsCategory, setGiftsCategory] = useState([
    {
      categoryName: 'string',
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
          mainGifts[i].giftQuantity = e.target.value;
        }
      }
    }
    setGifts(mainGifts);
  };

  console.log(gifts);

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
    '10 Minutes',
    '20 Minutes',
    '30 Minutes',
    '1 Hour',
    '2 Hours',
  ];

  const duration = ['1 Week', '2 Weeks', '3 Weeks'];

  const details = {
    campaignTitle,
    typeOfDraw,
    campaignDuration,
    campaignStartDate,
    drawStartDate,
    drawDays,
    drawTime,
    winnerPerCategory,
    intervalOfDraw,
    amountPerTicket,
    winnerPerInterval,
    cycleOfDraw,
    gifts,
  };

  const handleSubmit = () => {
    createCampaign({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      details,
      setModal,
    });
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
                {gifts.map((item, index) => {
                  return (
                    <div className='gifts-frame' key={index}>
                      <TimeFrameNoTitle
                        // category={category3}
                        trailing={'Item'}
                        onChange={(e) => handleGifts(e, 'name', index)}
                      />
                      <span className='x'>x</span>
                      <TimeFrameNoTitle
                        // category={category3}
                        trailing={'Number of winners'}
                        onChange={(e) => handleGifts(e, 'number', index)}
                      />
                      {/* <div className='cancel-icon'>
                        <Image
                          src={'/cancel.svg'}
                          height={20}
                          width={20}
                          alt={'cancel'}
                        />
                      </div> */}
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
          ) : (
            <>
              <SelectBox
                label={'Interval of draw'}
                subtitle={'Choose how long for the draw'}
                options={intervals}
                disabled={false}
                onChange={(e) => setIntervalOfDraw(e.target.value)}
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

                      <TimeFrameNoTitle
                        // category={category3}
                        trailing={'Number of winners'}
                        onChange={(e) => handleGifts(e, 'number', index)}
                      />
                    </div>
                  );
                })}
                <button
                  onClick={() => setProgressiveGifts([...progressiveGifts, 1])}
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
    width: 40%;
    margin-bottom: 2rem;
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
