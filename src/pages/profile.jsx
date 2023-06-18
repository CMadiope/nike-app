import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { urlFor } from "@/lib/client";
import { removeBookmark } from "@/store/bookmarkSlice";

const Profile = () => {
  const { data: session } = useSession();
  const bookmarkItems = useSelector((state) => state.bookmark.bookmarkList);
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  if (session) {
    return (
      <div className='pb-20 px-6 lg:px-16 '>
        <div className='pt-10 flex gap-5 '>
          <div>
            <Image
              src={session?.user.image}
              alt='/'
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>
          <div>
            <h1 className='text-3xl'>{session.user.name}</h1>
            <h4 className='py-3 text-lg opacity-70'>
              Nike Member Since {date}
            </h4>
          </div>
        </div>

        {bookmarkItems ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10'>
            {bookmarkItems?.map((item) => (
              <div className='relative' key={item.id}>
                <img
                  src={urlFor(item.image && item.image[0])}
                  alt={item.name}
                  width={450}
                  height={450}
                  className=' bg-[#ebebeb]'
                />
                <div className='flex justify-between items-center font-semibold mt-2 text-sm md:text-base pt-4 pr-4'>
                  <p className=''>{item.name}</p>
                  <p>R {item.price}</p>
                </div>
                <p className='pt-1 text-black/50 capitalize'>{item.category}</p>
                <div
                  className='absolute top-5 text-xl right-5 hover:text-red-600'
                  onClick={() => dispatch(removeBookmark(item))}
                >
                  <RxCross2 />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-8'>
            <h1 className='text-center font-bold text-xl'>
              You have no favourite items...
            </h1>
            <Link href='/' className='flex justify-center py-10'>
              <button className='bg-black/90 text-white/80 py-3 px-8'>
                Go to Shop
              </button>
            </Link>
          </div>
        )}
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

export default Profile;
