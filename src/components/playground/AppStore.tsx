// import useMeasure from 'react-use-measure';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import '../../styles/global.css';

export default function Movies() {
  return (
    <MotionConfig transition={{ duration: 0.3, type: 'spring', bounce: 0 }}>
      <AnimatePresence mode='popLayout'>
        <div className='flex h-full w-full cursor-pointer justify-center gap-1 p-20 '>
          {/* <h3>What To Watch</h3> */}
          <motion.div
            style={{ width: '20%' }}
            whileHover={{ width: '50%' }}
            className='h-full rounded-l-xl bg-[url("/movies/uncutgems.jpg")] bg-cover bg-center'
          ></motion.div>
          <motion.div
            style={{ width: '20%' }}
            whileHover={{ width: '50%' }}
            className=' h-full  bg-[url("/movies/her.jpg")] bg-cover bg-center'
          ></motion.div>
          <motion.div
            style={{ width: '20%' }}
            whileHover={{ width: '50%', filter: 'contrast(-10px)' }}
            className='h-full rounded-r-xl  bg-[url("/movies/ozark.jpg")] bg-cover bg-center'
          ></motion.div>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
}

{
  /* <motion.div
style={{ opacity: 0, x: 25 }}
whileHover={{ opacity: 1, x: 0 }}
className='mt-12 h-full !w-full pl-4'
>
<h4 className='m-0 text-xl'>Uncut Gems</h4>
<p className='text-sm'>2023 - Netflix - 120mins</p>
<button className='absolute flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-2 text-sm'>
  Watch Trailer
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-5 w-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5'
    />
  </svg>
</button>
</motion.div> */
}
