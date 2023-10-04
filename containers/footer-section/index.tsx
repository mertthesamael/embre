import HeroButton from "@/components/Buttons/HeroButton";
import React, { FC } from "react";
import { footerNavs } from "./constants";
import Link from "next/link";

type FooterSectionProps = {};

const FooterSection: FC<FooterSectionProps> = ({}) => {
  return (
    <section className="w-full h-max relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full flex-col gap-24 items-center border-r border-l border-black flex relative px-10 pt-20 pb-10">
        <div className="w-full h-max flex flex-col gap-20 items-center">

        <div className="bg-black w-max h-max p-0 flex items-center justify-center">
          <h1 className="font-formula h-max -mx-7 -mt-1 -mb-12 text-[5rem] md:text-[7rem] xl:text-[10rem] 2xl:text-[15rem] font-bold leading-[15rem] text-[#EAF3F5] tracking-widest">
            NEWSLETTER
          </h1>
        </div>
        <div className="w-full max-w-[800px] h-[74px] flex border border-black">
          <input
            placeholder="Enter your email.."
            className="w-full h-full focus:outline-none text-3xl px-2 font-formula border-r border-black"
            />
          <button className="w-max h-full font-bold font-formula text-2xl tracking-wider text-white px-10 bg-[--primary-color]">
            SUBSCRIBE
          </button>
        </div>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-20">
          {footerNavs.map((el, _i) => (
            <div key={_i} className="flex flex-col gap-5">
              <h2 className="font-bold font-formula text-2xl tracking-wider uppercase">
                {el.category}
              </h2>
              <ul className="flex flex-col gap-3">
                {el.list.map((nav, _i) => (
                  <li key={_i} className="text-sm">
                    <Link href={nav.href} className="hover:text-[--primary-color]">{nav.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
