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
    <div className='mb-4 rounded-xl border  border-[#141814] p-6 transition hover:bg-[#0f110f]'>
      <a href={url} target='_blank' className='flex flex-col gap-1'>
        <div className='flex flex-col gap-2'>
          <span className='w-fit rounded-lg !bg-[#70dd7d17] px-3 py-[3px] text-xs text-[#70dd7d]'>
            {categoria}
          </span>
          <h5>{nombre}</h5>
        </div>
        <div className='flex items-center gap-2'>
          {imgError ? (
            <div className='h-4 w-4 rounded-full bg-[#70dd7d17]'></div>
          ) : (
            <img
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
