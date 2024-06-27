'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, easeOut } from 'framer-motion';

export default function SharedLayout() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState('idle');

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const buttonContent: {
    [key: string]: string;
    idle: string;
    idle2: string;
    loading: string;
  } = {
    idle: 'Delete Project',
    idle2: 'Delete',
    loading: 'Deleting...',
  };

  return (
    <div className='relative mx-auto flex h-full w-[85%] flex-col items-center justify-center px-6 pb-6 pt-1 md:w-1/2 '>
      <MotionConfig transition={{ type: 'spring', bounce: 0.1, duration: 0.3 }}>
        <AnimatePresence mode='popLayout'>
          {modalOpen ? (
            <motion.div
              className='bottom-4 z-40 w-full border border-[#19191A] p-6 pt-9 text-center '
              layoutId='modal-wrapper'
              style={{ borderRadius: 28, background: '#0d0d0e' }}
            >
              <motion.div layoutId='modal'>
                <div className='header'>
                  <div className='header-inner'>
                    {buttonState === 'idle' || buttonState === 'idle2' ? (
                      <motion.div
                        key={buttonState}
                        layoutId='content'
                        initial={{
                          y: 10,
                          scale: 0.8,
                          opacity: 0,
                          filter: 'blur(4px)',
                        }}
                        animate={{
                          y: 0,
                          scale: 1,
                          opacity: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{ y: 10, opacity: 0, filter: 'blur(2px)' }}
                        className='mb-8'
                      >
                        <motion.h2
                          layoutId='header'
                          layout='position'
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                          className='mt-2 text-2xl font-bold text-[#fff]'
                        >
                          <motion.span
                            className='flex items-center justify-center gap-1'
                            layoutId='header-1'
                          >
                            Are you sure?
                          </motion.span>
                        </motion.h2>

                        <motion.p
                          layout='position'
                          layoutId='header-text'
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                          className='text-[15px] text-[#787878]'
                        >
                          <motion.span
                            className='flex items-center justify-center gap-1'
                            layoutId='paragraph-1'
                          >
                            This action is not reversible. You will delete your
                            project and all of the information you've stored.
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        layoutId='content'
                        className='mb-8'
                      >
                        <motion.h2
                          layoutId='header'
                          layout='position'
                          className='my-2 text-xl font-semibold text-[#EDEEF0]'
                        >
                          <motion.span
                            className='flex items-center justify-center gap-1 '
                            layoutId='header-1'
                          >
                            Deleting Project
                          </motion.span>
                        </motion.h2>
                        <motion.p
                          layout
                          layoutId='header-text'
                          className='text-[15px] text-[#757779]'
                        >
                          <motion.span
                            className='flex items-center justify-center gap-1'
                            layoutId='paragraph-1'
                            layout='position'
                          >
                            This process may take a moment, please wait.
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    )}

                    <div className='flex w-full items-center gap-2'>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setModalOpen((prevState: boolean) => !prevState);
                          setButtonState('idle');
                        }}
                        initial={{
                          x: 40,
                          opacity: 0,
                          scale: 0.1,
                          filter: 'blur(4px)',
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          scale: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{
                          x: 40,
                          opacity: 0,
                          scale: 0.1,
                          filter: 'blur(4px)',
                        }}
                        style={{
                          fontSize: 16,
                          borderRadius: 14,
                          display: buttonState === 'idle2' ? 'block' : 'none',
                        }}
                        className='w-1/2 rounded-full border border-[#19191A75] bg-[#08090A] py-2 text-[#eaeaea]'
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileTap={{
                          scale: buttonState === 'loading' ? 1 : 0.95,
                        }}
                        layoutId='button-layout'
                        style={{
                          borderRadius: 14,
                          fontSize: 16,
                          width: buttonState === 'loading' ? '100%' : '50%',
                        }}
                        className='relative flex items-center justify-center gap-1 border border-[#ff484e3b]  bg-[#ff171733] py-2  text-[#e93036]'
                        disabled={buttonState === 'loading'}
                        onClick={() => {
                          setButtonState('loading');
                          setTimeout(() => {
                            setButtonState('idle');
                            setModalOpen((prevState: boolean) => !prevState);
                          }, 3000);
                        }}
                      >
                        {buttonState === 'loading' && (
                          <motion.span
                            style={{
                              borderRadius: 14,
                              width: 0,
                              fontSize: 16,
                            }}
                            initial={{ opacity: 0 }}
                            transition={{
                              duration: 2.7,
                              ease: easeOut,
                            }}
                            animate={{ opacity: 1, width: '100%' }}
                            exit={{ opacity: 0 }}
                            className='absolute left-0 top-0 h-full bg-[#DA3036]/10'
                          ></motion.span>
                        )}

                        <motion.span
                          className='z-10 flex items-center justify-center gap-1'
                          layoutId='delete-button'
                          layout='position'
                        >
                          <svg
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                            />
                          </svg>
                          {buttonContent[buttonState]}
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence mode='popLayout' initial={false}>
          <motion.div
            layoutId='modal-wrapper'
            className='table-cell w-full align-middle'
            style={{
              borderRadius: 30,
              background: 'transparent',
            }}
          >
            <motion.div layoutId='modal' className='inner'>
              <div className='w-full'>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setModalOpen((prevState: boolean) => !prevState);
                    setButtonState('idle2');
                  }}
                  layoutId='button-layout'
                  style={{ borderRadius: 14, width: '100%' }}
                  className=' border border-[#ff484e3b] bg-[#ff171733] px-20 py-2 text-[16px] text-[#e93036]'
                >
                  <motion.span
                    className='mx-auto block w-max'
                    layoutId='delete-button'
                    layout='position'
                  >
                    {buttonContent[buttonState]}
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
