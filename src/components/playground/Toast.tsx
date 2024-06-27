import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

const Receipt = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function renderToast() {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  }

  return (
    <div className='mb-16'>
      <div
        className='max-w-22 flex w-full flex-col rounded-t-xl border
 border-b-0 border-[#19191A] bg-[#08090A] bg-[size:20px_20px]'
      >
        <div className='relative h-full w-full'>
          <div className='absolute top-0 z-40 flex w-full items-center justify-end p-4'>
            <AnimatePresence mode='popLayout'>
              <motion.a
                href='/blog/toast'
                aria-label='See more'
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#111213',
                  transition: { type: 'ease', duration: 0.2 },
                }}
                whileHover={{
                  backgroundColor: '#111213',
                  transition: { type: 'ease', duration: 0.2 },
                }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
                className='relative overflow-hidden rounded-lg text-[#7b7b7e]'
              >
                <motion.span
                  whileTap={{ x: 1, scale: 1.05, color: '#a2a2a5' }}
                  transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
                  className='flex w-full items-center justify-center p-1'
                >
                  <svg
                    width='24'
                    height='24'
                    fill='currentColor'
                    className='bi bi-arrow-right-short'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
                    />
                  </svg>
                </motion.span>
              </motion.a>
            </AnimatePresence>
          </div>
          <div className='relative mx-auto flex min-h-[24em] items-center justify-center'>
            <div className='w-fit'>
              <MotionConfig transition={{ type: 'spring', duration: 0.7 }}>
                <AnimatePresence mode='popLayout'>
                  {isOpen && (
                    <div className='flex h-10 justify-center'>
                      <motion.button
                        initial={{
                          y: -40,
                          width: '10%',
                          opacity: 0,
                          scale: 0.9,
                          filter: 'blur(6px)',
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          width: '100%',
                          scale: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{
                          y: -40,
                          opacity: 0,
                          scale: 0.8,
                          width: '10%',
                          filter: 'blur(6px)',
                        }}
                        style={{ fontSize: 16 }}
                        className='relative flex w-fit justify-center rounded-full bg-[#EDEDED] px-6 py-2 text-center text-black'
                      >
                        <span className='absolute left-0 top-0 z-40 h-full w-10 rounded-l-full bg-gradient-to-r from-[#EDEDED] to-transparent ' />
                        <AnimatePresence>
                          <motion.span
                            className='mx-auto flex items-center gap-1 truncate text-center'
                            initial={{ opacity: 0, filter: 'blur(2px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(2px)' }}
                          >
                            <svg
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='size-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                              />
                            </svg>
                            Text Copied!
                          </motion.span>
                        </AnimatePresence>
                        <span className='absolute right-0 top-0 z-40 h-full w-10 rounded-r-full bg-gradient-to-l from-[#EDEDED] to-transparent ' />
                      </motion.button>
                    </div>
                  )}
                </AnimatePresence>
              </MotionConfig>
            </div>
          </div>
        </div>
      </div>
      <p className='flex w-full items-center justify-center gap-4 rounded-b-xl border border-[#19191A] bg-[#101113] px-6 py-4 text-center text-xs text-[#8B8B8B]'>
        <p className='m-0'>
          <button
            className='rounded-lg border border-[#19191A] bg-[#08090A] px-4 py-3 text-[14px]'
            onClick={() => renderToast()}
          >
            Render A Toast
          </button>
        </p>
      </p>
    </div>
  );
};

export default Receipt;
