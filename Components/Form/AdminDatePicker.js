import React, { useState } from 'react';

const AdminDatePicker = ({ setDate, date }) => {
  return (
    <>
      <style jsx>
        {`
          .calendar::-webkit-calendar-picker-indicator {
            // opacity: 0.5;
            font-size: 1.3rem;
            // transform: scale(2, 2);
            // transform: translateX(8px);
            // display: none;
            // background: red;
            background-repeat: no-repeat;
            cursor: pointer;
            backgroundposition: 'right 38px center';
            z-index: 10000;
            background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.332 2.00033H12.9987C13.1755 2.00033 13.3451 2.07056 13.4701 2.19559C13.5951 2.32061 13.6654 2.49018 13.6654 2.66699V13.3337C13.6654 13.5105 13.5951 13.68 13.4701 13.8051C13.3451 13.9301 13.1755 14.0003 12.9987 14.0003H0.998698C0.821887 14.0003 0.652318 13.9301 0.527293 13.8051C0.402269 13.68 0.332031 13.5105 0.332031 13.3337V2.66699C0.332031 2.49018 0.402269 2.32061 0.527293 2.19559C0.652318 2.07056 0.821887 2.00033 0.998698 2.00033H3.66536V0.666992H4.9987V2.00033H8.9987V0.666992H10.332V2.00033ZM1.66536 6.00033V12.667H12.332V6.00033H1.66536ZM2.9987 7.33366H4.33203V8.66699H2.9987V7.33366ZM6.33203 7.33366H7.66536V8.66699H6.33203V7.33366ZM9.66537 7.33366H10.9987V8.66699H9.66537V7.33366Z' fill='%23777E90'/%3E%3C/svg%3E%0A");
          }
        `}
      </style>
      <div className='relative w-[13rem] ml-[1.6rem] border-[#E6E8EC] border-2 rounded-full overflow-hidden'>
        <label
          className='absolute top-0 left-0 bg-white h-full font-bold text-[1.2rem] w-full text-left flex items-center pl-[1.6rem]'
          onClick={() => {
            // dateRef.current.showPicker();
            // console.log("date is ", dateRef.current.value);
          }}
          htmlFor='date'
        >
          {date || 'All Date'}
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          className='px-[1.6rem] calendar py-[1rem] outline-transparent border-transparent  w-full'
          id='date'
          placeholder='All date'
          type='date'
        ></input>
      </div>
    </>
  );
};

export default AdminDatePicker;
