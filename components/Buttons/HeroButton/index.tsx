import React, { FC } from "react";

type HeroButtonProps = {
  text: string;
};

const HeroButton: FC<HeroButtonProps> = ({ text }) => {
  return (
    <button
      className='transition-all -top-0 -left-0 text-white font-medium relative hover:after:opacity-[1] hover:before:opacity-[1] hover:-top-2 hover:-left-2
      
        after:absolute after:content-[""] after:h-full after:w-2 after:border after:!border-black after:-right-2 after:top-[4px] after:skew-y-[46deg] after:skew-z-3 after:z-[0] after:transition-all after:!border-l-[--primary-color] after:opacity-0

        before:transition-all  before:absolute before:content-[""] before:h-full before:w-full before:border before:border-black before:-right-2 before:top-[7px]  before:skew-z-3 before:z-[0] before:opacity-0
        
    '
    >
      <div className="py-5 px-16 w-full h-full bg-[--primary-color] relative z-10">
        {text}
      </div>
    </button>
  );
};

export default HeroButton;
