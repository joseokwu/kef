import Countdown from "react-countdown";

const renderer = (element) => {
  return function render({ hours, minutes, seconds, completed, days }) {
    if (completed) {
      return <p> {element}</p>;
    } else {
      // Render a countdown
      return (
        <div className="py-[1.8rem] px-[2.7rem] rounded-[2rem] bg-[#f8f9fd41] text-[3rem] text-center mr-[21rem] mt-[2rem]">
          <p className="f font-semibold text-[#FCAC0D] text-[.9rem] leading-[1rem] mb-[4px]">Card Activation</p>
          <div className="flex">
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem]">{days}</span>
              <span className="text-[7px] font-semibold">Days</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem]">{hours}</span>
              <span className="text-[7px] font-semibold">Hours</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem]">{minutes}</span>
              <span className="text-[7px] font-semibold">Minutes</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem]">{seconds}</span>
              <span className="text-[7px] font-semibold">Seconds</span>
            </p>
          </div>
        </div>
      );
    }
  };
};
// const renderer =

const MyCountDown = ({ time, completed }) => {
  return <Countdown date={Date.now() + 5000} renderer={renderer(completed)}></Countdown>;
};

export default MyCountDown;
