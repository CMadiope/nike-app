import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='bg-[#111] text-white/90 w-full   px-8 py-12'>
      <div className='grid gap-6 sm:grid-cols-4'>
        <div className='grid gap-6 sm:grid-cols-3 col-span-3 lg:grid-cols-4 pb-5 border-b sm:border-none '>
          <div className='uppercase text-xs font-bold flex flex-col gap-6'>
            <p>Find a store</p>
            <p>nike journal</p>
            <p>Become a member</p>
            <p>Feedback</p>
            <p>promo codes</p>
          </div>
          <div>
            <h5 className='uppercase text-xs font-bold pb-3'>Get help</h5>
            <div className='flex flex-col gap-3 text-xs text-gray-500'>
              <p>Order Status</p>
              <p>Shipping and Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div>
            <h5 className='uppercase text-xs font-bold pb-3'>About Nike</h5>
            <div className='flex flex-col gap-3 text-xs text-gray-500'>
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Payment Options</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div>
            <h5 className='uppercase text-xs font-bold pb-3'>join us</h5>
            <div className='flex flex-col gap-3 text-xs text-gray-500'>
              <p>Nike App</p>
              <p>Nike Run Club</p>
              <p>Nike Training Club</p>

              <p>SNKRS</p>
            </div>
          </div>
        </div>

        <div className='flex gap-3 text-3xl'>
          <AiFillTwitterCircle />
          <BsFacebook />
          <FaInstagramSquare />
          <TiSocialYoutubeCircular />
        </div>
      </div>
      <div className='grid pt-10'>
        <div className='grid'>
          <div className='flex gap-2 items-center text-sm font-light'>
            <IoLocationSharp />
            <p>South Africa</p>
          </div>
          <div className='text-white/50 text-xs py-3'>
            © 2023 Nike, Inc. All Rights Reserved
          </div>
        </div>
        <div className=''></div>
      </div>
    </footer>
  );
};

export default Footer;
