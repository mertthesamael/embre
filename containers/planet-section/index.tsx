import { TitleIcon } from "@/components/Icons/TitleIcon";
import { WindmailImage } from "@/components/Icons/Windmail";
import SectionBackground from "@/components/Layout/SectionBackground";
import React, { FC } from "react";

type PlanetSectionProps = {};

const PlanetSection: FC<PlanetSectionProps> = ({}) => {
  return (
    <section className="w-full min-h-screen relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full flex-col items-center gap-16 py-20 border-r border-t border-l border-black flex relative">
        <SectionBackground />
        <div className="relative flex w-max">
          <span className="absolute -left-12 bottom-5">
            <TitleIcon color="green" />
          </span>
          <h1 className="text-[58px] font-bold font-formula tracking-wider relative">
            FOR THE PLANET
          </h1>
        </div>
        <div className="flex gap-6 items-center max-w-[625px] text-center">
          <p className="text-black/75 leading-6">
            Our goal is more sustainable fashion. How? By preserving our
            planets fragile resources, by using more sustainable materials and
            manufacturing processes, by working with our customers to ensure our
            products last longer.
          </p>
        </div>
        <div>
            <WindmailImage />
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;
