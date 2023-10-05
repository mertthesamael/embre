import { PlusIcon } from "@/components/Icons/Plus";
import { TProduct } from "@/types/TProduct";
import Image from "next/image";
import React, { FC } from "react";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-max border  border-black">
      <div className="">
        <Image
          src={product.imgPath}
          width={360}
          height={352}
          alt="Embre Product"
        />
      </div>
      <div className="bg-black p-4 flex justify-between">
        <div className="flex flex-col gap-4  max-w-[181px]">
          <h2 className="text-white">{product.name}</h2>
          <h3 className="text-white text-xl">
            {product.price}
            <span className="line-through text-sm"> {product.oldPrice}</span>
          </h3>
        </div>
        <div className="flex">
          <button className="flex items-center justify-center rounded-full  py-8 w-[50px] bg-white">
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
