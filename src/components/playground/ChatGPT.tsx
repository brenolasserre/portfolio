'use client';

import { useState } from 'react';
import useMeasure from 'react-use-measure';

import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

export default function SharedLayout() {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <div className='flex w-full items-center justify-center gap-2'>
        <motion.div className='flex items-center justify-between'>
          <motion.div className='w-fit'>
            {open ? (
              <AnimatePresence>
                <motion.div
                  className='flex items-center justify-center gap-2'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  style={{ height: '40px' }}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 }}
                    src='/chat/clip.svg'
                    alt='clip'
                  />
                  <motion.img
                    initial={{ opacity: 0, x: -30, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0 }}
                    transition={{ delay: 0.2 }}
                    src='/chat/folder.svg'
                    alt='folder'
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src='/chat/img.svg'
                    alt='img'
                    layoutId='enterIcon'
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.button
                style={{ height: '40px' }}
                onClick={() => setOpen(!open)}
                className='w-10 rounded-full bg-[#201F20] p-2'
                layoutId='enterIcon'
                initial={{ filter: 'blur(4px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                exit={{ filter: 'blur(4px)', opacity: 0 }}
              >
                <motion.img src='/chat/add.svg' alt='add' />
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className='relative ml-auto flex items-center  rounded-full border-2 border-[#201F20] text-[#787878]'
          initial={{ width: '100%' }}
          animate={{
            width: open ? 'calc(100% - 100px)' : '100%',
            height: '40px',
          }}
          ref={ref}
        >
          <motion.input
            placeholder='Message'
            className='w-full bg-transparent py-1 pl-4 pr-2 placeholder-[#787878] focus:outline-none'
            style={{ height: '100%' }}
          />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-10'>
            <div className='pointer-events-none absolute right-0 top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent to-[#08090A] to-60%'></div>
          </div>
          <span className='absolute right-2 top-1/2 -translate-y-1/2 transform'>
            <img
              src='/chat/send.svg'
              alt='send'
              onClick={() => setOpen(!open)}
            />
          </span>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
