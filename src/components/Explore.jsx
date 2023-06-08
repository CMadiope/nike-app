import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import women from "../../public/static/Explore-women.jpeg";
import Image from "next/image";
import men from "../../public/static/ex-men.jpeg";
import kids from "../../public/static/ex-kids.jpeg";

const Explore = () => {
  return (
    <div className='pb-20 px-6 lg:px-16'>
      <h3 className='pb-8 text-xl font-semibold'>More to Explore</h3>
      <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3  gap-8'>
        <div className='  relative'>
          <Image src={women} alt='/' />
          <div className='absolute bottom-5 left-10 text-lg sm:flex  gap-3 sm:items-center '>
            <Link
              href='/women'
              className='rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5]'
            >
              Women
            </Link>
            <div className='flex gap-2 items-center rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] mt-3 sm:mt-0'>
              <AiOutlineEye />
              <p>Shop The Look</p>
            </div>
          </div>
        </div>
        <div className='  relative'>
          <Image src={men} alt='/' />
          <div className='absolute bottom-5 left-10 text-lg sm:flex  gap-3 sm:items-center '>
            <Link
              href='/men'
              className='rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5]'
            >
              Men
            </Link>
            <div className='flex gap-2 items-center rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] mt-3 sm:mt-0'>
              <AiOutlineEye />
              <p>Shop The Look</p>
            </div>
          </div>
        </div>
        <div className='  relative'>
          <Image src={kids} alt='/' />
          <div className='absolute bottom-5 left-10 text-lg sm:flex  gap-3 sm:items-center '>
            <Link
              href='/kids'
              className='rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5]'
            >
              Kids
            </Link>
            <div className='flex gap-2 items-center rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5] mt-3 sm:mt-0'>
              <AiOutlineEye />
              <p>Shop The Look</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
