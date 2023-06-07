import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const Product = ({ product: { image, name, slug, price, category } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className=''>
          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={450}
            height={450}
            className=' bg-[#ebebeb]'
          />
          <div className='flex justify-between items-center font-semibold mt-2 text-sm md:text-base pt-4 pr-4'>
            <p className=''>{name}</p>
            <p>R {price}</p>
          </div>
          <p className='pt-1 text-black/50 capitalize'>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
