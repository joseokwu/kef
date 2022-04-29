import Countdown from 'react-countdown';

const renderer = (element) => {
  return function render({ hours, minutes, seconds, completed }) {
    if (completed) {
      return <p> {element}</p>;
    } else {
      // Render a countdown
      return (
        <div className='py-[1.8rem] px-[2.7rem] rounded-[2rem] bg-[#F8F9FD] text-[3rem] text-center'>
          <h4 className='font-semibold text-[1.2rem] text-[#FCAC0D]  mb-[4px]'>
            Raffle Draw Starts In
          </h4>
          <div className='flex'>
            <p className='flex flex-col items-center'>
              <span className='font-semibold text-[3rem] leading-[3.6rem]'>
                {hours}
              </span>
              <span className='text-[7px] font-semibold'>Hours</span>
            </p>
            <span className='mx-[10px] -translate-y-2'>:</span>
            <p className='flex flex-col items-center'>
              <span className='font-semibold text-[3rem] leading-[3.6rem]'>
                {minutes}
              </span>
              <span className='text-[7px] font-semibold'>Minutes</span>
            </p>
            <span className='mx-[10px] -translate-y-2'>:</span>
            <p className='flex flex-col items-center'>
              <span className='font-semibold text-[3rem] leading-[3.6rem]'>
                {seconds}
              </span>
              <span className='text-[7px] font-semibold'>Seconds</span>
            </p>
          </div>
        </div>
      );
    }
  };
};
// const renderer =

const CountDown = ({ time, completed }) => {
  return (
    <Countdown
      date={Date.now() + 500000}
      renderer={renderer(completed)}
    ></Countdown>
  );
};

export default CountDown;
