import React from "react";
import Image from "next/image";
import heroSmall from "../../public/static/men-xs.jpeg";
import hero from "../../public/static/men-s-shoes.jpeg";
import Carousel from "@/components/Carousel";
import { client } from "@/lib/client";
import outwear from "../../public/static/outwear.jpeg";
import outwearSm from "../../public/static/outwear-sm.jpeg";
import sport from "../../public/static/sport.jpeg";
import sportSm from "../../public/static/sport-sm.jpeg";

const Men = ({ products }) => {
  return (
    <div className='pb-20 px-6 lg:px-16 '>
      <h5 className='text-3xl pt-8'>Men</h5>
      <div className='pt-8 relative'>
        <Image src={hero} alt='/' className='hidden sm:block' />
        <Image src={heroSmall} alt='/' className='sm:hidden ' />
        <div className='pt-5 sm:absolute sm:text-white sm:bottom-16 sm:left-16 md:bottom-20 md:left-28 lg:left-40 lg:bottom-32'>
          <p className='md:text-lg'>Nike Pegasus 40</p>
          <h3 className='pb-5 text-4xl md:text-5xl font-extrabold'>
            In the pegasus we run
          </h3>
          <p className='md:text-lg'>
            Chase down your future miles in his new colorway.
          </p>
        </div>
      </div>
      <div className='pt-16'>
        <h3 className='text-2xl'>Trending This Week</h3>
        <div className='pb-10  pt-5'>
          <Carousel products={products} />
        </div>
      </div>
      <div className=''>
        <h3 className='text-2xl'>Your Seasonal Shop</h3>
        <div className='flex flex-col md:flex-row pt-5 gap-10'>
          <div className='relative'>
            <Image src={outwear} alt='/' className='hidden md:block' />
            <Image src={outwearSm} alt='/' className='md:hidden ' />
            <div className='absolute bottom-12 text-white left-8 text-xl flex flex-col gap-5'>
              <p>Outerwear Essentials</p>
              <p className='rounded-full w-[100px] py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] text-center'>
                Shop
              </p>
            </div>
          </div>
          <div className='relative'>
            <Image src={sport} alt='/' className='hidden md:block' />
            <Image src={sportSm} alt='/' className='md:hidden ' />
            <div className='absolute bottom-12 text-white left-8 text-xl flex flex-col gap-5'>
              <p>Layers for Sport</p>
              <p className='rounded-full w-[100px] py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] text-center'>
                Shop
              </p>
            </div>
          </div>
        </div>
        <div className='pt-16'>
          <h3 className='text-2xl'>Shop the Icons</h3>
          <div className='pb-10  pt-5'>
            <Carousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;

export const getServerSideProps = async () => {
  const query = `*[_type == 'product' && category=='men']`;
  const products = await client.fetch(query);

  //console.log(products);

  return {
    props: { products },
  };
};
