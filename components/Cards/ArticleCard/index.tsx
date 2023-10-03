import React, { FC } from 'react'
import './style.css'
import Image from 'next/image'

type ArticleCardProps = {
  id:number
  title:string
  imgPath:string
}

const ArticleCard: FC<ArticleCardProps> = ({ id,title,imgPath }) => {
  return (
    <div className={`transition-all articleCard h-[425px] bg-gray-500/50 w-[270px] relative ${id%2!==0?' skew-y-[8deg] ' :' -skew-y-[8deg] bottom-12'} hover:skew-x-0 hover:skew-y-0 hover:bottom-0`}>
        <Image src={imgPath} fill alt='Embre Article' className='object-cover '/>
        <div className='w-full flex items-end justify-center py-10 h-full bg-gradient-to-t from-transparent to-black/60 relative z-10 hover:from-transparent hover:to-transparent text-center'>
            <p className='text-white text-xl'>{title}</p>
        </div>
    </div>
  )
}

export default ArticleCard;