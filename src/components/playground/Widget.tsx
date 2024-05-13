import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';

const Receipt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}>
      <AnimatePresence mode='popLayout'>
        <motion.div className='my-12 flex w-full flex-col items-center justify-center gap-4'>
          <motion.div
            animate={{ height: bounds.height }}
            className='flex w-[85%] flex-col gap-3 rounded-3xl bg-[#101114] md:w-1/2'
          >
            <div ref={ref} className='px-8 py-10'>
              <img
                className='mx-auto mb-4 w-12 rounded-2xl'
                src='https://i.pinimg.com/originals/ee/45/b8/ee45b8c8c160f85af8655a104029b466.jpg'
                alt='Store Picture'
              />
              <h3 className='mb-10 mt-2 text-center text-xl font-semibold md:text-2xl'>
                Purchase Confirmation
              </h3>
              <p className='flex w-full items-center justify-between '>
                <span>Total: </span>
                <span>182,02$</span>
              </p>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className='flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                    <span>Product</span>
                    <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                    <span>182,02$</span>
                  </p>
                  <p className='flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                    <span>Shipping</span>
                    <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                    <span>17,11$</span>
                  </p>
                  <p className='flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                    <span>Taxes</span>
                    <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                    <span>7,68$</span>
                  </p>
                  <p className='flex w-full items-center justify-between text-base text-[#757779] md:text-[14px]'>
                    <span>Fees</span>
                    <span className='mx-3 w-full border-b border-dashed border-[#282826]/30' />
                    <span>4,50$</span>
                  </p>
                </motion.div>
              )}
              <motion.p
                layout='position'
                className='mt-6 flex w-full items-center justify-between text-sm'
              >
                <span className='h-px w-1/5 bg-gradient-to-r from-[#282826]/80 to-transparent md:w-1/4' />

                {!isOpen ? (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      layoutId='button-breakdown'
                      layout='position'
                      className=' flex w-fit justify-center gap-2 text-center text-[#757779]'
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      See breakdown
                    </motion.button>

                    {/* <motion.svg
                      layoutId='breakdown-icon'
                      width='20'
                      height='20'
                      fill='#757779'
                      viewBox='0 0 16 16'
                    >
                      <motion.path
                        layoutId='path'
                        layout='position'
                        fillRule='evenodd'
                        d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4'
                      />
                    </motion.svg> */}
                  </>
                ) : (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      layoutId='button-breakdown'
                      layout='position'
                      className=' flex w-fit justify-center gap-2 text-center text-[#757779]'
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      Hide breakdown
                    </motion.button>
                    {/* <motion.svg
                      layoutId='breakdown-icon'
                      width='20'
                      height='20'
                      fill='#757779'
                      viewBox='0 0 16 16'
                    >
                      <motion.path
                        layoutId='path'
                        layout='position'
                        fill-rule='evenodd'
                        d='M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5'
                      />
                    </motion.svg> */}
                  </>
                )}

                <span className='h-px w-1/5 bg-gradient-to-l from-[#282826]/80 to-transparent md:w-1/4' />
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Receipt;
