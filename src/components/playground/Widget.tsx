'use client';

import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';

const Receipt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig
      transition={{
        duration: 0.6,
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <motion.div className='mb-36 mt-16 flex w-full flex-col items-center justify-center gap-4'>
        <motion.div
          animate={{ height: bounds.height }}
          className='flex w-[85%] flex-col gap-3 rounded-3xl bg-[#101114] md:w-1/2'
        >
          <div ref={ref} className='py-10'>
            <img
              className='mx-auto mb-4 w-12 rounded-2xl'
              src='https://i.pinimg.com/originals/ee/45/b8/ee45b8c8c160f85af8655a104029b466.jpg'
              alt='Store Picture'
            />
            <div className='mb-6'>
              <h3 className='mt-2 text-center text-xl font-semibold md:text-2xl'>
                Thanks for your order!
              </h3>

              <p className='m-0 text-center text-[15px] text-[#757779]'>
                A confirmation email has been sent to brenolasserre@gmail.com
              </p>
            </div>

            <p className='mb-2 text-center text-sm'>
              <span className='text-[#757779]'>Order No.</span>{' '}
              <code>02323042420</code>
            </p>

            <div className='relative mb-4 h-4 w-full'>
              <span className='absolute left-0 h-full w-2 rounded-r-full bg-[#08090A]' />
              <span className='absolute right-0 h-full w-2 rounded-l-full bg-[#08090A]' />
            </div>

            <div className='px-8 '>
              <p className='flex w-full items-center justify-between '>
                <span>Total:</span>
                <span>182,02$</span>
              </p>
              <AnimatePresence mode='popLayout'>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -30, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(2px)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='mb-3 flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                      <span className='flex items-center gap-2'>
                        <svg
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
                          />
                        </svg>
                        Product
                      </span>
                      <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                      <span>182,02$</span>
                    </p>
                    <p className='mb-3 flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                      <span className='flex items-center gap-2'>
                        <svg
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
                          />
                        </svg>
                        Shipping
                      </span>
                      <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                      <span>17,11$</span>
                    </p>
                    <p className='mb-3 flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                      <span className='flex items-center gap-2'>
                        <svg
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                          />
                        </svg>
                        <span>Taxes</span>
                        <span className='text-xs'>(20%)</span>
                      </span>
                      <span className='mx-3 w-1/3 border-b border-dashed border-[#282826]/30' />
                      <span>7,68$</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.p
                layout='position'
                className='mb-0 mt-6 flex w-full items-center justify-between text-sm'
              >
                <span className='h-px w-1/5 bg-gradient-to-r from-[#282826]/80 to-transparent md:w-1/4' />

                {!isOpen ? (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      layoutId='button-breakdown'
                      layout='position'
                      className='flex w-fit justify-center gap-2 text-center text-[#757779]'
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      See breakdown
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      layoutId='button-breakdown'
                      layout='position'
                      className=' flex w-fit justify-center gap-2 text-center text-[#757779]'
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      Hide breakdown
                    </motion.button>
                  </>
                )}
                <span className='h-px w-1/5 bg-gradient-to-l from-[#282826]/80 to-transparent md:w-1/4' />
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default Receipt;
