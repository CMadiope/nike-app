import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "@/lib/client";
import { BsTrash } from "react-icons/bs";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  //console.log(cartItems[0]);

  if (totalQuantity < 1) {
    return (
      <div className='py-8'>
        <h1 className='text-center font-bold text-xl'>
          Your bag is currently empty...
        </h1>
        <Link href='/' className='flex justify-center py-10'>
          <button className='bg-black/90 text-white/80 py-3 px-8'>
            Go to Shop
          </button>
        </Link>
      </div>
    );
  }

  if (session) {
    return (
      <div className='pb-20 px-6 lg:px-16 '>
        <div className='pt-8 max-lg:text-center'>
          <h1 className='text-3xl '>Bag</h1>
          <div className='flex max-lg:justify-center lg:hidden py-5 text-lg '>
            <p className='opacity-50'>{totalQuantity} items |</p>
            <p className='text-semibold pl-2'> R {totalPrice}</p>
          </div>
        </div>
        <div className='cursor-pointer' onClick={() => dispatch(clearCart())}>
          clear cart
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='lg:w-[70%] flex flex-col gap-8 pt-8'>
            {cartItems?.map((item) => (
              <div className='flex gap-6 border-t pt-6' key={item._id}>
                <Link href={`/product/${item.slug.current}`}>
                  <img
                    src={urlFor(item.image && item.image[0])}
                    alt={item.name}
                    width={190}
                    height={190}
                    className=' bg-[#ebebeb] '
                  />
                </Link>

                <div className='w-full'>
                  <div className='flex justify-between font-semibold'>
                    <p>{item.name}</p>
                    <p>R {item.price}</p>
                  </div>
                  <p>Quantity: {item.quantity}</p>
                  <div
                    className='pt-10 text-xl cursor-pointer '
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <BsTrash />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:w-[30%]'>
            <h3 className='py-6 text-xl font-semibold'>Summary</h3>
            <div className='flex justify-between pb-2'>
              <p>Subtotal</p>
              <p>R {totalPrice - 250}</p>
            </div>
            <div className='flex justify-between pb-2'>
              <p>Estimated Delivery & Handling</p>
              <p>R 250</p>
            </div>
            <div className='flex justify-between py-5 border-y'>
              <p>Total</p>
              <p>R {totalPrice}</p>
            </div>
            <div className='py-5 my-10 text-lg bg-[#111] hover:bg-[#111]/70 text-white text-center rounded-full'>
              <Link href='/checkout' onClick={() => clearCart()}>
                Go to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='pb-20 px-6 lg:px-16 '>
        <div className='flex flex-col justify-center gap-4 text-center pt-10'>
          <div className='flex justify-center'>
            <Image src={logo} alt='/' className='' />
          </div>

          <h1 className='uppercase text-2xl font-bold py-4'>
            Your account for everything Nike
          </h1>
          <button
            className='my-5 cursor-pointer bg-[#111] py-2 px-4 rounded-xl text-white hover:bg-[#111]/70'
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

export default Cart;
