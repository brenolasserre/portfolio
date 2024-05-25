import { useState } from 'react';
import { motion, AnimatePresence, easeOut, MotionConfig } from 'framer-motion';

const Receipt = () => {
  const [cancelOpen2, setCancelOpen2] = useState<boolean>(false);
  const [buttonState2, setButtonState2] = useState('testidle');

  const buttonContent2: {
    [key: string]: string;
    testidle: string;
    testidle2: string;
    testloading: string;
  } = {
    testidle: 'Delete Project',
    testidle2: 'Delete',
    testloading: 'Deleting...',
  };

  return (
    <div className='flex w-3/4 justify-center md:w-2/5'>
      <MotionConfig transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}>
        <AnimatePresence mode='popLayout' initial={false}>
          {cancelOpen2 ? (
            <div className='flex w-full items-center justify-center gap-2'>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCancelOpen2((prevState: boolean) => !prevState);
                  setButtonState2('testidle');
                }}
                initial={{ x: 40, opacity: 0, scale: 0.1, filter: 'blur(4px)' }}
                animate={{ x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ x: 40, opacity: 0, scale: 0.1, filter: 'blur(4px)' }}
                style={{
                  fontSize: 16,
                  borderRadius: 14,
                  display: buttonState2 === 'testidle2' ? 'block' : 'none',
                }}
                className='w-1/2 rounded-full bg-[#EDEDED] py-2 text-black'
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{
                  scale: buttonState2 === 'testloading' ? 1 : 0.9,
                }}
                layoutId='button-layout2'
                style={{
                  borderRadius: 14,
                  fontSize: 16,
                  width: buttonState2 === 'testloading' ? '100%' : '50%',
                }}
                className='relative flex items-center justify-center gap-1 bg-[#ff31311e] py-2 text-[#DA3036]'
                disabled={buttonState2 === 'testloading'}
                onClick={() => {
                  setButtonState2('testloading');
                  setTimeout(() => {
                    setButtonState2('testidle');
                    setCancelOpen2((prevState: boolean) => !prevState);
                  }, 3000);
                }}
              >
                {buttonState2 === 'testloading' && (
                  <motion.span
                    style={{
                      borderRadius: 14,
                      width: 0,
                      fontSize: 16,
                      backgroundColor: '#ff31311e',
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2.7, ease: easeOut }}
                    animate={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0 }}
                    className='absolute left-0 top-0 h-full'
                  ></motion.span>
                )}
                <motion.span
                  className='z-10 flex items-center justify-center gap-1'
                  layoutId='delete-button2'
                  layout='position'
                >
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                    />
                  </svg>
                  {buttonContent2[buttonState2]}
                </motion.span>
              </motion.button>
            </div>
          ) : (
            <motion.div
              className='table-cell w-full align-middle'
              style={{ borderRadius: 30, background: 'transparent' }}
            >
              <motion.div layoutId='modal2' className='inner'>
                <div className='w-full'>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setCancelOpen2((prevState: boolean) => !prevState);
                      setButtonState2('testidle2');
                    }}
                    layoutId='button-layout2'
                    style={{
                      borderRadius: 14,
                      width: '100%',
                      backgroundColor: '#ff31311e',
                    }}
                    className=' py-2 text-[16px] text-[#DA3036]'
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <motion.span
                      className='mx-auto block w-max'
                      layoutId='delete-button2'
                      layout='position'
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.3 }}
                    >
                      {buttonContent2[buttonState2]}
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

export default Receipt;
