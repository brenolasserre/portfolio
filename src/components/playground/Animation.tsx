import { motion } from 'framer-motion';
import { useState } from 'react';
import '../../styles/global.css';

export default function Example() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className='wrapper flex justify-between gap-8'>
      <div>
        <button
          className='rounded-lg bg-white px-6 py-2 text-[#000] transition hover:bg-white/90'
          onClick={() => setShouldAnimate((s) => !s)}
        >
          Animate
        </button>
      </div>
      <div>
        <motion.div
          animate={{
            scale: shouldAnimate ? 1.5 : 1,
            x: shouldAnimate ? 40 : 0,
          }}
          className='h-10 w-10 rounded-xl !bg-[#305ACE]'
        />
      </div>
    </div>
  );
}
