import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [ref, bounds] = useMeasure();

  const handleNextStep = () => {
    if (selectedOption !== '') {
      console.log(currentStep);

      setCurrentStep((prev) => prev + 1);
      console.log(currentStep);
    }
  };

  const selectedBorderClass = `outline-[${selectedOption}]`;

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <div className='my-16 flex w-full justify-center'>
        <motion.div
          animate={{ height: bounds.height + 64 }}
          className='relative flex w-5/6 flex-col gap-2 rounded-3xl border border-[#212122]  bg-[#101114] px-7 py-8 md:w-1/2'
        >
          <div className='absolute -top-6 left-0 -z-10 h-12 w-full bg-red-500'></div>
          <div ref={ref}>
            {currentStep === 2 ? (
              <div>
                <span>
                  <p className='m-0 text-[#EAEAEA]'>Second Step</p>
                  <p className='text-[#757779]'>Choose a theme</p>
                </span>
                <div className='mb-4 mt-6 flex items-center justify-center gap-4'>
                  <div
                    className={`transition-border flex w-1/2  cursor-pointer flex-col rounded-2xl border border-[#212122] bg-[#08090A] p-4 text-[#EAEAEA] outline-2 -outline-offset-2 hover:border-[#2b2b2c]   ${selectedBorderClass} `}
                    onClick={() => setSelectedOption2('Dark')}
                  >
                    <div className='mb-2 flex h-fit w-full flex-col gap-1 rounded-lg border border-[#212122] bg-[#151618] p-4'>
                      <motion.span
                        initial={{ width: 10 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                        className='mx-auto h-2 w-full rounded-md bg-[#2a2c2e] md:h-4'
                      />
                      <motion.span
                        initial={{ width: 40 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 0.3 }}
                        className='mx-auto mb-4 h-2 w-3/4 rounded-md bg-[#2a2c2e]'
                      />
                      <span
                        className={`mx-auto h-2 w-full rounded-md ${'bg-[' + selectedOption + ']'}  md:h-4`}
                      ></span>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='radio'
                        name='option'
                        value='Dark'
                        checked={selectedOption2 === 'Dark'}
                        onChange={() => setSelectedOption2('Dark')}
                        className='sr-only'
                      />
                      <label className='w-full cursor-pointer text-center text-sm'>
                        Dark
                      </label>
                    </div>
                  </div>

                  <div
                    className={`transition-border -outline-offset-200 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#08090A] p-4 text-[#EAEAEA] outline-2 hover:border-[#2b2b2c]  `}
                    onClick={() => setSelectedOption2('Light')}
                  >
                    <div className='mb-2 flex h-fit w-full flex-col gap-1 rounded-lg border border-[#212122] bg-[#dddddd] p-4'>
                      <motion.span
                        initial={{ width: 10 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                        className='mx-auto h-2 w-full rounded-md bg-[#c8c8c9] md:h-4'
                      />
                      <motion.span
                        initial={{ width: 40 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 0.3 }}
                        className='mx-auto mb-4 h-2 w-3/4 rounded-md bg-[#c8c8c9]'
                      />
                      <span
                        className={`mx-auto h-2 w-full rounded-md ${'bg-[' + selectedOption + ']'}  md:h-4`}
                      ></span>
                    </div>
                    <div className=' flex items-center'>
                      <input
                        type='radio'
                        name='option'
                        value='Light'
                        checked={selectedOption2 === 'Light'}
                        onChange={() => setSelectedOption2('Light')}
                        className='sr-only '
                      />
                      <label className='w-full cursor-pointer text-center text-sm'>
                        Light
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentStep === 3 ? (
              <div>
                <span>
                  <p className='m-0 text-[#EAEAEA]'>Third Step</p>
                  <p className='text-[#757779]'>Choose a language</p>
                </span>
                <div className='mb-4 mt-6 flex items-center justify-center gap-4'>
                  <div
                    className={`transition-border flex w-1/2  cursor-pointer flex-col rounded-2xl border border-[#212122] bg-[#08090A] p-4 text-[#EAEAEA] outline-2 -outline-offset-2 hover:border-[#2b2b2c]  ${selectedOption2 === 'Spanish' && 'outline-[{selectedOption}] outline'} `}
                    onClick={() => setSelectedOption2('Spanish')}
                  >
                    <div className='mb-2 flex h-fit w-full flex-col gap-1 rounded-lg border border-[#212122] bg-[#151618] p-4'>
                      <span className='text-center text-2xl'>ES</span>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='radio'
                        name='option'
                        value='Spanish'
                        checked={selectedOption2 === 'Spanish'}
                        onChange={() => setSelectedOption2('Spanish')}
                        className='sr-only'
                      />
                      <label className='w-full cursor-pointer text-center text-sm'>
                        Spanish
                      </label>
                    </div>
                  </div>

                  <div
                    className={`transition-border flex w-1/2 cursor-pointer flex-col rounded-2xl border  border-[#212122] bg-[#08090A] p-4 text-[#EAEAEA] outline-2 -outline-offset-2 hover:border-[#2b2b2c] ${selectedOption2 === 'English' && 'outline outline-[#46c577]'}`}
                    onClick={() => setSelectedOption2('English')}
                  >
                    <div className='mb-2 flex h-fit w-full flex-col gap-1 rounded-lg border border-[#212122] bg-[#151618] p-4'>
                      <span className='text-center text-2xl'>EN</span>
                    </div>
                    <div className=' flex items-center'>
                      <input
                        type='radio'
                        name='option'
                        value='English'
                        checked={selectedOption2 === 'English'}
                        onChange={() => setSelectedOption2('English')}
                        className='sr-only '
                      />
                      <label className='w-full cursor-pointer text-center text-sm'>
                        English
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentStep === 1 ? (
              <div>
                <span>
                  <p className='m-0 text-[#EAEAEA]'>First Step</p>
                  <p className='text-[#757779]'>Choose a color</p>
                </span>

                <div className='borde mb-4 mt-6 flex flex-wrap items-center justify-between gap-1 rounded-2xl border-[#212122] bg-[#08090A] p-2'>
                  <div
                    className={`outline-3 flex w-fit cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#d8433e')}
                  >
                    <div
                      className={` flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#d8433e] p-3 text-[#EAEAEA] outline-2 -outline-offset-1 ${selectedOption === '#d8433e' && 'outline outline-[#fc7c77]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#d8433e'
                        checked={selectedOption === '#d8433e'}
                        onChange={() => setSelectedOption('#d8433e')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Red</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#ff8c3f')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#ff8c3f] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#ff8c3f' && 'outline outline-[#ffb482]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#ff8c3f'
                        checked={selectedOption === '#ff8c3f'}
                        onChange={() => setSelectedOption('#ff8c3f')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Orange</label>
                    </div>
                  </div>

                  <div
                    className={`flex w-fit cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] outline-2 -outline-offset-2 `}
                    onClick={() => setSelectedOption('#ece35f')}
                  >
                    <div
                      className={`outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#ece35f] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#ece35f' && 'outline outline-[#fff098]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#ece35f'
                        checked={selectedOption === '#ece35f'}
                        onChange={() => setSelectedOption('#ece35f')}
                        className='sr-only'
                      />
                      <label className='bg sr-only'>Yellow</label>
                    </div>
                  </div>
                  <div
                    className={`flex w-fit cursor-pointer  flex-col rounded-2xl p-3 text-[#EAEAEA] outline-2 -outline-offset-2 `}
                    onClick={() => setSelectedOption('#62b8e9')}
                  >
                    <div
                      className={`outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#62b8e9] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#62b8e9' && 'outline outline-[#9be8ff]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#62b8e9'
                        checked={selectedOption === '#62b8e9'}
                        onChange={() => setSelectedOption('#62b8e9')}
                        className='sr-only'
                      />
                      <label className='bg sr-only'>Lightblue</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#c550cf')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#c550cf] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#c550cf' && 'outline outline-[#e297ff]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#c550cf'
                        checked={selectedOption === '#c550cf'}
                        onChange={() => setSelectedOption('#c550cf')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Pink</label>
                    </div>
                  </div>
                  <div
                    className={`flex w-fit cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] outline-2 -outline-offset-2 `}
                    onClick={() => setSelectedOption('#905fec')}
                  >
                    <div
                      className={`outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#905fec] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#905fec' && 'outline outline-[#aa83f1]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#905fec'
                        checked={selectedOption === '#905fec'}
                        onChange={() => setSelectedOption('#905fec')}
                        className='sr-only'
                      />
                      <label className='bg sr-only'>Purple</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#643ac5')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#643ac5] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#643ac5' && 'outline outline-[#805cd3]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#643ac5'
                        checked={selectedOption === '#643ac5'}
                        onChange={() => setSelectedOption('#643ac5')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Dark Purple</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#495bc4')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#495bc4] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#495bc4' && 'outline outline-[#697ef3]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#495bc4'
                        checked={selectedOption === '#495bc4'}
                        onChange={() => setSelectedOption('#495bc4')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Blue</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#2826a1')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#2826a1] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#2826a1' && 'outline outline-[#3543c5]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#2826a1'
                        checked={selectedOption === '#2826a1'}
                        onChange={() => setSelectedOption('#2826a1')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Dark Blue</label>
                    </div>
                  </div>
                  <div
                    className={`outline-3 flex w-fit  cursor-pointer flex-col rounded-2xl p-3 text-[#EAEAEA] -outline-offset-2 `}
                    onClick={() => setSelectedOption('#46c577')}
                  >
                    <div
                      className={` outline-3 flex w-1/2 cursor-pointer flex-col rounded-2xl bg-[#46c577] p-3 text-[#EAEAEA] -outline-offset-1 ${selectedOption === '#46c577' && 'outline outline-[#97ff9d]'}`}
                    ></div>
                    <div className='flex items-center justify-center'>
                      <input
                        type='radio'
                        name='option'
                        value='#46c577'
                        checked={selectedOption === '#46c577'}
                        onChange={() => setSelectedOption('#46c577')}
                        className='sr-only'
                      />
                      <label className='sr-only'>Lime</label>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            <AnimatePresence mode='popLayout' initial={false}>
              {currentStep >= 2 ? (
                <div className='flex w-full items-center justify-center gap-2'>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className='mt-4 w-1/2 rounded-xl bg-[#0b0c0e] p-2 text-[15px] text-[#b3b3b3] disabled:opacity-50 md:text-[16px]'
                  >
                    Go back
                  </motion.button>
                  <motion.button
                    whileTap={{
                      scale: 0.95,
                    }}
                    style={{
                      borderRadius: 14,
                      fontSize: 16,
                      width: currentStep < 0 ? '100%' : '50%',
                    }}
                    className={`${'bg-[' + selectedOption + ']'} mt-4 w-full rounded-xl  bg-[#50e27c] p-2 text-[15px] font-semibold text-[#08090A] disabled:opacity-50 md:text-[16px]`}
                    onClick={handleNextStep}
                    disabled={selectedOption2 === ''}
                  >
                    <motion.span
                      className='z-10 flex items-center justify-center gap-1'
                      layoutId='delete-button2'
                      layout='position'
                    >
                      Next Step
                    </motion.span>
                  </motion.button>
                </div>
              ) : (
                <motion.div className='inner'>
                  <div className='w-full'>
                    <motion.button
                      whileTap={{
                        scale: 0.95,
                      }}
                      style={{
                        borderRadius: 14,
                        fontSize: 16,
                        width: currentStep >= 1 ? '100%' : '50%',
                      }}
                      className={`${selectedOption != '' ? 'bg-[' + selectedOption + ']' : 'bg-white'} mt-4 w-full rounded-xl  p-2 text-[15px] font-semibold text-[#08090A] disabled:opacity-50 md:text-[16px]`}
                      onClick={handleNextStep}
                      disabled={selectedOption === ''}
                    >
                      <motion.span
                        className='mx-auto block w-max'
                        layoutId='delete-button2'
                        layout='position'
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.3 }}
                      >
                        Next Step
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default RadioGroup;
