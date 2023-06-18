import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "@/lib/utils";
import Link from "next/link";

const Checkout = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div>
      <div className='text-center py-10'>
        <h2 className="py-4 font-bold text-2xl">Thank you for your order</h2>
        <p className='text-xl'>Check your email inbox for your receipt</p>
        
        <Link href='/'>
          <button  width='300px' className='my-6 py-4 rounded-full px-4 bg-[#111] text-white'>
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
