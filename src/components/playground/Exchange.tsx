import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const CancelButton = () => {
  const [amountToSend, setAmountToSend] = useState(8.25);
  const [amountToReceive, setAmountToReceive] = useState(121.27);

  const [selected, setSelected] = useState(null);
  const [switched, setSwitched] = useState(false);

  const [switchNumber, setSwitchNumber] = useState(0);

  const handleButtonClick = (percentage: any) => {
    if (selected === percentage && switched === false) {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    } else if (selected === percentage && switched === true) {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    } else {
      setAmountToSend((prevAmount) => prevAmount * (percentage / 100));
      setAmountToReceive((prevAmount) => prevAmount * (percentage / 100));
      setSelected(percentage);
    }
  };

  function handleMaxAmount() {
    if (switched) {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    } else {
      setAmountToSend(8.25);
      setAmountToReceive(121.27);
      setSelected(null);
    }
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
        <div className='relative my-12 flex w-3/5 flex-col'>
          <div className='full min-h-[20em] rounded-[40px] border border-[#1F1F1E] bg-[#111110] p-6'>
            <div className='mb-6 flex select-none items-center justify-between border-b border-[#1B1B1A] pb-6'>
              <div className='flex gap-3'>
                <motion.img
                  className='h-14'
                  src={switched ? '/info/ada.png' : '/info/dot.png'}
                  height='120'
                  alt={switched ? 'Cardano' : 'Polkadot'}
                />
                <div className='flex flex-col justify-center'>
                  <p className='m-0 text-lg font-bold text-[#FFFFFF]'>
                    You pay
                  </p>
                  {switched ? (
                    <p className='m-0 font-medium text-[#787878]'>
                      Balance: 121.27
                    </p>
                  ) : (
                    <p className='m-0 font-medium text-[#787878]'>
                      Balance: 8.25
                    </p>
                  )}
                </div>
              </div>
              <div>
                <motion.button
                  whileTap={{ scale: amountToSend === 8.25 ? 1 : 0.95 }}
                  onClick={() => {
                    handleMaxAmount();
                  }}
                  disabled={amountToSend === 8.25}
                  className='rounded-full border border-[#1F1F1E] bg-[#0F0F0D] p-2 px-3 disabled:opacity-50'
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
                  <p className='m-0 text-[#787878]'>1 ADA = 0.07 DOT</p>
                ) : (
                  <p className='m-0 text-[#787878]'>1 DOT = 14.70 ADA</p>
                )}
              </div>

              <div className='mt-6 flex justify-center gap-1 text-[#9A9A9A]'>
                <motion.button
                  onClick={() => handleButtonClick(10)}
                  whileTap={{
                    scale: selected === null || selected === 10 ? 0.95 : 1,
                  }}
                  disabled={selected !== 10 && selected !== null}
                  className='rounded-full border border-[#1F1F1E] bg-[#0F0F0D] p-1 px-3  disabled:opacity-60'
                >
                  10%
                </motion.button>
                <motion.button
                  onClick={() => handleButtonClick(25)}
                  whileTap={{
                    scale: selected === null || selected === 25 ? 0.95 : 1,
                  }}
                  disabled={selected !== 25 && selected !== null}
                  className='rounded-full border border-[#1F1F1E] bg-[#0F0F0D] p-1 px-3  disabled:opacity-60'
                >
                  25%
                </motion.button>
                <motion.button
                  onClick={() => handleButtonClick(50)}
                  whileTap={{
                    scale: selected === null || selected === 50 ? 0.95 : 1,
                  }}
                  disabled={selected !== 50 && selected !== null}
                  className='rounded-full border border-[#1F1F1E] bg-[#0F0F0D] p-1 px-3  disabled:opacity-60'
                >
                  50%
                </motion.button>
              </div>
            </div>
          </div>

          <div className='relative mx-auto h-4 w-10'>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSwitch}
              className='absolute -top-3 transform rounded-full border border-[#1F1F1E] bg-[#0B0B09] p-2'
            >
              <img
                className='h-5'
                src='/exchange.svg'
                height='120'
                alt='Exchange'
              />
            </motion.button>
          </div>

          <div className='rounded-[40px] border border-[#1F1F1E] bg-[#111110] p-6'>
            <div className='flex select-none items-center justify-between'>
              <div className='flex gap-3'>
                <img
                  className='h-14'
                  src={switched ? '/info/dot.png' : '/info/ada.png'}
                  height='120'
                  alt={switched ? 'Polkadot' : 'Cardano'}
                />
                <div className='flex flex-col justify-center'>
                  <p className='m-0 text-lg font-bold text-[#FFFFFF]'>
                    You receive
                  </p>
                  {switched ? (
                    <p className='m-0 font-medium text-[#787878]'>
                      Balance: 8.25
                    </p>
                  ) : (
                    <p className='m-0 font-medium text-[#787878]'>
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
                  key={amountToSend}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                    bounce: 0,
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
                      {amountToSend.toFixed(2)}
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
                      {amountToReceive.toFixed(2)}
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
