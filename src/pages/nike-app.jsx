import React from "react";
import Head from "next/head";
import hero from "../../public/static/nike-app-hero.jpeg";
import Image from "next/image";
import dunk from "../../public/static/nike-app-dunk.jpeg";
import dunkSm from "../../public/static/nike-app-dunk-sm.jpeg";
import phones from "../../public/static/phones.jpeg";
import phonesSm from "../../public/static/phones-sm.jpeg";
import discover from "../../public/static/discover.jpeg";
import discoverSm from "../../public/static/discover-sm.jpeg";

const NikeApp = () => {
  return (
    <>
    <Head>
      <title>Nike App. Nike ZA</title>
    </Head>
      <div className='pb-20 px-6 lg:px-16 text-[#111]'>
        <Image src={hero} alt='/' />
        <div>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            The Best of Nike, Tailored to You{" "}
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            The Nike App is your daily destination for the world of sport.
            Discover inspirational stories, expert tips, innovative products,
            and a worldwide community—all in one place. Scan the code to get
            started.
          </p>
          <p className='mt-5 sm:hidden rounded-full bg-black text-white py-2 px-4 w-[190px] cursor-pointer hover:bg-black/70'>
            Download Nike App
          </p>
        </div>
        <div className='py-12'>
          <Image src={dunkSm} alt='/' className='md:hidden' />
          <Image src={dunk} alt='/' className='hidden md:block' />
          <div className='pb-12'>
            <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
              All the Benefits of Nike Membership on Your Phone
            </h3>
            <p className='py-4 md:text-lg  text-[black]/80'>
              If you’re on the Nike App, you’re a Nike Member. You’ll get the
              best Nike has to offer—First Access to our latest drops before
              anyone else, Member-only products, plus special promotions and
              Member-only events.
            </p>
          </div>
        </div>
        <div className='pb-12'>
          <Image src={phonesSm} alt='/' className='md:hidden' />
          <Image src={phones} alt='/' className='hidden md:block' />
        </div>
        <div className='pb-12'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            Shopping As It Should Be
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            Shop a store that’s tailored to you. Get product recommendations
            based on what you love, plus fast and secure checkout.
          </p>
        </div>
        <div className='pb-12'>
          <Image src={discoverSm} alt='/' className='md:hidden' />
          <Image src={discover} alt='/' className='hidden md:block' />
        </div>
        <div className='pb-12'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            The Latest Content Delivered Daily
          </h3>
          <p className='py-4 md:text-lg  text-[black]/80'>
            From in-depth stories to training tips and style advice, there’s
            more sport to discover than ever before.
          </p>
        </div>
        <div className='pb-12'>
          <h3 className='text-3xl md:text-4xl pt-12 font-semibold'>
            All this and more…
          </h3>
          <p className='py-6 md:text-lg font-semibold  text-[black]/80'>
            One-of-a-Kind Experiences
          </p>
          <p className='pt-2- md:text-lg  text-[black]/80'>
            From courtside to race day, get priority access to
          </p>
          <p className='py-4 md:text-lg  text-[black]/80'>
            events and sessions you won't want to miss.
          </p>
          <p className='py-6 md:text-lg font-semibold  text-[black]/80'>
            Birthday Reward
          </p>
        </div>
        <p className=' md:text-lg  text-[black]/80'>
          Celebrate your big day with a special treat from Nike.
        </p>
      </div>
    </>
  );
};

export default NikeApp;
