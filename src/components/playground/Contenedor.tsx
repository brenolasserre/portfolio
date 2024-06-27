'use client';

import React from 'react';
interface ContenedorProps {
  children: React.ReactNode;
}

const Contenedor = ({ children }: ContenedorProps) => {
  return (
    <div className='mb-6 mt-2'>
      <div
        className={`max-w-22 flex w-full flex-col rounded-[1.75rem] border border-[#19191A] bg-[#08090A]`}
      >
        <div className='relative mx-auto h-full w-full md:w-1/2 lg:w-full'>
          <div className='relative mx-auto my-7 flex min-h-[21em] w-[84%] flex-col items-center justify-center md:w-full lg:my-24 lg:w-3/5'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenedor;
