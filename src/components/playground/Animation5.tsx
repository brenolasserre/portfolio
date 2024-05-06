import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';
import { useState } from 'react';
import '../../styles/global.css';

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <div className='flex w-full items-center justify-center'>
      <button
        className='mx-auto w-fit rounded-lg bg-white px-6 py-2 text-sm text-black'
        onClick={() => setShowExtraContent((b) => !b)}
      >
        CAMBIAR ALTURA
      </button>
      <motion.div
        animate={{ height: bounds.height }}
        className='flex w-1/2 flex-col overflow-hidden rounded-xl bg-black text-sm'
      >
        <div ref={elementRef} className='px-6 py-4'>
          <p className='m-0'>
            Paso 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Soluta, facilis. Doloremque nam reprehenderit temporibus, corrupti
            odio sunt nemo sint nostrum! Corporis ullam eius odio fuga vel enim
            dolorem quaerat iure.
          </p>
          {showExtraContent ? (
            <p className='m-0'>
              This extra content will change the height of the drawer.
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
