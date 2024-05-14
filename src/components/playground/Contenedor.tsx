'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
interface ContenedorProps {
  children: React.ReactNode;
  descripcion: string;
  tags: string;
}

// bg-[linear-gradient(to_right,#1d202525_1px,transparent_1px),linear-gradient(to_bottom,#1d202525_1px,transparent_1px)] bg-[size:20px_20px]

const Contenedor = ({ children, descripcion, tags }: ContenedorProps) => {
  return (
    <div className='mb-16'>
      <div
        className='max-w-22 flex w-full flex-col rounded-t-xl border
 border-b-0 border-[#212122] bg-[#08090A] bg-[size:20px_20px]'
      >
        <div className='relative h-full w-full'>
          <div className='absolute top-0 z-40 flex w-full items-center justify-end p-4'>
            <AnimatePresence mode='popLayout'>
              <motion.button
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
              </motion.button>
            </AnimatePresence>
          </div>
          <div className='relative mx-auto flex min-h-[24em] items-center justify-center'>
            {children}
          </div>
        </div>
      </div>
      <p className='flex w-full items-center justify-center gap-4 rounded-b-xl border border-[#212122] bg-[#101113] px-6 py-4 text-center text-xs text-[#8B8B8B]'>
        <p className='m-0'>{descripcion}</p>
        <p className='m-0 w-fit rounded-md border border-[#282826] bg-[#111111] px-2 py-[2px] font-mono text-[#8B8B8B]'>
          #{tags}
        </p>
      </p>
    </div>
  );
};

export default Contenedor;
