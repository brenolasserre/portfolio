import React from 'react';

interface ContenedorProps {
  children: React.ReactNode;
}

const Contenedor = ({ children }: ContenedorProps) => {
  return (
    <div className='relative'>
      <div className='max-w-22 relative mb-16 flex w-full flex-col rounded-xl border border-[#141814]  px-4 py-24'>
        {/* <div className='absolute right-0 top-0 p-4'>
        <a href='/' className='ease text-white transition hover:text-[#c7c3ff]'>
          <svg width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
            />
          </svg>
        </a> bg-[#0f110f]
      </div> */}
        <div className='flex items-center justify-center'>{children}</div>
      </div>
    </div>
  );
};

export default Contenedor;
