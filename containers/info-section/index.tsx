import { Ellipsis } from "@/components/Icons/Ellipsis";
import { TitleIcon } from "@/components/Icons/TitleIcon";
import IconFrame from "@/components/Layout/Frames/IconFrame";
import SectionBackground from "@/components/Layout/SectionBackground";
import React, { FC } from "react";
import { infoTitles, tableData } from "./constants";

type InfoSectionProps = {};

const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <section className="w-full min-h-screen relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full width-cap flex-col border-r border-l border-black flex relative">
        <SectionBackground />
        <div className="min-h-[98px] border-black border-x-0 border w-full flex justify-between">
          {infoTitles.map((el, _i) => (
            <div
              key={_i}
              className={`${el.id!==4?'border-r':''} border-black w-full h-full  flex items-center justify-center gap-4`}
            >
              <IconFrame icon={el.icon} />
              <p className="text-[#0A0A0A] md:flex hidden text-sm">{el.value}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full flex-col lg:flex-row px-10">
          <div className="w-full h-full">
            <div className="lg:max-w-[428px w-full h-full text-center lg:text-left flex flex-col justify-evenly py-10 lg:py-40 gap-5 ">
              <div className="relative">
                <span className="absolute -left-8 -top-8 ">
                  <TitleIcon color="#DE6A2A" />
                </span>
                <h1 className="text-4xl lg:text-[58px] font-bold font-formula tracking-wider relative">
                  DURABLE ELEGANCE FOR PEOPLE
                </h1>
              </div>
              <p className="text-black/75 leading-6">
                In keeping with this approach, we are now placing equal
                opportunities at the heart of our Durable Elegance model.
                Although anyone can work towards achieving their goals
              </p>
              <div className="w-full flex lg:justify-start justify-center">
              <div className="relative">
                <Ellipsis />
                <p className="absolute w-max top-8 left-8">Explore More</p>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center py-10  lg:border-l border-black">
            
            <div className="lg:w-full w-max h-max lg:ml-10 flex flex-col border-black border z-10">
              <div className="w-full h-[42px] p-5 bg-black flex justify-between items-center">
                <div>
                <h1 className=" text-white font-semibold">Category</h1>
                </div>
                <div className="flex gap-5 xl:gap-20">
                <h2 className="text-white font-semibold w6max min-w-[6rem]">Embre Group</h2>
                <h2 className="text-white font-semibold w-max min-w-[6rem]">Other</h2>
                </div>
              </div>
              <div className="w-full h-full flex flex-col">
                {tableData.map((el,_i) => (
                <div key={_i} className={`w-full border flex items-center justify-between h-[42px] border-b p-5 border-black/20 ${el.id%2===0?'bg-black/10':''}`}>
                  <div>
                <h1 className="font-medium">{el.category}</h1>
                    </div>
                    <div className="flex gap-5 xl:gap-20">
                <h2 className="w-max min-w-[6rem]">{el.embreValue}</h2>
                <h2 className="w-max min-w-[6rem]">{el.otherValue}</h2>
                      </div>
                </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
