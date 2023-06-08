import React from "react";
import nikeApp from "../../public/static/nike-app.jpeg";
import nikeAppSm from "../../public/static/nikeApp-sm.jpeg";
import ntc from "../../public/static/ntc.jpeg";
import ntcSm from "../../public/static/ntc-sm.jpeg";
import Image from "next/image";
import Link from "next/link";

const DiscoverApps = () => {
  return (
    <div className='pb-20 px-6 lg:px-16 flex flex-col md:grid md:grid-cols-2 gap-5'>
      <Link href='nike-app' className='relative'>
        <Image src={nikeApp} alt='/' className='hidden lg:block' />
        <Image src={nikeAppSm} alt='/' className='lg:hidden ' />
        <div className='absolute bottom-10 text-lg left-10 text-white '>
          <p className='pb-8 font-light'>Discover What Moves You</p>
          <Link
            href='/nike-app'
            className='rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5]'
          >
            Nike App
          </Link>
        </div>
      </Link>
      <Link href='ntc-app' className='relative'>
        <Image src={ntc} alt='/' className='hidden lg:block' />
        <Image src={ntcSm} alt='/' className='lg:hidden ' />
        <div className='absolute bottom-10 text-lg left-10 text-white '>
          <p className='pb-8 font-light'>
            Hundreds of WorkOuts, Breathwork and More
          </p>
          <Link
            href='/ntc-app'
            className='rounded-full py-2 px-5 bg-white text-black hover:bg-[#e5e5e5]'
          >
            Nike Training Club
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default DiscoverApps;
