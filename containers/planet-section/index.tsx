import { FlowerIcon } from "@/components/Icons/Flower";
import { LabIcon } from "@/components/Icons/Lab";
import { MaterialIcon } from "@/components/Icons/Material";
import { TitleIcon } from "@/components/Icons/TitleIcon";
import { WashingMachineIcon } from "@/components/Icons/WashingMachine";
import { WindmailImage } from "@/components/Icons/Windmail";
import { WindmillIcon } from "@/components/Icons/WindmillIcon";
import { ZeroTouchIcon } from "@/components/Icons/ZeroTouch";
import IconFrame from "@/components/Layout/Frames/IconFrame";
import SectionBackground from "@/components/Layout/SectionBackground";
import React, { FC } from "react";

type PlanetSectionProps = {};

const PlanetSection: FC<PlanetSectionProps> = ({}) => {
  return (
    <section className="w-full min-h-screen relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full width-cap px-10 flex-col items-center gap-16 py-20 border-r border-t border-l border-black flex relative">
        <SectionBackground />
        <div className="relative flex w-max">
          <span className="absolute -left-12 bottom-5">
            <TitleIcon color="green" />
          </span>
          <h1 className="text-4xl lg:text-[58px] font-bold font-formula tracking-wider relative">
            FOR THE PLANET
          </h1>
        </div>
        <div className="flex gap-6 items-center max-w-[625px] text-center">
          <p className="text-black/75 leading-6">
            Our goal is more sustainable fashion. How? By preserving our planets
            fragile resources, by using more sustainable materials and
            manufacturing processes, by working with our customers to ensure our
            products last longer.
          </p>
        </div>
        <div className="relative flex items-center overflow-hidden justify-center w-full h-full">
          <div className="absolute ">
            <WindmailImage />
          </div>
          <div className="flex flex-col lg:flex-row gap-20 w-full justify-evenly items-center">
            <div className="flex flex-col gap-20">
              <div className="flex items-center gap-5">
                <IconFrame icon={<LabIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                Free from Preservatives
                </h3>
              </div>
              <div className="relative lg:-left-16 flex items-center gap-5">
                <IconFrame icon={<FlowerIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                100% Fresh & Pure
                </h3>
              </div>
              <div className="flex items-center gap-5">
                <IconFrame icon={<WashingMachineIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                Machine wash cold
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-20">
              <div className="flex flex-row-reverse items-center gap-5">
                <IconFrame icon={<MaterialIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                Dust proof mterial
                </h3>
              </div>
              <div className="flex relative lg:left-16  flex-row-reverse items-center gap-5">
                <IconFrame icon={<WindmillIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                Traditional Milling Method
                </h3>
              </div>
              <div className="flex flex-row-reverse items-center gap-5">
                <IconFrame icon={<ZeroTouchIcon />} />
                <h3 className="uppercase font-formula text-xl font-bold tracking-wider ">
                Zero hand touch
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;
