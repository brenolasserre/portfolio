import React from 'react';

interface ContenedorProps {
  children: React.ReactNode;
  descripcion: string;
}

{
  /* <motion.div
  initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
/> */
}

// bg-[linear-gradient(to_right,#1d202525_1px,transparent_1px),linear-gradient(to_bottom,#1d202525_1px,transparent_1px)] bg-[size:20px_20px]

const Contenedor = ({ children, descripcion }: ContenedorProps) => {
  return (
    <div className='mb-16'>
      <div
        className='max-w-22 flex w-full flex-col rounded-t-xl border
 border-b-0 border-[#1e2025] bg-[#090a0c] bg-[linear-gradient(to_right,#1d202525_1px,transparent_1px),linear-gradient(to_bottom,#1d202525_1px,transparent_1px)] bg-[size:20px_20px]'
      >
        <div className='h-full w-full'>
          <div className='relative mx-auto min-h-[24em]'>{children}</div>
        </div>
      </div>
      <p className='w-full rounded-b-xl border border-[#1e2025] bg-[#090a0c] px-6 py-4 text-center text-xs text-[#4e4f52]'>
        {descripcion}
      </p>
    </div>
  );
};

export default Contenedor;
