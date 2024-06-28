'use client';

import { useState } from 'react';

import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

export default function SharedLayout() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.3,
      }}
    >
      <div className='flex w-full items-center justify-center gap-2'>
        <motion.div className='flex items-center justify-between'>
          <motion.div
            style={{ width: '2.5em' }}
            animate={{
              width: open ? '6em' : '2.5em',
            }}
          >
            {open ? (
              <AnimatePresence initial={false}>
                <motion.div
                  className='flex items-center justify-center gap-2'
                  style={{ height: '40px' }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(!open)}
                  >
                    <motion.img
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.4,
                        type: 'spring',
                        bounce: 0,
                        delay: 0.3,
                      }}
                      src='/chat/close.svg'
                      alt='close'
                    />
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }}>
                    <motion.img
                      initial={{ opacity: 0, x: -20, scale: 0 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0 }}
                      transition={{
                        duration: 0.4,
                        type: 'spring',
                        bounce: 0,
                        delay: 0.15,
                      }}
                      src='/chat/clip.svg'
                      alt='clip'
                    />
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }}>
                    <motion.img
                      key='img'
                      initial={{ opacity: 0.5, scale: 0, x: -60 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0, x: -60 }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        bounce: 0,
                        delay: 0,
                      }}
                      src='/chat/img.svg'
                      alt='img'
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            ) : (
              <AnimatePresence initial={false}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  style={{ height: '40px' }}
                  onClick={() => setOpen(!open)}
                  className='w-10 rounded-full bg-[#201F20] p-2'
                  initial={{ scale: 0, opacity: 0, x: 60 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 60 }}
                >
                  <motion.img src='/chat/add.svg' alt='add' />
                </motion.button>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className='relative ml-auto flex items-center  rounded-full border-2 border-[#201F20] text-[#787878]'
          style={{ height: '40px' }}
          initial={{ width: '100%' }}
          animate={{
            width: open ? 'calc(100% - 100px)' : '100%',
          }}
        >
          <motion.input
            placeholder='Send a message..'
            className='w-full bg-transparent py-1 pl-4 pr-2 placeholder-[#787878] focus:outline-none'
            style={{ height: '100%' }}
          />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-10'>
            <div className='pointer-events-none absolute right-0 top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent to-[#08090A] to-60%'></div>
          </div>
          <span className='absolute right-2 top-1/2 -translate-y-1/2 transform'>
            <img src='/chat/send.svg' alt='send' />
          </span>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
