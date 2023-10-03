import ProductCard from "@/components/Cards/ProductCard";
import { TitleIcon } from "@/components/Icons/TitleIcon";
import { TitleLine } from "@/components/Icons/TitleLine";
import SectionBackground from "@/components/Layout/SectionBackground";
import React, { FC } from "react";

type ProductsSectionProps = {};

const ProductsSection: FC<ProductsSectionProps> = ({}) => {
  return (
    <section className="w-full min-h-screen relative page-format flex justify-center bg-[#EAF3F5]">
      <div className="w-full flex-col items-center gap-16 py-20 border-r border-t border-l border-black flex relative">
        <SectionBackground />
        <div className="relative flex w-max">
          <span className="absolute -right-6 top-5">
            <TitleIcon color="red" />
          </span>
          <h1 className="text-[58px] font-bold font-formula tracking-wider relative">
            WHAT WE MAKE
          </h1>
        </div>
        <div className="flex gap-6 items-center">
            <TitleLine />
            <h2 className="font-bold">RECOMMENDED PRODUCTS</h2>
            <TitleLine className="rotate-180"/>

        </div>
        <div className="relative grid w-full z-10 gap-10 place-items-center" style={{gridTemplateColumns:'repeat(auto-fill, minmax(360px, 1fr))'}}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
