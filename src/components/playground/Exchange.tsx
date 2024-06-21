import { useState, useEffect } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const CancelButton = () => {
  const [amountToSend, setAmountToSend] = useState(8.25);
  const [amountToReceive, setAmountToReceive] = useState(121.27);

  const [selected, setSelected] = useState(null);
  const [switched, setSwitched] = useState(false);
  const [switchNumber, setSwitchNumber] = useState(0);

  const [displayedAmountToSend, setDisplayedAmountToSend] =
    useState(amountToSend);
  const [displayedAmountToReceive, setDisplayedAmountToReceive] =
    useState(amountToReceive);
  const [isUpdatingAmount, setIsUpdatingAmount] = useState(false);

  useEffect(() => {
    setIsUpdatingAmount(true);
    const timer = setTimeout(() => {
      setDisplayedAmountToSend(amountToSend);
      setDisplayedAmountToReceive(amountToReceive);
      setIsUpdatingAmount(false);
    }, 1700);
    return () => clearTimeout(timer);
  }, [amountToSend, amountToReceive]);

  const handleButtonClick = (percentage: any) => {
    if (selected === percentage) {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    } else {
      const newAmountToSend = 8.25 * (percentage / 100);
      const newAmountToReceive = 121.27 * (percentage / 100);
      setAmountToSend(newAmountToSend);
      setAmountToReceive(newAmountToReceive);
      setSelected(percentage);
    }
  };

  function handleMaxAmount() {
    setAmountToSend(8.25);
    setAmountToReceive(121.27);
    setSelected(null);
  }

  const handleSwitch = () => {
    setSwitched(!switched);
    setSwitchNumber(switchNumber === 1 ? 0 : 1);
    setSelected(null);
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <AnimatePresence>
        <div className='relative flex w-[88%] flex-col lg:w-3/5'>
          <div className='full rounded-[30px] border border-[#212122] bg-[#0d0d0e] p-6'>
            <div className='mb-6 flex select-none items-center justify-between border-b border-[#1B1B1A] pb-6'>
              <div className='flex items-center gap-3'>
                <motion.img
                  className='h-10 lg:h-14'
                  src={switched ? '/info/ada.png' : '/info/dot.png'}
                  height='120'
                  alt={switched ? 'Cardano' : 'Polkadot'}
                />
                <div className='flex flex-col justify-center'>
                  <p className='m-0 text-[18px] font-bold text-[#FFFFFF] '>
                    You pay
                  </p>
                  {switched ? (
                    <p className='m-0 text-sm text-[#787878] lg:text-base'>
                      Balance: 121.27
                    </p>
                  ) : (
                    <p className='m-0 text-sm text-[#787878] lg:text-base'>
                      Balance: 8.25
                    </p>
                  )}
                </div>
              </div>
              <div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleMaxAmount();
                  }}
                  className='rounded-full border border-[#212122] bg-[#08090A] px-3 py-1 text-base text-[#9A9A9A] transition-colors hover:text-[#EDEEF0] lg:text-lg'
                >
                  Use Max
                </motion.button>
              </div>
            </div>

            <div className='text-center'>
              <motion.h5
                initial={{ y: 20, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -20, opacity: 0, filter: 'blur(6px)' }}
                key={amountToSend}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  bounce: 0.2,
                }}
                className='text-[58px] font-extrabold text-white'
              >
                {switched ? (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(6px)' }}
                    key={switchNumber}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.2,
                    }}
                  >
                    {amountToReceive.toFixed(2)}
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(6px)' }}
                    key={switchNumber}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.2,
                    }}
                  >
                    {amountToSend.toFixed(2)}
                  </motion.span>
                )}
              </motion.h5>
              <div className='flex items-center justify-center gap-2'>
                <img
                  className='h-4'
                  src={switched ? '/info/ada.png' : '/info/dot.png'}
                  height='120'
                  alt={switched ? 'Cardano' : 'Polkadot'}
                />
                {switched ? (
                  <p className='m-0 text-sm text-[#787878] lg:text-base'>
                    1 ADA = 0.07 DOT
                  </p>
                ) : (
                  <p className='m-0 text-sm text-[#787878] lg:text-base'>
                    1 DOT = 14.70 ADA
                  </p>
                )}
              </div>

              <div className='mt-6 flex justify-center gap-1 text-[#9A9A9A]'>
                <motion.button
                  onClick={() => handleButtonClick(10)}
                  whileTap={{
                    scale: selected === null || selected === 10 ? 0.95 : 1,
                  }}
                  disabled={selected !== 10 && selected !== null}
                  className='rounded-full border border-[#212122] bg-[#08090A] px-3 py-1 text-base disabled:opacity-20'
                >
                  10%
                </motion.button>
                <motion.button
                  onClick={() => handleButtonClick(25)}
                  whileTap={{
                    scale: selected === null || selected === 25 ? 0.95 : 1,
                  }}
                  disabled={selected !== 25 && selected !== null}
                  className='rounded-full border border-[#212122] bg-[#08090A] px-3 py-1 text-base disabled:opacity-20 '
                >
                  25%
                </motion.button>
                <motion.button
                  onClick={() => handleButtonClick(50)}
                  whileTap={{
                    scale: selected === null || selected === 50 ? 0.95 : 1,
                  }}
                  disabled={selected !== 50 && selected !== null}
                  className='rounded-full border border-[#212122] bg-[#08090A] px-3 py-1 text-base disabled:opacity-20 '
                >
                  50%
                </motion.button>
              </div>
            </div>
          </div>

          <div className='relative mx-auto h-3 w-full'>
            <div className='absolute -top-3 left-0 right-0 mx-auto w-fit transform '>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSwitch}
                className='relative rounded-full border border-[#212122] bg-[#08090A] p-3'
              >
                <motion.div
                  key={amountToSend}
                  animate={{
                    rotate: 1200,
                    opacity: [0, 1, 0],
                  }}
                  style={{ opacity: 0 }}
                  transition={{
                    ease: 'linear',
                    duration: 2,
                    times: [0, 0.5, 1],
                  }}
                  className='absolute inset-0 rounded-full border border-transparent border-b-[#424241]'
                ></motion.div>

                <img
                  className='h-5 w-5'
                  src='/exchange.svg'
                  height='120'
                  alt='Exchange'
                />
              </motion.button>
            </div>
          </div>

          <div className='rounded-[30px] border border-[#212122] bg-[#0d0d0e] p-6'>
            <div className='flex select-none items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img
                  className='h-10 lg:h-14'
                  src={switched ? '/info/dot.png' : '/info/ada.png'}
                  height='120'
                  alt={switched ? 'Polkadot' : 'Cardano'}
                />
                <div className='flex flex-col justify-center'>
                  <p className='m-0 text-[18px] font-bold text-[#FFFFFF]'>
                    You receive
                  </p>
                  {switched ? (
                    <p className='m-0 text-base text-[#787878] '>
                      Balance: 8.25
                    </p>
                  ) : (
                    <p className='m-0 text-base text-[#787878]'>
                      Balance: 121.27
                    </p>
                  )}
                </div>
              </div>
              <div>
                <motion.h5
                  initial={{ filter: 'blur(2px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  exit={{ filter: 'blur(2px)' }}
                  key={displayedAmountToSend}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                    bounce: 0,
                  }}
                  style={{
                    opacity: isUpdatingAmount ? 0.3 : 1,
                  }}
                  className='m-0 text-[28px] font-extrabold text-white'
                >
                  {switched ? (
                    <motion.span
                      initial={{ filter: 'blur(2px)' }}
                      animate={{ filter: 'blur(0px)' }}
                      exit={{ filter: 'blur(2px)' }}
                      key={switchNumber}
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        bounce: 0.2,
                      }}
                    >
                      {displayedAmountToSend.toFixed(2)}
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ filter: 'blur(2px)' }}
                      animate={{ filter: 'blur(0px)' }}
                      exit={{ filter: 'blur(2px)' }}
                      key={switchNumber}
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        bounce: 0.2,
                      }}
                    >
                      {displayedAmountToReceive.toFixed(2)}
                    </motion.span>
                  )}
                </motion.h5>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default CancelButton;
