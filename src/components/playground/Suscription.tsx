import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CancelButton = () => {
  const [buttonState, setButtonState] = useState('idle');
  const holdDuration = 3000; // 3 seconds in milliseconds
  const holdProgressAnimation = useAnimation();

  const handleHoldStart = async () => {
    setButtonState('holding');
    await holdProgressAnimation.start({
      width: '100%',
      transition: { duration: holdDuration / 1000, ease: 'linear' },
    });
    if (buttonState === 'holding') {
      setButtonState('canceled');
      // Perform cancellation action here
    }
  };

  const handleHoldEnd = () => {
    setButtonState('idle');
    holdProgressAnimation.stop();
    holdProgressAnimation.set({ width: 0 });
  };

  return (
    <motion.button
      style={{
        borderRadius: 14,
        fontSize: 16,
      }}
      className='relative flex items-center justify-center gap-1 bg-[#ff31311e] py-2  text-[#DA3036]'
      disabled={buttonState === 'loading'}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onMouseLeave={handleHoldEnd}
    >
      <motion.span
        style={{
          borderRadius: 14,
          width: '100%', // Initially set to 100%
          height: '100%', // Ensure the span fills the button height
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(218, 48, 54, 0.1)', // Adjust opacity or color if needed
          zIndex: -1, // Ensure it's behind the button content
        }}
        animate={buttonState === 'holding' ? holdProgressAnimation : {}}
      ></motion.span>

      <motion.span
        className='z-10 flex items-center justify-center gap-1 px-8'
        layout='position'
      >
        Cancel Subscription
      </motion.span>
    </motion.button>
  );
};

export default CancelButton;
