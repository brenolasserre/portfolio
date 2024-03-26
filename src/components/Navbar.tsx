import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Items = { [index: string]: Item };

type Item = {
  name: string;
  x: number;
  w: string;
};

const items: Items = {
  '/': { name: 'Home', x: 0, w: '77.95px' },
  '/blog': { name: 'Blog', x: 156.43, w: '65.33px' },
  // '/projects': { name: 'Projects', x: 77.95, w: '98.48px' },
  '/playground': { name: 'Playground', x: 77.95, w: '118.48px' },
};

export default function Nav() {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLocationChange = () => {
        let newPath = window.location.pathname;
        if (newPath === '/404' || newPath === '/_not-found') newPath = '/';
        setActivePath(newPath);
      };

      window.addEventListener('popstate', handleLocationChange);
      handleLocationChange();

      // Cleanup
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
    }
  }, []);

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <nav className='bg-transparent2 fixed left-1/2 z-50 mx-auto mt-4 flex -translate-x-1/2 transform items-center justify-center gap-4 rounded-full border border-border-400 px-1 py-1 text-sm backdrop-blur-md'>
      <div className='h-25 fixed top-0 z-10 w-screen' />
      <div className='relative z-50 flex items-center justify-center'>
        {Object.entries(items).map(([path, { name, w }]) => (
          <a
            key={path}
            href={path}
            className='ease z-20 mx-5 my-2 select-none text-base text-text-100 no-underline transition duration-100 hover:opacity-60'
            onClick={() => handleClick(path)}
          >
            {name}
            {activePath === path && (
              <motion.div
                className='motiondiv backdrop-blur-8 bg-transparent3 absolute top-0 -z-50 -ml-4 mt-[.1em] h-9 rounded-full border border-[#453E3E]'
                layoutId='bar'
                aria-hidden={true}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                style={{ width: w }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
