import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = useMemo(
    () => [
      {
        id: 1,
        borderColor: 'border-[#33fba1]/50',
        backgroundColor: 'bg-[#33fba1]/10',
        color: '#33fba1',
        textColor: 'text-[#33fba1]',
        title: '5',
      },

      {
        id: 2,
        borderColor: 'border-[#2fa7ed]/50',
        backgroundColor: 'bg-[#2fa7ed]/10',
        color: '#2fa7ed',
        textColor: 'text-[#2fa7ed]',
        title: '2',
      },
      {
        id: 3,
        borderColor: 'border-[#57cc99]/50',
        backgroundColor: 'bg-[#57cc99]/10',
        color: '#57cc99',
        textColor: 'text-[#57cc99]',
        title: '3',
      },
      {
        id: 4,
        borderColor: 'border-[#57cc99]/50',
        backgroundColor: 'bg-[#57cc99]/10',
        color: '#57cc99',
        textColor: 'text-[#57cc99]',
        title: '1',
      },
    ],
    [],
  );

  const handleCardClick = useCallback((index: any) => {
    setCurrentCard(index);
  }, []);

  return (
    <div className='h-60 w-full py-6'>
      <AnimatePresence>
        <div className='relative flex h-[10em] items-center justify-center'>
          {cards.map((card, index) => {
            const distance =
              (index - currentCard + cards.length) % cards.length;
            const zIndex =
              distance === 0 ? 3 : distance === 1 ? 2 : distance === 2 ? 1 : 0;
            const top =
              distance === 0
                ? 0
                : distance === 1
                  ? -20
                  : distance === 2
                    ? -40
                    : -60;
            const scale =
              distance === 0
                ? 1
                : distance === 1
                  ? 0.9
                  : distance === 2
                    ? 0.8
                    : 0.7;

            const opacity = distance >= 3 ? 0 : 1;

            return (
              <motion.div
                key={card.id}
                className={`absolute h-40 w-[88%] flex-col rounded-[30px] border border-[#19191A] bg-[#0D0D0E] p-4 text-black shadow-[0_-20px_10px_-16px_rgba(8,9,10,.6)] lg:w-3/5 `}
                style={{
                  zIndex,
                }}
                initial={{ scale, top, opacity }}
                animate={{ scale, top, opacity }}
                exit={{ scale, top, opacity }}
                transition={{
                  duration: 0.9,
                  type: 'spring',
                  bounce: 0.3,
                }}
              >
                <div className='flex items-center gap-1'>
                  <span
                    className={`rounded-full ${card.backgroundColor} p-[6px]`}
                  >
                    {card.id}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div
          onClick={() => handleCardClick(currentCard + 1)}
          className='relative mx-auto mt-4 flex w-fit justify-center rounded-full border border-[#19191A] bg-[#101114] p-2'
        >
          continue
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Cards;
