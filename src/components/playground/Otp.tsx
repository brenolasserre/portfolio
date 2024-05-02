import React, { useState, useRef, useEffect } from 'react';

import type { KeyboardEvent } from 'react';

const Otp = ({ length }: { length: number }) => {
  // Solo permitir que el length thel OTP sea 4,6 o 8
  if (![4, 6, 8].includes(length)) {
    throw new Error('Length must be 4, 6, or 8');
  }

  const [codes, setCodes] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const handleChange = (index: number, value: string) => {
    // Usar REGEX para solo permitir numeros
    if (/^\d*$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      (event.key === 'Backspace' || event.key === 'Delete') &&
      codes[index] === ''
    ) {
      if (index > 0 && codes[index - 1] !== '') {
        const newCodes = [...codes];
        newCodes[index - 1] = '';
        setCodes(newCodes);
        inputRefs.current[index - 1].focus();
      }
    } else if (
      event.key === 'ArrowRight' &&
      codes[index] &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
      setTimeout(() => {
        inputRefs.current[index + 1].select();
      }, 0);
    } else if (
      event.key === 'ArrowLeft' &&
      index > 0 &&
      codes[index - 1] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
      setTimeout(() => {
        inputRefs.current[index - 1].select();
      }, 0);
    } else if (event.key === 'ArrowLeft' && index === 0) {
      event.preventDefault();
    } else if (event.key === 'ArrowRight' && index === length - 1) {
      event.preventDefault();
    } else if (
      event.key === 'Tab' &&
      inputRefs.current[index + 1] &&
      inputRefs.current[index + 1].readOnly
    ) {
      event.preventDefault();
    }
  };

  const handleInputClick = (index: number) => {
    if (inputRefs.current[index].readOnly) {
      setTimeout(() => {
        for (let i = 0; i < length; i++) {
          if (!codes[i]) {
            inputRefs.current[i].focus();
            break;
          }
        }
      }, 0);
    }
  };

  return (
    <div className=' flex items-center justify-center gap-1 md:gap-2'>
      {codes.map((code, index) => (
        <React.Fragment key={index}>
          {index === length / 2 && (length === 6 || length === 8) && (
            <span className='mx-1 h-2 w-[1em] rounded-full bg-[#161B16]'></span>
          )}
          <input
            ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
            type='text'
            value={code}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onClick={() => handleInputClick(index)}
            maxLength={1}
            pattern='\d*'
            required
            className='ease w-[2em] rounded-lg border border-[#191b17] bg-[#090a0c] py-4 text-center font-mono text-xl transition duration-150 focus:outline-none focus:ring focus:ring-[#305ACE] md:py-6 md:text-3xl'
            readOnly={
              codes[index] === '' && codes[index - 1] === '' ? true : false
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Otp;
