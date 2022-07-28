import React from 'react';

const StatV2 = ({ title, value }) => {
  return (
    <div className=' max-h-max  rounded-[10px] px-[3.5rem] py-[3.3rem] border border-[#CECCCC] min-w-[28rem] w-full relative overflow-hidden'>
      <span className='text-[#717171] text-[1.4rem] font-semibold leading-[1.7rem]'>
        {title}
      </span>
      <h2 className=' font-bold text-[3.4rem] leading-[4.1rem] z-50'>
        {value}
      </h2>
      <div className=' absolute top-3 -right-20 block w-[15.8rem] h-[15.8rem] rounded-full bg-[#F6EBF5] text-[#F6EBF5] outline outline-offset-8 outline-1 outline-current'></div>
    </div>
  );
};

export default StatV2;
