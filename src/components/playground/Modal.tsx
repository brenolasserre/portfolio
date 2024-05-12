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
  } = {
    idle: 'Delete Project',
    idle2: 'Delete',
    loading: 'Deleting...',
  };

  return (
    <div className='relative mx-auto mb-12 flex h-full w-[90%] flex-col items-center justify-center rounded-b-[50px] border-[7px] border-t-0 border-black bg-[#030305] px-6 pb-10 pt-1 md:w-1/2 '>
      <MotionConfig transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}>
        {modalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='pointer-events-none absolute inset-0 top-0 h-full w-full rounded-b-[44px] bg-[#07070a9c] backdrop-blur-[4px]'
          />
        ) : null}

        <div>
          <ul className='flex flex-col gap-2'>
            <li className='flex items-center gap-2 rounded-md  px-3 py-2 text-sm text-[#E6EDF3] transition-all hover:cursor-pointer hover:bg-[#06090e]'>
              <img className='rounded-none' src='/modal/2.svg' />
              My Projects
            </li>
            <li className='flex items-center gap-2 rounded-md bg-[#06090e] px-3 py-2 text-sm text-[#E6EDF3]'>
              <img className='rounded-none' src='/modal/7.svg' />
              Settings
            </li>

            <li className='flex items-center gap-2 rounded-md  px-3 py-2 text-sm text-[#E6EDF3] transition-all hover:cursor-pointer hover:bg-[#06090e]'>
              <img className='rounded-none' src='/modal/5.svg' />
              Collaborators
            </li>
            <li className='flex items-center gap-2 rounded-md  px-3 py-2 text-sm text-[#E6EDF3] transition-all hover:cursor-pointer hover:bg-[#06090e]'>
              <img className='rounded-none' src='/modal/6.svg' />
              Security
            </li>
          </ul>

          <p className='mb-2 mt-8 text-sm text-zinc-300'>Delete this project</p>

          <p className='mb-8 text-sm text-zinc-500'>
            Once you delete a project, there is no going back. Please be
            certain.
          </p>
        </div>

        <AnimatePresence mode='popLayout'>
          {modalOpen ? (
            <motion.div
              className='custom-width absolute bottom-4 z-40 p-6 text-center '
              layoutId='modal-wrapper'
              style={{ borderRadius: 36, background: '#010205' }}
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
                          opacity: 0,
                          filter: 'blur(0px)',
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.3 }}
                        exit={{ y: 10, opacity: 0, filter: 'blur(2px)' }}
                        className='mb-8'
                      >
                        <motion.span
                          layoutId='icon-span'
                          layout='position'
                          className='mb-4 mt-2 flex items-center justify-center'
                        >
                          <motion.svg
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ y: 20, opacity: 0 }}
                            layout='position'
                            layoutId='icon-outer'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='white'
                            className='h-7 w-7'
                          >
                            <motion.path
                              layout='position'
                              layoutId='icon'
                              transition={{
                                yoyo: Infinity,
                                duration: 0.35,
                              }}
                              initial={{
                                pathLength: 0,
                                y: 20,
                                filter: 'blur(4px)',
                              }}
                              animate={{
                                pathLength: 1,
                                y: 0,
                                filter: 'blur(0px)',
                              }}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                            />
                          </motion.svg>
                        </motion.span>
                        <motion.h2
                          layoutId='header'
                          layout='position'
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                          className='my-2 text-xl font-semibold text-white'
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
                          className='text-[15px] text-zinc-500'
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
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        layoutId='content'
                        className='mb-8'
                      >
                        <motion.span
                          layout='position'
                          layoutId='icon-span'
                          className='mb-4 mt-2  flex items-center justify-center'
                        >
                          <motion.svg
                            layoutId='icon-outer'
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
                              d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                            />
                          </motion.svg>
                        </motion.span>
                        <motion.h2
                          layoutId='header'
                          layout='position'
                          className='my-2 text-xl font-semibold text-white'
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
                          className='text-[15px] text-zinc-500'
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
                          borderRadius: 14,
                          display: buttonState === 'idle2' ? 'block' : 'none',
                        }}
                        className='w-1/2 rounded-full bg-[#EDEDED] py-2 text-black'
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileTap={{
                          scale: buttonState === 'loading' ? 1 : 0.9,
                        }}
                        layoutId='button-layout'
                        style={{
                          borderRadius: 14,
                          fontSize: 16,
                          width: buttonState === 'loading' ? '100%' : '50%',
                        }}
                        className='relative flex items-center justify-center gap-1 bg-[#ff31311e] py-2  text-[#DA3036]'
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
                            animate={{ opacity: 1, width: '100%' }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
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
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setModalOpen((prevState: boolean) => !prevState);
                    setButtonState('idle2');
                  }}
                  layoutId='button-layout'
                  style={{ borderRadius: 14, width: '100%' }}
                  className='bg-[#ff31311e] px-20 py-2 text-[14px] text-[#DA3036] md:text-[16px]'
                >
                  <motion.span layoutId='delete-button' layout='position'>
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
