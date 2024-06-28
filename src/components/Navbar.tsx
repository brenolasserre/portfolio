import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Navbar = () => {
  return (
    <div className='flex h-20 items-center justify-center'>
      <div className='fixed z-[99] flex items-center justify-center gap-2 rounded-full border border-[#19191A] bg-[#08090A] p-1 px-4 text-[#8B8B8B]'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href='https://twitter.com/brenolasserre'
                aria-label='Follow me on Twitter'
                target='_blank'
                className='flex h-[32px] items-center justify-center p-1 transition hover:text-white'
              >
                <svg
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-twitter-x'
                  viewBox='0 0 16 16'
                >
                  <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'></path>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>@lasserrebreno</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href='mailto:lasserrebreno@gmail.com'
                aria-label='Send me an email'
                target='_blank'
                className='flex h-[32px] items-center justify-center p-1 transition hover:text-white'
              >
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  ></path>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>lasserrebreno@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Navbar;
