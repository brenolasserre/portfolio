import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Shake = () => {
  const images = [
    {
      profile:
        'https://gw.alicdn.com/tfs/TB1Qs8qQ.H1gK0jSZSyXXXtlpXa-602-570.png',
    },
    {
      profile:
        'https://gw.alicdn.com/tfs/TB1qvBhQ7L0gK0jSZFtXXXQCXXa-995-935.png',
    },
    {
      profile:
        'https://gw.alicdn.com/tfs/TB1ibVhQ4z1gK0jSZSgXXavwpXa-640-520.png',
    },
    {
      profile:
        'https://gw.alicdn.com/tfs/TB1LI4Miz39YK4jSZPcXXXrUFXa-650-488.png',
    },
    {
      profile:
        'https://gw.alicdn.com/tfs/TB175OrhnM11u4jSZPxXXahcXXa-275-183.png',
    },
    {
      profile:
        'https://gw.alicdn.com/tfs/TB1ibVhQ4z1gK0jSZSgXXavwpXa-640-520.png',
    },
  ];

  const getRandomTransformOrigin = () => {
    const value = (16 + 40 * Math.random()) / 100;
    const value2 = (15 + 36 * Math.random()) / 100;
    return {
      originX: value,
      originY: value2,
    };
  };

  const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

  const randomDuration = () => Math.random() * 0.07 + 0.23;

  const variants = {
    start: (i: any) => ({
      rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
      transition: {
        delay: getRandomDelay(),
        repeat: Infinity,
        duration: randomDuration(),
      },
    }),
    reset: {
      rotate: 0,
    },
  };

  const controls = useAnimation();

  return (
    <div className='m-12'>
      <div className='flex justify-center gap-10'>
        <button
          type='button'
          className='rounded-full border border-[#19191A] bg-black px-3 py-1 text-white'
          onClick={() => {
            controls.start('start');
          }}
        >
          Delete
        </button>
        <button
          className='rounded-full border border-[#19191A] bg-black px-3 py-1 text-white'
          type='button'
          onClick={() => {
            controls.stop();
            controls.set('reset');
          }}
        >
          Cancel
        </button>
      </div>
      <br />

      <div className='nine-wrap grid grid-cols-3 gap-4 '>
        {images.map((item, i) => (
          <motion.img
            className='mx-auto h-40 w-fit rounded-2xl'
            src={`${item.profile}`}
            key={`${item.profile}-${i}`}
            style={{
              ...getRandomTransformOrigin(),
            }}
            custom={i}
            variants={variants}
            animate={controls}
          />
        ))}
      </div>
    </div>
  );
};

export default Shake;
