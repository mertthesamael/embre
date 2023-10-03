import Image from 'next/image';
import React, { FC } from 'react'

type ProductCardProps = {
  
}

const ProductCard: FC<ProductCardProps> = ({  }) => {
  return (
    <div className='w-max border  border-black'>
     <div className=''>
        <Image src={'/product1.png'} width={360} height={352} alt='Embre Product'/>
     </div>
     <div className='bg-black p-4 flex justify-between'>
        <div className='flex flex-col gap-4  max-w-[181px]'>
            <h2 className='text-white'>Easy Care Textured Shirt</h2>
            <h3 className='text-white text-xl'>800USD  <span className='line-through'>1100USD</span></h3>
        </div>
        <div className='flex'>
            <button className='flex items-center justify-center rounded-full  py-8 w-[50px] bg-white'>
                <span className='text-4xl leading-[0]'>+</span>
            </button>
        </div>
     </div>
    </div>
  )
}

export default ProductCard;