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
    <div className='mb-4 rounded-xl border border-[#c9daab15] transition hover:border-[#21241e] hover:bg-[#030303] active:scale-[0.98]'>
      <a href={url} target='_blank' className=' flex flex-col gap-1 lg:p-6 p-5'>
        <div className='flex flex-col gap-2'>
          <span className='monospace w-fit rounded-lg !bg-[#70dd7d0e] px-3 py-[3px] text-xs text-[#a7ff54]'>
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
          <span className='text-sm text-text-200'>{visibleLinkString}</span>
        </div>
      </a>
    </div>
  );
};

export default Resource;
