import '../styles/global.css';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Nav() {
  return (
    <>
      <div className='mt-14'>
        <div className='nav flex h-fit w-full items-end justify-center'>
          <div className='mb-2 flex w-full items-center justify-between gap-8 md:mb-14 '>
            <div>
              <a className='flex items-end gap-2' href='/'>
                <div className='h-10 w-10 rounded-full bg-[#305ace]'></div>
                <div className='flex flex-col'>
                  <h4 className='my-0 text-base text-white md:text-lg'>
                    Breno Lasserre
                  </h4>
                  <p className='my-0 text-[14px] text-xs text-white/40'>
                    Front-End Developer
                  </p>
                </div>
              </a>
            </div>

            {/* Menu Mobile */}
            <NavigationMenu className='block md:hidden'>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='text-base text-white'>
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='border-0'>
                    <div className='flex flex-wrap gap-4 border-0 text-base '>
                      <NavigationMenuLink className='h-full w-full rounded-md px-3 py-1 hover:bg-[#ffffff09]'>
                        <a href='/'>Home</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink className='h-full w-full rounded-md px-3 py-1 hover:bg-[#ffffff09]'>
                        <a href='/proyectos'>Proyectos</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink className='h-full w-full rounded-md px-3 py-1 hover:bg-[#ffffff09]'>
                        <a href='/playground'>Playground</a>
                      </NavigationMenuLink>
                      <NavigationMenuLink className='h-full w-full rounded-md px-3 py-1 hover:bg-[#ffffff09]'>
                        <a href='/recursos'>Recursos</a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Menu Desktop */}
            <div className='hidden md:block'>
              <nav className='flex items-center gap-4'>
                <a href='/'>Home</a>
                <a href='/proyectos'>Proyectos</a>
                <a href='/playground'>Playground</a>
                <a href='/recursos'>Recursos</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
