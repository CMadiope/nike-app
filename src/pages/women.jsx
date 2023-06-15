import React from "react";
import Image from 'next/image'
import hero from '../../public/static/women.jpeg'
import { client } from "@/lib/client";
import Carousel from "@/components/Carousel";
import outer from '../../public/static/women-s.jpeg'
import outerSM from '../../public/static/women-out-sm.jpeg'
import sport from '../../public/static/women-winter.jpeg'
import sportSm from '../../public/static/women-winter-sm.jpeg'

const Women = ({products}) => {
  return (
    <div className='pb-20 px-6 lg:px-16 '>
      <h5 className='text-3xl py-8'>Women</h5>
      <div className='text-center'>
        <p>Feel-Good Essentials</p>
        <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl font-bold py-2'>
          sets to match your vibe
        </h1>
      </div>
      <div className='pt-8'>
        <Image src={hero} alt='' />
      </div>
      <div className='pt-16'>
        <h3 className='text-2xl'>Trending This Week</h3>
        <div className='pb-10  pt-5'>
          <Carousel products={products} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row pt-5 gap-10'>
        <div className='relative'>
          <Image src={outer} alt='/' className='hidden md:block' />
          <Image src={outerSM} alt='/' className='md:hidden ' />
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
        
        <div className='pb-10  pt-5'>
          <Carousel products={products} />
        </div>
      </div>
    </div>
  );
};

export default Women;



export const getServerSideProps = async () => {
  const query = `*[_type == 'product' && category=='women']`;
  const products = await client.fetch(query);

  //console.log(products);

  return {
    props: { products },
  };
};
