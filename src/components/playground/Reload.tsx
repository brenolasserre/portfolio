'use client';

import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/global.css';

export default function Reload() {
  return (
    <div className='flex w-full items-center justify-center p-10'>
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: '#17181d',
            transition: { type: 'ease', duration: 0.2 },
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
          className='relative overflow-hidden rounded-lg text-[#7b7b7e]'
        >
          <AnimatePresence mode='popLayout'>
            <motion.span
              whileTap={{ x: -1, scale: 1.05, color: '#a2a2a5' }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
              className='flex w-full items-center justify-center p-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                className='bi bi-arrow-left-short'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'
                />
              </svg>
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: '#17181d',
            transition: { type: 'ease', duration: 0.2 },
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
          className='relative overflow-hidden rounded-lg text-[#7b7b7e]'
        >
          <AnimatePresence mode='popLayout'>
            <motion.span
              whileTap={{ x: 1, scale: 1.05, color: '#a2a2a5' }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
              className='flex w-full items-center justify-center p-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
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
          </AnimatePresence>
        </motion.button>
      </div>
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: '#17181d',
            transition: { type: 'ease', duration: 0.2 },
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
          className='relative overflow-hidden rounded-lg text-[#7b7b7e] '
        >
          <AnimatePresence mode='popLayout'>
            <motion.span
              whileTap={{ y: 1, scale: 1.05, color: '#a2a2a5' }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.5 }}
              className='flex w-full items-center justify-center p-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                className='bi bi-arrow-down-short'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4'
                />
              </svg>
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: '#17181d',
            transition: { type: 'ease', duration: 0.2 },
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.4 }}
          className='relative overflow-hidden rounded-lg text-[#7b7b7e] '
        >
          <AnimatePresence mode='popLayout'>
            <motion.span
              whileTap={{ rotate: 40, scale: 1.05, color: '#a2a2a5' }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
              className='flex w-full items-center justify-center p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='18'
                fill='currentColor'
                className='bi bi-arrow-clockwise'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z'
                />
                <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466' />
              </svg>
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
