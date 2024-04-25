const Button = () => {
  return (
    <div className='my-12 flex flex-col items-center justify-center gap-4'>
      <div className='flex gap-3'>
        <button className='text-zinc-50 hover:bg-red-700 active:bg-red-800 group h-8 select-none rounded-lg bg-[#DC2626] px-3 text-sm leading-8 shadow-[0_-1px_0_1px_#7f1d1d_inset,0_0_0_1px_#b91c1c_inset,0_0.5px_0_1.5px_#f87171_inset] active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]'>
          <span className='block group-active:[transform:translate3d(0,1px,0)]'>
            Click me
          </span>
        </button>
        <button className='group h-8 select-none rounded-lg  bg-[#2563EB] px-3 text-sm leading-8 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]'>
          <span className='block group-active:[transform:translate3d(0,1px,0)]'>
            Click me
          </span>
        </button>
        <button className='group h-8 select-none rounded-lg  bg-[#EC5D0E] px-3 text-sm leading-8 shadow-[0_-1px_0_1px_#993d0a_inset,0_0_0_1px_#cf5818_inset,0_0.5px_0_1.5px_#ffa06c_inset] active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]'>
          <span className='block group-active:[transform:translate3d(0,1px,0)]'>
            Click me
          </span>
        </button>
      </div>
      <div className='flex gap-3'>
        <button className='group h-8 select-none rounded-lg bg-[#a7ff54] px-3 text-sm leading-8 text-[#1d2c14] shadow-[0_-1px_0_1px_#284c18_inset,0_0_0_1px_#9ee57f_inset,0_0.5px_0_1.5px_#c1ffb1_inset] active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]'>
          <span className='block group-active:[transform:translate3d(0,1px,0)]'>
            Click me
          </span>
        </button>
        <button className='group h-8 select-none rounded-lg  bg-[#dddddd] px-3 text-sm leading-8 text-[#0c0c0c] shadow-[0_-1px_0_1px_#919191_inset,0_0_0_1px_#ffe0d0_inset,0_0.5px_0_1.5px_#ffffff_inset] active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]'>
          <span className='block group-active:[transform:translate3d(0,1px,0)]'>
            Click me
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
