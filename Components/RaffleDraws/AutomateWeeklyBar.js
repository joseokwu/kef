import React, { useEffect, useState } from 'react';
import SelectBox from './SelectBox';
import styled from 'styled-components';
import TimeBox from './TimeBox';
import Actions from './Actions';
import TimeFrame from './TimeFrame';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const AutomateWeeklyBar = ({ weeklyDrawSettings }) => {
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const [category1, setCategory_1] = useState(
    weeklyDrawSettings?.category_1 || 1
  );
  const [category2, setCategory_2] = useState(
    weeklyDrawSettings?.category_2 || 1
  );
  const [category3, setCategory_3] = useState(
    weeklyDrawSettings?.category_3 || 1
  );
  const [category4, setCategory_4] = useState(
    weeklyDrawSettings?.category_4 || 1
  );
  const [category5, setCategory_5] = useState(
    weeklyDrawSettings?.category_5 || 1
  );
  const [category6, setCategory_6] = useState(
    weeklyDrawSettings?.category_6 || 1
  );
  const [timeFrom, setTimeFrom] = useState(weeklyDrawSettings?.timeFrom || '');
  const [timeTo, setTimeTo] = useState(weeklyDrawSettings?.timeTo || '');
  const [trigger, setTrigger] = useState(
    weeklyDrawSettings?.settingTrigger || ''
  );
  const [day, setDay] = useState(weeklyDrawSettings?.day || '');

  const {
    stateRaffleDraw: { autoPage },
    updateWeeklyDrawSettings,
  } = useRaffleDraw();
  // const [days, setDays] = useState()
  console.log(weeklyDrawSettings);

  const values = {
    trigger,
    day,
    timeFrom,
    timeTo,
    category_1: parseInt(category1),
    category_2: parseInt(category2),
    category_3: parseInt(category3),
    category_4: parseInt(category4),
    category_5: parseInt(category5),
    category_6: parseInt(category6),
  };

  const runUpdate = () => {
    updateWeeklyDrawSettings({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      values,
    });
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

  return (
    <Wrapper>
      <SelectBox
        label={'Trigger'}
        options={['Daily', 'Weekly', 'Monthly']}
        disabled={false}
        onChange={(e) => setTrigger(e.target.value)}
      />
      <SelectBox
        label={'Days'}
        options={days}
        disabled={false}
        onChange={(e) => setDay(e.target.value)}
      />
      <div className='time'>
        <TimeBox
          label={'Time From'}
          time={timeFrom}
          onChange={(e) => setTimeFrom(e.target.value)}
        />
        <TimeBox
          label={'Time To'}
          time={timeTo}
          onChange={(e) => setTimeTo(e.target.value)}
        />
      </div>
      <hr />
      <h3>Winners Per Category</h3>
      <div className='winners'>
        <TimeFrame
          label={'Category 1'}
          category={category1}
          onChange={(e) => setCategory_1(e.target.value)}
        />{' '}
        <TimeFrame
          label={'Category 2'}
          category={category2}
          onChange={(e) => setCategory_2(e.target.value)}
        />{' '}
        <TimeFrame
          label={'Category 3'}
          category={category3}
          onChange={(e) => setCategory_3(e.target.value)}
        />{' '}
        <TimeFrame
          label={'Category 4'}
          category={category4}
          onChange={(e) => setCategory_4(e.target.value)}
        />{' '}
        <TimeFrame
          label={'Category 5'}
          category={category5}
          onChange={(e) => setCategory_5(e.target.value)}
        />{' '}
        <TimeFrame
          label={'Category 6'}
          category={category6}
          onChange={(e) => setCategory_6(e.target.value)}
        />
      </div>
      <hr />
      <Actions onClick={runUpdate} />
    </Wrapper>
  );
};

export default AutomateWeeklyBar;

const Wrapper = styled.section`
  .time {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .winners {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 4rem;
  }
`;
