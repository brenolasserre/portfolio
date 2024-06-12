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
        svg: '/cards/chat.svg',
      },

      {
        id: 2,
        borderColor: 'border-[#2fa7ed]/50',
        backgroundColor: 'bg-[#2fa7ed]/10',
        color: '#2fa7ed',
        textColor: 'text-[#2fa7ed]',
        title: '2',
        svg: '/cards/settings.svg',
      },
      {
        id: 3,
        borderColor: 'border-[#57cc99]/50',
        backgroundColor: 'bg-[#57cc99]/10',
        color: '#57cc99',
        textColor: 'text-[#57cc99]',
        title: '3',
        svg: '/cards/private.svg',
      },
      {
        id: 4,
        borderColor: 'border-[#57cc99]/50',
        backgroundColor: 'bg-[#57cc99]/10',
        color: '#57cc99',
        textColor: 'text-[#57cc99]',
        title: '1',
        svg: '/cards/db.svg',
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
                className={`absolute h-40 w-72 rounded-xl border border-[#ededed] bg-[#fafafa] p-4 text-black shadow-[0_-20px_10px_-16px_rgba(247,247,247,.7)] `}
                style={{
                  zIndex,
                }}
                initial={{ scale, top, opacity }}
                animate={{ scale, top, opacity }}
                exit={{ scale, top, opacity }}
                transition={{
                  duration: 0.9,
                  type: 'spring',
                  bounce: 0.4,
                }}
              >
                <div className='flex items-center gap-1'>
                  <span
                    className={`rounded-full ${card.backgroundColor} p-[6px]`}
                  >
                    <img src={card.svg} alt={card.title} className='h-5 w-5' />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className='relative mx-auto mt-4 flex w-fit justify-center rounded-full border border-[#212122] bg-[#101114] p-2'>
          {cards.map((card, index) => (
            <motion.img
              key={card.id}
              src={card.svg}
              alt={card.title}
              className={`z-40 mx-2 h-5 w-5 cursor-pointer ${index === currentCard ? 'opacity-100' : 'opacity-40 grayscale'}`}
              onClick={() => handleCardClick(index)}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Cards;
