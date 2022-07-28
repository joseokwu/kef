import React from 'react';
// import  from 'react-use-window-size';
import Confetti from 'react-confetti';

const Confetti1 = ({ run }) => {
  // const { width, height } = useWindowSize();
  return (
    <Confetti
      // width={'1200px'}
      // height={'1200px'}
      // gravity={0.4}
      // tweenDuration={1000}
      numberOfPieces={600}
    />
  );
};

export default Confetti1;
