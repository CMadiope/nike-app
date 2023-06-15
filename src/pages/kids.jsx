import React from "react";
import Image from "next/image";
import hero from "../../public/static/kids-hero.jpeg";
import { client } from "@/lib/client";
import Carousel from "@/components/Carousel";
import collection from '../../public/static/kids-collection.jpeg'
import collectionSm from '../../public/static/kids-collection-sm.jpeg'
import gift from '../../public/static/kids-gift.jpeg'
import giftSm from '../../public/static/kids-gift-sm.jpeg'

const Kids = ({products}) => {
  return (
    <div className='pb-20 px-6 lg:px-16 '>
      <h5 className='text-3xl py-8'>Kids</h5>
      <div className='text-center'>
        <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl font-bold py-2'>
          Own thr floor
        </h1>
        <p>
          Groove, move and just be you. Show us what you'll bring to the
          dancefloor
        </p>
      </div>
      <div className='pt-8 flex justify-center'>
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
          <Image src={collection} alt='/' className='hidden md:block' />
          <Image src={collectionSm} alt='/' className='md:hidden ' />
          <div className='absolute bottom-12 text-white left-8 text-xl flex flex-col gap-5'>
            <p>Teens Collection</p>
            <p className='rounded-full w-[100px] py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] text-center'>
              Shop
            </p>
          </div>
        </div>
        <div className='relative'>
          <Image src={gift} alt='/' className='hidden md:block' />
          <Image src={giftSm} alt='/' className='md:hidden ' />
          <div className='absolute bottom-12 text-white left-8 text-xl flex flex-col gap-5'>
            <p>Father's Day Gift</p>
            <p className='rounded-full w-[100px] py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] text-center'>
              Shop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;

export const getServerSideProps = async () => {
  const query = `*[_type == 'product' && category=='kids']`;
  const products = await client.fetch(query);

  //console.log(products);

  return {
    props: { products },
  };
};
