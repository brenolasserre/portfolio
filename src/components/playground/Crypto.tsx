import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const CancelButton = () => {
  return (
    <div className='my-12 min-h-[20em] w-1/2 rounded-[35px] bg-[#111111] p-8'>
      <div className=' flex w-full justify-between text-[#787878]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
          />
        </svg>
      </div>
      <MotionConfig
        transition={{
          duration: 0.8,
          type: 'spring',
          bounce: 0.2,
        }}
      >
        <AnimatePresence>
          <div className='relative mx-auto my-10 flex h-[8rem] w-[90%] select-none flex-col items-center justify-center '>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className='absolute z-50 w-[7.5rem] -translate-x-1/2 transform rounded-full shadow-[0_0px_15px_6px_rgba(17,17,17,.5)]'
              height='120'
              src='/info/ada.png'
              alt='Cardano'
            />
            <motion.img
              initial={{ translateX: 60, scale: 0.5, rotate: 40 }}
              animate={{ translateX: 0, scale: 1, rotate: 0 }}
              className='-translate-x-1/5 absolute left-0 h-24 translate-y-1/3  transform'
              src='/info/btc.png'
              height='120'
              alt='Bitcoin'
            />
            <motion.img
              initial={{ translateX: -60, scale: 0.5, rotate: -40 }}
              animate={{ translateX: 0, scale: 1, rotate: 0 }}
              className='translate-x-1/5 absolute right-0 h-24 translate-y-1/3 transform'
              src='/info/dot.png'
              height='120'
              alt='Polkadot'
            />
          </div>
        </AnimatePresence>
      </MotionConfig>
      <div className='text-center'>
        <h5 className='font-semibold'>Comprá +50 criptomonedas</h5>
        <p className='text-md text-pretty text-[#787878]'>
          Comprá monedas las 24 horas del dia y visualizalas en tu portfolio.
        </p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className='mt-4 w-full rounded-full bg-[#070705] py-2 text-[#787878]'
      >
        Continuar
      </motion.button>
    </div>
  );
};

export default CancelButton;
