import { HamburgerIcon } from '@/components/Icons/Hamburger';
import { Logo } from '@/components/Icons/Logo';
import { SearchIcon } from '@/components/Icons/Search';
import React, { FC } from 'react'

type HeaderProps = {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className='page-format flex justify-center w-full h-[--header-height] border-b border-black absolute top-0 z-10'>
        <div className='width-cap h-full w-full flex items-center justify-between px-10'>
          <div>
          <Logo />
          </div>
          <nav>
            <ul className='flex items-center gap-11'>
              <li>COMPANY</li>
              <li>FOUNDATION</li>
              <li>TALENTS</li>
              <li>DURABLE ELEGANCE</li>
            </ul>
          </nav>
          <div className='flex items-center gap-4'>
            <SearchIcon />
            <HamburgerIcon />
          </div>
        </div>
    </header>
  )
}

export default Header;