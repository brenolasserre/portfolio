import { useState, useEffect, useRef } from 'react';
import {
  AnimatePresence,
  motion,
  easeInOut,
  useReducedMotion,
} from 'framer-motion';

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
  const [isShaking, setIsShaking] = useState(false);

  const initialRender = useRef(true);

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

  const handleMaxAmount = () => {
    if (amountToSend === 8.25) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } else {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setIsUpdatingAmount(true);
      const timer = setTimeout(() => {
        setDisplayedAmountToSend(amountToSend);
        setDisplayedAmountToReceive(amountToReceive);
        setIsUpdatingAmount(false);
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [amountToSend, amountToReceive]);

  const handleSwitch = () => {
    setSwitched(!switched);
    setSwitchNumber(switchNumber === 1 ? 0 : 1);
    setSelected(null);
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      <div className='relative flex w-[88%] flex-col lg:w-3/5'>
        <div className='full rounded-[30px] border border-[#212122] bg-[#0d0d0e] p-6'>
          <motion.div>
            <div className='mb-6 flex select-none items-center justify-between border-b border-[#1B1B1A] pb-6'>
              <div className='flex items-center gap-3'>
                <motion.img
                  key={switchNumber}
                  transition={{
                    duration: 0.4,
                    type: 'spring',
                    bounce: 0,
                  }}
                  initial={
                    !shouldReduceMotion
                      ? { y: 15, opacity: 0, filter: 'blur(4px)' }
                      : {}
                  }
                  animate={
                    !shouldReduceMotion
                      ? { y: 0, opacity: 1, filter: 'blur(0px)' }
                      : {}
                  }
                  className='h-10 w-10 lg:h-12 lg:w-12'
                  src={switched ? '/exchange/ada.webp' : '/exchange/dot.webp'}
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
                  onClick={handleMaxAmount}
                  className='rounded-full border border-[#212122] bg-[#08090A] px-3 py-1 text-base text-[#9A9A9A] transition-colors hover:text-[#EDEEF0] lg:text-lg'
                >
                  Use Max
                </motion.button>
              </div>
            </div>

            <div className='text-center'>
              <motion.div
                key={switchNumber}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  bounce: 0,
                }}
                initial={
                  !shouldReduceMotion
                    ? { y: 25, opacity: 0, filter: 'blur(4px)' }
                    : {}
                }
                animate={
                  !shouldReduceMotion
                    ? { y: 0, opacity: 1, filter: 'blur(0px)' }
                    : {}
                }
              >
                <motion.h5
                  animate={
                    isShaking && !shouldReduceMotion
                      ? {
                          x: [0, -8, 8, -8, 8, -8, 0],

                          opacity: [1, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9],
                        }
                      : { x: 0, opacity: 1 }
                  }
                  transition={
                    isShaking
                      ? { repeat: Infinity, duration: 0.8, ease: easeInOut }
                      : {}
                  }
                  key={amountToSend}
                  className='text-[58px] font-extrabold text-white'
                >
                  {switched ? (
                    <motion.span
                      initial={{ opacity: 0, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
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
                    src={switched ? '/exchange/ada.webp' : '/exchange/dot.webp'}
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
              </motion.div>

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
          </motion.div>
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
                  rotate: 1600,
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
                className='z-40 h-5 w-5'
                src='/icons/exchange.svg'
                height='120'
                alt='Exchange'
              />
            </motion.button>
          </div>
        </div>

        <div className='rounded-[30px] border border-[#212122] bg-[#0d0d0e] p-6'>
          <motion.div
            key={switchNumber}
            transition={{
              duration: 0.4,
              type: 'spring',
              bounce: 0,
            }}
            initial={
              !shouldReduceMotion
                ? { y: 25, opacity: 0, filter: 'blur(4px)' }
                : {}
            }
            animate={
              !shouldReduceMotion
                ? { y: 0, opacity: 1, filter: 'blur(0px)' }
                : {}
            }
            className='flex select-none items-center justify-between'
          >
            <div className='flex items-center gap-3'>
              <img
                className='h-10 w-10 lg:h-12 lg:w-12'
                src={switched ? '/exchange/dot.webp' : '/exchange/ada.webp'}
                alt={switched ? 'Polkadot' : 'Cardano'}
              />
              <div className='flex flex-col justify-center'>
                <p className='m-0 text-[18px] font-bold text-[#FFFFFF]'>
                  You receive
                </p>
                {switched ? (
                  <motion.p className='m-0 text-base text-[#787878] '>
                    Balance: 8.25
                  </motion.p>
                ) : (
                  <motion.p className='m-0 text-base text-[#787878]'>
                    Balance: 121.27
                  </motion.p>
                )}
              </div>
            </div>
            <div>
              <motion.h5
                initial={{ filter: 'blur(4px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                key={displayedAmountToSend}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  bounce: 0,
                }}
                style={{
                  opacity: isUpdatingAmount ? 0.2 : 1,
                }}
                className='m-0 text-[28px] font-extrabold text-white'
              >
                {switched ? (
                  <motion.span>{displayedAmountToSend.toFixed(2)}</motion.span>
                ) : (
                  <motion.span>
                    {displayedAmountToReceive.toFixed(2)}
                  </motion.span>
                )}
              </motion.h5>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CancelButton;
