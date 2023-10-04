import Link from 'next/link';
import React, { FC } from 'react'

type FooterProps = {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className='w-full page-format h-max py-5 bg-black flex justify-center'>
        <div className='w-full h-full px-10'>
        <h1 className='text-white'>EMBRE, developed with ♥, <Link href={'https://www.merto.dev'} target='_blank' className='hover:text-[--primary-color]'>Merto.dev</Link></h1>
        </div>
    </footer>
  )
}

export default Footer;