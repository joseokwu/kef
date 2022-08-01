import React from 'react';
import { useRouter } from 'next/router';

const PoweredBy2 = ({ setShow, event }) => {
  const router = useRouter();
  const { title, cover, slug } = event;
  return (
    // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]">
    <div
      style={{
        backgroundImage: `url(${cover && cover})`,
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.7)',
      }}
      className={`py-[4.1rem] px-[3.9rem]  rounded-[2rem] bg-cover `}
    >
      <h3 className='mb-[1.92rem] h-[40%] font-bold text-center sidebar:text-[4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem]'>
        {title}
      </h3>
      <p className='mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA]'>
        Get your ticket for the event and book your spot to the most exciting
        event this easter
      </p>
      <button
        onClick={() =>
          router.push(
            {
              pathname: `/single-event`,
              query: { slug },
            },
            undefined,
            { shallow: true }
          )
        }
        className='btn btn--outlined text-white !border-white mb-[4.8rem]'
      >
        Event Details
      </button>
      {/* <div className='flex items-center'>
        <span className='font-normal text-[1.2rem] text-[#FAFAFA] mr-12'>
          Powered by
        </span>
        <img src='/kudibar-logo.svg'></img>
      </div> */}
    </div>
  );
};

export default PoweredBy2;
