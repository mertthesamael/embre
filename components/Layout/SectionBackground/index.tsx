import React, { FC } from "react";

type SectionBackgroundProps = {};

const SectionBackground: FC<SectionBackgroundProps> = ({}) => {
  return (
    <div className="absolute w-full h-full flex justify-between left-0 top-0">
      {Array(8)
        .fill(0)
        .map((el, _i) => (
          <div key={_i} className="bg-[#B3C7CE]/10 w-[60px] h-full" />
        ))}
    </div>
  );
};

export default SectionBackground;
