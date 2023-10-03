import { Ellipsis } from "@/components/Icons/Ellipsis";
import { TitleIcon } from "@/components/Icons/TitleIcon";
import IconFrame from "@/components/Layout/Frames/IconFrame";
import SectionBackground from "@/components/Layout/SectionBackground";
import React, { FC } from "react";
import { infoTitles } from "./constants";

type InfoSectionProps = {};

const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <section className="w-full min-h-screen relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full flex-col border-r border-l border-black flex relative">
        <SectionBackground />
        <div className="min-h-[98px] border-black border-x-0 border w-full flex justify-between">
          {infoTitles.map((el, _i) => (
            <div
              key={_i}
              className={`${el.id!==4?'border-r':''} border-black w-full h-full  flex items-center justify-center gap-4`}
            >
              <IconFrame icon={el.icon} />
              <p className="text-[#0A0A0A] text-sm">{el.value}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full  px-10">
          <div className="w-full h-full">
            <div className="max-w-[428px] h-full flex flex-col gap-5 justify-center">
              <div className="relative">
                <span className="absolute -left-8 -top-8 ">
                  <TitleIcon color="#DE6A2A" />
                </span>
                <h1 className="text-[58px] font-bold font-formula tracking-wider relative">
                  DURABLE ELEGANCE FOR PEOPLE
                </h1>
              </div>
              <p className="text-black/75 leading-6">
                In keeping with this approach, we are now placing equal
                opportunities at the heart of our Durable Elegance model.
                Although anyone can work towards achieving their goals
              </p>
              <div className="relative">
                <Ellipsis />
                <p className="absolute top-8 left-8">Explore More</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full  border-l border-black">
        
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
