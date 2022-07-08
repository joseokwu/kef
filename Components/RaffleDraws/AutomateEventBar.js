import React, { useState } from 'react';
import SelectBox from './SelectBox';
import styled from 'styled-components';
import TimeFrame from './TimeFrame';
import TimeBox from './TimeBox';
import { Actions } from '.';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';

const AutomateEventBar = ({ eventDrawSettings }) => {
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const [interval, setInterval] = useState(eventDrawSettings?.interval || '');
  const [timeFrame, setTimeFrame] = useState(
    eventDrawSettings?.timeFrame || ''
  );
  const [category1, setCategory_1] = useState(
    eventDrawSettings?.category_1 || 1
  );
  const [category2, setCategory_2] = useState(
    eventDrawSettings?.category_2 || 1
  );
  const [category3, setCategory_3] = useState(
    eventDrawSettings?.category_3 || 1
  );
  const [category4, setCategory_4] = useState(
    eventDrawSettings?.category_4 || 1
  );
  const [category5, setCategory_5] = useState(
    eventDrawSettings?.category_5 || 1
  );
  const [category6, setCategory_6] = useState(
    eventDrawSettings?.category_6 || 1
  );
  const [eventStart, setEventStart] = useState(
    eventDrawSettings?.timeFrom || ''
  );
  const [eventEnd, setEventEnd] = useState(eventDrawSettings?.timeTo || '');

  const {
    stateRaffleDraw: { autoPage },
    updateEventDrawSettings,
  } = useRaffleDraw();
  console.log(eventDrawSettings);

  const values = {
    interval,
    timeFrame,
    eventStart,
    eventEnd,
    category_1: parseInt(category1),
    category_2: parseInt(category2),
    category_3: parseInt(category3),
    category_4: parseInt(category4),
    category_5: parseInt(category5),
    category_6: parseInt(category6),
  };

  const runUpdate = () => {
    updateEventDrawSettings({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      values,
    });
  };

  return (
    <Wrapper>
      <SelectBox
        label={'Interval'}
        options={['Hourly', 'Daily', 'Weekly', 'Monthly']}
        disabled={false}
        onChange={(e) => setInterval(e.target.value)}
        category={interval}
      />
      <TimeFrame
        label={'Time Frame'}
        category={timeFrame}
        onChange={(e) => setTimeFrame(e.target.value)}
      />
      <div className='time'>
        <TimeBox
          label={'Event Start'}
          time={eventStart}
          onChange={(e) => setEventStart(e.target.value)}
        />
        <TimeBox
          label={'Event End'}
          time={eventEnd}
          onChange={(e) => setEventEnd(e.target.value)}
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

export default AutomateEventBar;

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
