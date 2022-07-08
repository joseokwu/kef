import React, { useState } from 'react';
import WeeklyDetail from './WeeklyDetail';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';

const History = ({ weeklyDraw, filters }) => {
  const {
    setAutoPage,
    stateRaffleDraw: { autoPage },
  } = useRaffleDraw();
  const [showWeekly, setShowWeekly] = useState(false);

  if (autoPage !== 'weeklyDraw') {
    return (
      <div className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] lg:!grid-cols-[repeat(2,_minmax(28rem,_1fr))] gap-[3.6rem]'>
        <div
          onClick={() => {
            setAutoPage('weeklyDraw');
            setShowWeekly(true);
          }}
          className=' flex-2 relative bg-[#F0F0F0]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer'
        >
          <h3 className='font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]'>
            Weekly Draw
          </h3>
          <p className='text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]'>
            View event analytics for this event.
          </p>
          <img
            src='/3d-trophy.svg'
            className='absolute bottom-[0rem] right-[0rem] w-[45%]'
          ></img>
        </div>
        <div
          onClick={() => {
            // setShow(true);
            // setActiveModal('PaymentOptions');
            // setAccessType('Data Bundle');
          }}
          className='flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer'
        >
          <h3 className='font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]'>
            Kennis Event Day 1
          </h3>
          <p className='text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]'>
            View event analytics for this event.
          </p>
          <img
            src='/3d-trophy.svg'
            className='absolute bottom-[0rem] right-[0rem] w-[45%]'
          ></img>
        </div>

        <div
          onClick={() => {
            // setShow(true);
            // setActiveModal('PaymentOptions');
            // setAccessType('Data Bundle');
          }}
          className=' flex-2 relative bg-[#F0F0F0]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer'
        >
          <h3 className='font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]'>
            Kennis Event Day 2
          </h3>
          <p className='text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]'>
            View event analytics for this event.
          </p>
          <img
            src='/3d-trophy.svg'
            className='absolute bottom-[0rem] right-[0rem] w-[45%]'
          ></img>
        </div>
        <div
          onClick={() => {
            // setShow(true);
            // setActiveModal('PaymentOptions');
            // setAccessType('Data Bundle');
          }}
          className=' flex-2 relative bg-[#FFF6E4]  rounded-[2rem]  py-[3.9rem] px-[3.5rem] hover:scale-[1.01] hover:shadow-sm cursor-pointer'
        >
          <h3 className='font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]'>
            Progressive Draw
          </h3>
          <p className='text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]'>
            View event analytics for this event.
          </p>
          <img
            src='/3d-trophy.svg'
            className='absolute bottom-[0rem] right-[0rem] w-[45%]'
          ></img>
        </div>
      </div>
    );
  } else {
    return <WeeklyDetail weeklyDraw={weeklyDraw} filters={filters} />;
  }
};

export default History;
