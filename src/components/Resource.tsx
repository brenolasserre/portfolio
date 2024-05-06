import { useState } from 'react';

interface ResourceProps {
  categoria: string;
  nombre: string;
  url: string;
  icon: string;
  visibleLinkString: string;
}

const Resource = ({
  categoria,
  nombre,
  url,
  icon,
  visibleLinkString,
}: ResourceProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className='mb-4 rounded-xl border border-[#1e2025] transition hover:border-[#1a1c25] hover:bg-[#050608] active:scale-[0.98]'>
      <a href={url} target='_blank' className=' flex flex-col gap-1 p-5 lg:p-6'>
        <div className='flex flex-col gap-2'>
          <span className='monospace w-fit rounded-lg !bg-[#567be218] px-3 py-[3px] text-xs text-[#567ce2]'>
            #{categoria}
          </span>
          <h5 className='text-xl lg:text-2xl'>{nombre}</h5>
        </div>
        <div className='flex items-center gap-2'>
          {imgError ? (
            <div className='h-4 w-4 rounded-full bg-[#a7ff5415]'></div>
          ) : (
            <img
              loading='lazy'
              src={icon}
              alt={nombre}
              className='w-4 rounded-full'
              onError={() => setImgError(true)}
            />
          )}
          <span className='text-text-200 text-sm font-[400]'>
            {visibleLinkString}
          </span>
        </div>
      </a>
    </div>
  );
};

export default Resource;
