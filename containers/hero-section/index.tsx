import HeroButton from "@/components/Buttons/HeroButton";
import Image from "next/image";
import React, { FC } from "react";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="flex justify-center page-format w-full h-full relative bg-[#E8ECEF]">
      <div className="w-full px-10 min-h-screen border-r border-l border-black flex flex-col-reverse 2xl:flex-row items-center width-cap pt-[--header-height]">
        <div className="w-full max-w-[611px] h-full flex flex-col gap-12 2xl:gap-24  justify-center">
          <div className="flex flex-col gap-12 2xl:gap-16">
            <h1 className="font-bold text-[44px] 2xl:text-[64px] font-formula">
              <span className="text-[64px] 2xl:text-[94px]">WE </span> HAVE DIVERSE CLOTHING{" "}
              <span className="text-[--primary-color] text-[64px] 2xl:text-[94px]">
                {" "}
                COLLECTION
              </span>
            </h1>
            <div className="pl-40">
              <p>
                Embre Group is a dynamic and continuously growing group of
                companies creating a buoyant economic climate.
              </p>
            </div>
            <div>
              <HeroButton text="GET YOUR STORE" />
            </div>
          </div>
          <div className="flex items-center gap-20">
            <div>
              <span className="font-formula font-bold text-[44px]">25+</span>
              <p className="font-formula font-bold leading-5 text-[22px] tracking-wider">
                YEAR OF EXPERIENCE
              </p>
            </div>
            <div>
              <span className="font-formula font-bold text-[44px]">98+</span>
              <p className="font-formula font-bold leading-5 text-[22px] tracking-wider">
                COUNTRIES
              </p>
            </div>
            <div>
              <span className="font-formula font-bold text-[44px]">1100+</span>
              <p className="font-formula font-bold leading-5 text-[22px] tracking-wider">
                STORES
              </p>
            </div>
          </div>
        </div>
        <div className="w-full relative min-h-[300px] 2xl:min-h-[650px]">
          <Image
            src={"/hero.png"}
            alt="Embre Hero"
            fill
            className="object-contain !h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
