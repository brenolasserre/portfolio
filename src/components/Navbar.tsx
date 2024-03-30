import { useEffect, useState } from 'react';
import '../styles/global.css';

export default function Nav() {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLocationChange = () => {
        let newPath = window.location.pathname;
        if (newPath === '/404' || newPath === '/_not-found') newPath = '/';
        setActivePath(newPath);
        console.log(activePath);
      };

      window.addEventListener('popstate', handleLocationChange);
      handleLocationChange();

      // Cleanup
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
    }
  }, []);

  return (
    <div>
      <div className='flex h-[12em] w-full items-end justify-center md:h-[12em]'>
        <div className='maxContent mb-2 flex flex-col items-center justify-between gap-8 md:mb-14 md:flex-row'>
          <div className='flex items-end gap-2'>
            <div className='h-12 w-12 rounded-full bg-[#70DD7D]'></div>
            <div className='flex flex-col'>
              <h4 className='my-0 text-base text-text-100 md:text-lg'>
                Breno Lasserre
              </h4>
              <p className='font-xs my-0 text-[14px] text-text-200'>
                Front-End Developer
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-4 text-base '>
            <a href='/' className={activePath === '/' ? 'active' : ''}>
              About
            </a>
            <a
              href='/projects'
              className={activePath === '/projects' ? 'active' : ''}
            >
              Projects
            </a>
            <a
              href='/playground'
              className={activePath === '/playground' ? 'active' : ''}
            >
              Playground
            </a>
            <a
              href='/resources'
              className={activePath === '/resources' ? 'active' : ''}
            >
              Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
