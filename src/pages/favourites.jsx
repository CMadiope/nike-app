import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "@/components/Product";
import toast from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { urlFor } from "@/lib/client";
import { clearBookmarks, removeBookmark } from "@/store/bookmarkSlice";
import Link from "next/link";


const Favourites = () => {
  const dispatch = useDispatch();
  const bookmarkItems = useSelector((state) => state.bookmark.bookmarkList);

  if (bookmarkItems.length < 1) {
    return (
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
    );
  }

  //console.log(bookmarkItems);

  return (
    <div className='pb-20 px-6 lg:px-16 '>
      <div className='flex items-center justify-between font-semibold text-lg py-10'>
        <p>Favourites</p>
        <p
          className='border rounded-full px-4 py-2 cursor-pointer hover:bg-red-400 hover:text-white'
          onClick={() => dispatch(clearBookmarks())}
        >
          Clear
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
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
            <div className='absolute top-5 text-xl right-5 hover:text-red-600' onClick={()=> dispatch(removeBookmark(item))}>
              <RxCross2/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
