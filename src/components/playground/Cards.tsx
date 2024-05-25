import { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig, easeOut } from 'framer-motion';

const Cards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  const cards = [
    {
      id: 1,
      borderColor: 'border-[#ff7d32]/50',
      backgroundColor: 'bg-[#ff7d32]/20',
      color: '#ff7d32',
      textColor: 'text-[#ff7d32]',
      title: 'Security',
      svg: '/cards/lock.svg',
    },
    {
      id: 2,
      borderColor: 'border-[#42b3f5]/50',
      backgroundColor: 'bg-[#42b3f5]/20',
      color: '#42b3f5',
      textColor: 'text-[#42b3f5]',
      title: 'Fast',
      svg: '/cards/flash.svg',
    },
    {
      id: 3,
      borderColor: 'border-[#c165eb]/50',
      backgroundColor: 'bg-[#c165eb]/20',
      color: '#c165eb',
      textColor: 'text-[#c165eb]',
      title: 'Private',
      svg: '/cards/private.svg',
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
    setResetAnimation(true);
  };

  useEffect(() => {
    const timer = setInterval(nextCard, 5000);
    return () => clearInterval(timer);
  }, [currentCard]);

  const handleCardClick = (index: any) => {
    setCurrentCard(index);
    setResetAnimation(true);
  };

  return (
    <div className='h-60 w-full py-6'>
      <MotionConfig
        transition={{
          duration: 0.7,
          type: 'spring',
          bounce: 0.3,
        }}
      >
        <AnimatePresence>
          <div className='relative flex h-[10em] items-center justify-center'>
            {cards.map((card, index) => {
              const distance =
                (index - currentCard + cards.length) % cards.length;
              const zIndex = distance === 0 ? 3 : distance === 1 ? 2 : 1;
              const top = distance === 0 ? 0 : distance === 1 ? -20 : -40;
              const scale = distance === 0 ? 1 : distance === 1 ? 0.9 : 0.8;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute h-40 w-72 rounded-xl border-[3px] bg-[#101114] p-4 text-black ${card.borderColor} `}
                  style={{
                    zIndex,
                    top,
                  }}
                  initial={{ scale, top }}
                  animate={{ scale, top }}
                  exit={{ scale, top }}
                >
                  <div className='flex items-center gap-1'>
                    <span
                      className={` rounded-full ${card.backgroundColor} p-[6px]`}
                    >
                      <img
                        src={card.svg}
                        alt={card.title}
                        className='h-5 w-5'
                      />
                    </span>
                    <h4
                      className={`m-0 text-lg font-semibold ${card.textColor} `}
                    >
                      {card.title}
                    </h4>
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
                className={`z-40 mx-2 h-5 w-5 cursor-pointer ${index === currentCard ? 'opacity-100' : ' opacity-40 grayscale'}`}
                onClick={() => handleCardClick(index)}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
            ))}
            <motion.span
              key={currentCard}
              style={{
                width: 0,
                fontSize: 16,
                borderRadius: 100,
                backgroundColor: cards[currentCard].color + '1e',
              }}
              initial={{ opacity: 0, width: '10%' }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{
                duration: 5,
                ease: easeOut,
              }}
              onAnimationComplete={() => setResetAnimation(false)}
              className='absolute left-0 top-0 h-full '
            ></motion.span>
          </div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

export default Cards;
