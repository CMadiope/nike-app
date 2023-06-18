import React, { useState } from "react";
import logo from "../../public/logo.png";
import jump from "../../public/jump-man.png";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineRight,
  AiOutlineShop,
} from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { BsBox2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = ({ nav, setNav }) => {
  const { data: session } = useSession();
  const [clickOutSide, setClickOutSide] = useState(false);
  const navRef = React.useRef();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleClickOutSide = (e) => {
    if (!navRef.current.contains(e.target)) {
      setClickOutSide(true);
      setNav(false);
    }
  };
  const handleClickInside = () => {
    setClickOutSide(false);
    setNav(!nav);
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <nav className='bg-white'>
      <div className='hidden lg:flex items-center justify-between bg-[#F5F5F5] px-16 py-[8px]'>
        <Link href='/'>
          <Image src={jump} alt='nike-jump-man' />
        </Link>
        <div className='text-xs flex gap-4 items-center'>
          <p>Find a Store</p>
          <p>|</p>
          <p>Help</p>
          <p>|</p>
          {session ? (
            <Link href='/profile' className='flex items-center gap-4'>
              <p>Hi, {session.user.name}</p>
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={50}
                height={50}
                className='rounded-full'
              />
            </Link>
          ) : (
            <Link href='/login'>Sign In</Link>
          )}
        </div>
      </div>
      <div className='flex justify-between items-center px-6 lg:px-16 py-[10px]'>
        <Link href='/'>
          <Image src={logo} alt='nike-logo' />
        </Link>
        <div>
          <ul className='text-md hidden lg:flex gap-4'>
            <li>
              <Link href='/new'>New & Featured</Link>
            </li>
            <li>
              <Link href='/men'>Men</Link>
            </li>
            <li>
              <Link href='/women'>Women</Link>
            </li>
            <li>
              <Link href='/kids'>Kids</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='hidden lg:flex gap-3 bg-[#F5F5F5] items-center px-4 py-2 rounded-full mr-4'>
            <BiSearch size={20} />
            <input
              type='text'
              className='w-full bg-transparent focus:outline-none outline-none'
              placeholder='Search'
            />
          </div>
          <Link
            href='/favourites'
            className='hidden lg:block hover:bg-[#F5F5F5] p-2 rounded-full'
          >
            <AiOutlineHeart size={20} />
          </Link>
          <Link
            href='/cart'
            className='hover:bg-[#F5F5F5] p-2 rounded-full relative'
          >
            <IoBagOutline size={20} />
            <span className='bg-red-600 text-white text-xs w-4 h-4 rounded-full absolute top-1 right-px flex justify-center'>
              {quantity || 0}
            </span>
          </Link>
          <div
            className='lg:hidden hover:bg-[#F5F5F5] p-2 rounded-full cursor-pointer'
            onClick={handleClickInside}
          >
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>
      <div className='flex lg:hidden gap-2 bg-[#F5F5F5] items-center px-4 py-2 rounded-full mx-5'>
        <BiSearch size={20} />
        <input
          type='text'
          className='w-full bg-transparent focus:outline-none outline-none'
          placeholder='Search Nike and Jordan Products'
        />
      </div>
      <div className='bg-[#F5F5F5] border-b-2 h-[50px] w-full mt-2'></div>

      <div
        className={`fixed lg:hidden h-screen top-0 right-0 z-20 bg-white w-[300px]  overflow-y-scroll duration-300
      ${
        nav
          ? "translate-x-0 transition ease-in-out duration-300"
          : "translate-x-full transition ease-in-out duration-300"
      }
      `}
        ref={navRef}
      >
        <div
          className='flex justify-end pr-10 pt-6 cursor-pointer'
          onClick={handleNav}
        >
          <RxCross1 size={20} />
        </div>
        <div className='py-6 px-10 flex gap-6 flex-col'>
          <Link
            href='/new'
            className='flex justify-between items-center text-xl font-semibold'
            onClick={handleNav}
          >
            <h4>New & Featured</h4>
            <AiOutlineRight />
          </Link>
          <Link
            href='/men'
            className='flex justify-between items-center text-xl font-semibold'
            onClick={handleNav}
          >
            <h4>Men</h4>
            <AiOutlineRight />
          </Link>
          <Link
            href='/women'
            className='flex justify-between items-center text-xl font-semibold'
            onClick={handleNav}
          >
            <h4>Women</h4>
            <AiOutlineRight />
          </Link>
          <Link
            href='/kids'
            className='flex justify-between items-center text-xl font-semibold'
            onClick={handleNav}
          >
            <h4>Kids</h4>
            <AiOutlineRight />
          </Link>

          <div className='pt-12'>
            <h3 className=' text-xl text-gray-500'>
              Become a Nike Member for the best products,inspiration and stories
              in sport.
            </h3>
          </div>
          <div className='flex gap-2 text-lg'>
            <button className='rounded-full px-5 py-2 bg-black text-white hover:bg-black/70'>
              Join Us
            </button>
            <button className='rounded-full border px-5 py-2 hover:border-black'>
              Sign In
            </button>
          </div>
          <div className='flex flex-col gap-4 pt-10 text-lg pb-32'>
            <Link href='/cart' className='flex gap-4 items-center'>
              <IoBagOutline size={20} />
              <p>Bag</p>
            </Link>
            <Link href='#' className='flex gap-4 items-center'>
              <BsBox2 size={20} />
              <p>Orders</p>
            </Link>
            <Link href='#' className='flex gap-4 items-center'>
              <AiOutlineShop size={20} />
              <p>Find Shop</p>
            </Link>
            <Link href='#' className='flex gap-4 items-center'>
              <BiHelpCircle size={20} />
              <p>Help</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
