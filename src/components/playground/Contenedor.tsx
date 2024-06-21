'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
interface ContenedorProps {
  children: React.ReactNode;
  url: string;
}

const Contenedor = ({ children, url }: ContenedorProps) => {
  return (
    <div className='mb-16 mt-2'>
      <div
        className={`max-w-22 flex w-full flex-col rounded-none border-y border-[#212122] bg-[#08090A] bg-[size:20px_20px]`}
      >
        <div className='relative mx-auto h-full w-full md:w-1/2 lg:w-2/5'>
          <div className='relative mx-auto my-8 flex min-h-[24em] items-center justify-center lg:my-24'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenedor;
