import { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

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
    success: string;
  } = {
    idle: 'Delete Project',
    idle2: 'Delete',
    loading: 'Deleting...',
    success: 'Deleted Succesfully',
  };

  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <MotionConfig
        transition={{ type: 'spring', bounce: 0.25, duration: 0.8 }}
      >
        {modalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='pointer-events-none absolute inset-0 top-0 h-full w-full bg-black/10'
          />
        ) : null}

        <AnimatePresence mode='popLayout'>
          {modalOpen ? (
            <motion.div
              className='z-40 w-4/5 p-6 text-center md:w-1/2 '
              layoutId='modal-wrapper'
              style={{ borderRadius: 28, background: '#080808' }}
            >
              <motion.div layoutId='modal'>
                <div className='header'>
                  <div className='header-inner'>
                    {buttonState === 'idle' || buttonState === 'idle2' ? (
                      <motion.div
                        key={buttonState}
                        layoutId='content'
                        initial={{
                          y: 50,
                          opacity: 0,
                          filter: 'blur(4px)',
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{ y: 50, opacity: 0, filter: 'blur(4px)' }}
                        className='mb-8'
                      >
                        <span className='my-4 flex items-center justify-center'>
                          <svg
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='white'
                            className='h-7 w-7'
                          >
                            <motion.path
                              layoutId='icon'
                              transition={{
                                yoyo: Infinity,
                                ease: 'easeInOut',
                                duration: 0.5,
                              }}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                            />
                          </svg>
                        </span>

                        <motion.h2
                          layoutId='header'
                          exit={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          className='my-2 text-2xl font-semibold text-white'
                        >
                          Are you sure?
                        </motion.h2>

                        <motion.p
                          layoutId='header-text'
                          exit={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          className='text-zinc-400'
                        >
                          This action is <u>not reversible</u>. You will delete
                          your project and all of the information you've stored.
                        </motion.p>
                      </motion.div>
                    ) : (
                      <AnimatePresence mode='popLayout'>
                        <motion.div
                          layoutId='content'
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ x: -50, opacity: 0 }}
                          className='mb-8'
                        >
                          <span className='my-4 flex items-center justify-center'>
                            <svg
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='white'
                              className='h-7 w-7'
                            >
                              <motion.path
                                layoutId='icon'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                              />
                            </svg>
                          </span>
                          <motion.h2
                            layoutId='header'
                            exit={{ y: 20, filter: 'blur(2px)' }}
                            animate={{ y: 0, filter: 'blur(0px)' }}
                            className='my-2 text-2xl font-semibold text-white'
                          >
                            Deleting Project
                          </motion.h2>
                          <motion.p
                            layoutId='header-text'
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            className='text-zinc-400'
                          >
                            Tip: You can create new projects anytime at{' '}
                            <u>/projects</u>.
                          </motion.p>
                        </motion.div>
                      </AnimatePresence>
                    )}

                    <div className='flex w-full items-center gap-2'>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
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
                          borderRadius: 10,
                          display:
                            buttonState === 'loading' ||
                            buttonState === 'success'
                              ? 'none'
                              : 'block',
                        }}
                        className='w-1/2 rounded-full bg-[#EDEDED] py-2 text-black'
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileTap={{
                          scale:
                            buttonState === 'loading' ||
                            buttonState === 'success'
                              ? 1
                              : 0.9,
                        }}
                        layoutId='button-layout'
                        style={{
                          fontSize: 16,
                          borderRadius: 10,
                          width:
                            buttonState === 'loading' ||
                            buttonState === 'success'
                              ? '100%'
                              : '50%',
                        }}
                        className='flex items-center justify-center gap-1 bg-[#230D0E] py-2 text-[#DA3036]'
                        disabled={
                          buttonState === 'loading' || buttonState === 'success'
                        }
                        onClick={() => {
                          setButtonState('loading');
                          setTimeout(() => {
                            setButtonState('success');
                          }, 1750);
                          setTimeout(() => {
                            setModalOpen((prevState: boolean) => !prevState);
                            setButtonState('idle');
                          }, 3000);
                        }}
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
            className='table-cell w-fit align-middle'
            style={{
              borderRadius: 30,
              background: 'transparent',
              display: modalOpen ? 'none' : 'block',
            }}
          >
            <motion.div layoutId='modal' className='inner'>
              <div className='w-full'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setModalOpen((prevState: boolean) => !prevState);
                    setButtonState('idle2');
                  }}
                  layoutId='button-layout'
                  style={{ fontSize: 16, borderRadius: 10, width: '100%' }}
                  className=' bg-[#230D0E] px-20 py-2 text-[#DA3036]'
                >
                  {buttonContent[buttonState]}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

{
  /* <span className='my-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#230D0E] py-2 text-sm text-[#DA3036]'>
<svg
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='#DA3036'
  className='h-5 w-5'
>
  <motion.path
    transition={{
      yoyo: Infinity,
      ease: 'easeInOut',
      duration: 0.5,
    }}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
  />
</svg>
This action is <u>not reversible</u>
</span> */
}
