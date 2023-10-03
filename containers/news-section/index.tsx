import ArticleCard from '@/components/Cards/ArticleCard';
import React, { FC } from 'react'
import { articles } from './constants';

type NewsSectionProps = {
  
}

const NewsSection: FC<NewsSectionProps> = ({  }) => {
  return (
    <section className='w-full min-h-screen relative page-format flex justify-center bg-black'>
        <div className='w-full flex flex-col items-center px-10 justify-center gap-40'>
          <div className='w-full'>
            <h1 className='text-[58px] text-white font-bold font-formula tracking-wider relative'>LATEST NEWS</h1>
            <p className='text-white/40'>Last updated on 27th july</p>
          </div>
          <div className='flex w-full gap-y-20 lg:gap-y-10  justify-center lg:justify-between gap-6 lg:flex-nowrap flex-wrap'>
            {articles.map((el, _i) => (
              <ArticleCard key={_i} id={el.id} title={el.title} imgPath={el.imgPath}/>
            ))}

          </div>
        </div>
    </section>
  )
}

export default NewsSection;