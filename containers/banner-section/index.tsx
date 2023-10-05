import React, { FC } from 'react'

type BannerSectionProps = {
  
}

const BannerSection: FC<BannerSectionProps> = ({  }) => {
  return (
    <section className="w-full py-[20px] bg-[--primary-color] text-center">
    <h1 className="text-xl lg:text-2xl text-white font-formula tracking-widest font-bold uppercase">
      Whatever the activity, the desire to improve is the purest path to
      satisfaction.
    </h1>
  </section>
  )
}

export default BannerSection;