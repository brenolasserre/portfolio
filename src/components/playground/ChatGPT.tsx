'use client';

import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

export default function SharedLayout() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.6,
        type: 'spring',
        bounce: 0.3,
      }}
    >
      <div className='flex w-full items-center justify-center gap-3'>
        <motion.div className='flex items-center justify-between'>
          <motion.div
            style={{ width: '2.5em' }}
            animate={{
              width: open ? '6.5em' : '2.5em',
            }}
          >
            <AnimatePresence initial={false} mode='popLayout'>
              {open ? (
                <motion.div
                  className='flex items-center justify-center gap-3'
                  style={{ height: '40px' }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(!open)}
                  >
                    <motion.img
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.3, delay: 0 },
                      }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                        bounce: 0.2,
                        delay: 0.2,
                      }}
                      src='/chat/clip.svg'
                      alt='clip'
                    />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(!open)}
                  >
                    <motion.img
                      initial={{ filter: 'blur(4px)', x: -30, scale: 0 }}
                      animate={{ filter: 'blur(0px)', x: 0, scale: 1 }}
                      exit={{
                        filter: 'blur(4px)',
                        x: -30,
                        scale: 0,
                        transition: { duration: 0.3 },
                      }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                        bounce: 0.2,
                        delay: 0.1,
                      }}
                      src='/chat/folder.svg'
                      alt='folder'
                    />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(!open)}
                  >
                    <motion.img
                      key='img'
                      initial={{
                        filter: 'blur(6px)',
                        opacity: 0.5,
                        scale: 0,
                        x: -60,
                      }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      exit={{
                        filter: 'blur(6px)',
                        opacity: 0,
                        scale: 0,
                        x: -60,
                        transition: { duration: 0.3 },
                      }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                        bounce: 0.2,
                        delay: 0,
                      }}
                      src='/chat/img.svg'
                      alt='img'
                    />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key='add-button-wrapper'
                  initial={{ filter: 'blur(6px)', scale: 0, opacity: 0, x: 60 }}
                  animate={{ filter: 'blur(0px)', scale: 1, opacity: 1, x: 0 }}
                  exit={{ filter: 'blur(6px)', opacity: 0, scale: 1, x: 60 }}
                  transition={{
                    duration: 0.6,
                    type: 'spring',
                    bounce: 0.3,
                  }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    style={{ height: '40px' }}
                    onClick={() => setOpen(!open)}
                    className='w-10 rounded-full bg-[#201F20] p-2'
                  >
                    <motion.img src='/chat/add.svg' alt='add' />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          className='relative ml-auto flex items-center rounded-full border-2 border-[#201F20] text-[#9D9B9E]'
          style={{ height: '40px' }}
          initial={{ width: '100%' }}
          animate={{
            width: open ? 'calc(100% - 100px)' : '100%',
          }}
        >
          <motion.input
            placeholder='Send a message..'
            className='w-full bg-transparent py-1 pl-4 pr-2 placeholder-[#9D9B9E] focus:outline-none'
            style={{ height: '100%' }}
          />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-10'>
            <div className='pointer-events-none absolute right-0 top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent to-[#08090A] to-60%'></div>
          </div>
          <span className='absolute right-1 top-1/2 -translate-y-1/2 transform'>
            <motion.img
              whileTap={{ scale: 0.95 }}
              src='/chat/send.svg'
              alt='send'
              className='cursor-pointer p-1'
            />
          </span>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
