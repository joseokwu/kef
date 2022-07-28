import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AdminDatePicker from './Form/AdminDatePicker';

const FilterCard = (props) => {
  const [showDateInput, setShowDateInput] = useState(false);

  const transaction = [
    'Yesterday',
    'Last 3 Days',
    'Last 7 days',
    'Custom Date',
  ];
  const users = ['All', 'Delivered', 'Not Delivered'];
  const raffle = ['All', 'Weekly', 'Interval'];

  function getPreviousDate(number) {
    const oldDate = new Date(new Date().getTime() - number * 60 * 60 * 1000);
    return oldDate.toLocaleDateString();
  }

  const handleOnChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (value === 'Custom Date' && isChecked) {
      setShowDateInput(true);
      props.setDateValue(value);
    }
    if (value === 'Yesterday' && isChecked) {
      setShowDateInput(false);
      props.setDate(getPreviousDate(24));
      props.setDateValue(value);
      props.handleFilter();
    }
    if (value === 'Last 3 Days' && isChecked) {
      setShowDateInput(false);
      props.setDate(getPreviousDate(72));
      props.setDateValue(value);
      props.handleFilter();
    }
    if (value === 'Last 7 days' && isChecked) {
      setShowDateInput(false);
      props.setDate(getPreviousDate(168));
      props.setDateValue(value);
      props.handleFilter();
    }
  };

  useEffect(() => {
    if (props.dateValue === 'Custom Date') {
      setShowDateInput(true);
    }
  }, [props.dateValue]);
  return (
    <Wrapper
      style={{
        marginLeft: `${props.type === 'raffle' ? '28rem' : '0rem'}`,
      }}
    >
      <div className='timeframe'>
        <h3>Filter</h3>
        {transaction.map((item, index) => {
          return (
            <div className='time' key={index}>
              <input
                className='checked'
                type='checkbox'
                id={item}
                name={item}
                value={item}
                defaultChecked={props.dateValue === item ? true : false}
                checked={props.dateValue === item ? true : false}
                onChange={handleOnChange}
              />
              {item}
            </div>
          );
        })}
        {showDateInput && (
          <div className='date'>
            <h4>Choose Date</h4>
            <AdminDatePicker
              date={props.date}
              setDate={props.setDate}
              setShowFilter={props.handleFilter}
            />
          </div>
        )}
      </div>

      {/* {type === 'users' && (
        <div className='timeframe'>
          <h3>Pickup Status</h3>
          {users.map((item, index) => {
            return (
              <div className='time' key={index}>
                <input
                  type='checkbox'
                  id={item}
                  name={item}
                  value={item}
                  // checked={isChecked}
                  // onChange={handleOnChange}
                />
                {item}
              </div>
            );
          })}
        </div>
      )} */}

      {props.type === 'raffle' && (
        <div className='timeframe'>
          <h3>Draw Type</h3>
          {raffle.map((item, index) => {
            return (
              <div className='time' key={index}>
                <input
                  type='checkbox'
                  id={item}
                  name={item}
                  value={item}
                  // checked={isChecked}
                  // onChange={handleOnChange}
                />
                {item}
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default FilterCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  gap: 2rem;
  position: absolute;
  /* height: 25rem; */
  width: 24rem;
  margin-top: 4.4rem;
  z-index: 999;
  font-size: 1.4rem;
  font-weight: 400;
  background: rgba(248, 249, 249, 1);
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  input[type='checkbox'] {
    accent-color: #c6155f;
  }
  .timeframe {
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem;
    gap: 1rem;
  }
  .time {
    display: flex;
    gap: 2rem;
    width: 100%;
  }
  .date {
    margin-top: 0.5rem;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }
  h3 {
    font-weight: 600;
  }
`;
