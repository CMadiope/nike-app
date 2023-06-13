import React, { useState, useEffect } from "react";
import Head from "next/head";
import Product from "@/components/Product";
import { client } from "@/lib/client";
import { CiSliderHorizontal } from "react-icons/ci";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

let hightToLow;

const New = ({ products, filterMen, priceLow, filterWomen, priceHigh,filterKids }) => {
  const [showModal, setShowModal] = useState(false);
  const [screenFilter, setScreenFilter] = useState(false);
  const [sideFilter, setSideFilter] = useState(true);
  const [showMen, setShowMen] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [filteredItems, setFilteredItems] = useState(products);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleScreenFilter = () => {
    setScreenFilter(!screenFilter);
  };
  const handleSideFilter = () => {
    setSideFilter(!sideFilter);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {}
    };
  }, []);

  const handleShowMen = () => {
    setShowMen(!showMen);
  };

  return (
    <>
      <Head>
        <title>New Trainers & Gear</title>
      </Head>
      <div className='pb-20 px-6 lg:px-16 text-[#111] pt-12'>
        <div className='flex justify-between items-center relative'>
          <h3 className='text-xl md:text-2xl  font-semibold'>
            New Trainers & Gear
          </h3>
          <div className='flex gap-8 items-center'>
            <div
              className='hidden lg:flex gap-2 items-center text-lg cursor-pointer'
              onClick={handleSideFilter}
            >
              {sideFilter ? <p>Hide Filters</p> : <p>Show Filters</p>}

              <CiSliderHorizontal size={25} />
            </div>
            <div
              className='lg:hidden gap-2 items-center text-lg flex rounded-full border py-1 px-4 hover:border-black cursor-pointer'
              onClick={handleScreenFilter}
            >
              <p>Filter</p>
              <CiSliderHorizontal size={25} />
            </div>
            <div className='hidden lg:block'>
              <div
                className='flex gap-2 items-center cursor-pointer'
                onClick={handleModal}
              >
                <p>Sort By</p>
                {showModal ? <BsChevronUp /> : <BsChevronDown />}
              </div>
              {showModal && (
                <div className=' flex flex-col gap-3 bg-white rounded-2xl p-8 text-left absolute right-px z-20 transition duration-300 ease-in-out'>
                  <p
                    className='hover:text-black/50 cursor-pointer'
                    onClick={() => setFilteredItems(priceHigh)}
                  >
                    Price: High-Low
                  </p>
                  <p
                    className='hover:text-black/50 cursor-pointer'
                    onClick={() => setFilteredItems(priceLow)}
                  >
                    Price: Low-High
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='grid grid-cols-5 pt-8'>
          <div
            className={`${
              sideFilter ? "block" : "hidden-text"
            }  hidden lg:block`}
          >
            <h3 className='text-lg font-semibold'>Filter By:</h3>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='men'
                type='checkbox'
                onChange={() => setFilteredItems(filterMen)}
              />
              <label htmlFor='#men'>Men</label>
            </div>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='women'
                type='checkbox'
                onChange={() => setFilteredItems(filterWomen)}
              />
              <label htmlFor='#women'>Women</label>
            </div>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='women'
                type='checkbox'
                onChange={() => setFilteredItems(filterKids)}
              />
              <label htmlFor='#women'>Kids</label>
            </div>
          </div>

          <div
            className={`${
              sideFilter ? "col-span-4" : "col-span-5"
            } grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4`}
          >
            {filteredItems?.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        </div>

        <div
          className={`fixed lg:hidden h-screen top-0 left-0 right-0  bg-white transition duration-300 p-6 z-50 text-[#111]
          ${
            screenFilter
              ? "translate-y-0 transition ease-in-out duration-300"
              : "translate-y-full transition ease-in-out duration-300"
          }
          `}
        >
          <div className='flex items-center justify-between '>
            <p>Filter</p>
            <div className='cursor-pointer' onClick={handleScreenFilter}>
              <MdCancel size={40} />
            </div>
          </div>
          <h4 className='text-lg font-semibold pt-8'>Sort By</h4>
          <div className='flex items-center gap-2 text-lg pt-6'>
            <input
              id='high'
              type='radio'
              onChange={() => setFilteredItems(priceHigh)}
            />
            <label htmlFor='#high'>Price: High-Low</label>
          </div>
          <div
            id='low'
            className='flex items-center gap-2 text-lg py-6 border-b'
          >
            <input type='radio' onChange={() => setFilteredItems(priceLow)} />
            <label htmlFor='#low'>Price: Low-High</label>
          </div>
          <div>
            <h4 className='text-lg font-semibold pt-8'>Gender</h4>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='men'
                type='checkbox'
                onChange={() => setFilteredItems(filterMen)}
              />
              <label htmlFor='#men'>Men</label>
            </div>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='women'
                type='checkbox'
                onChange={() => setFilteredItems(filterWomen)}
              />
              <label htmlFor='#women'>Women</label>
            </div>
            <h4 className='text-lg font-semibold pt-8'>Kids</h4>
            <div className='flex items-center gap-2 text-lg pt-6'>
              <input
                id='women'
                type='checkbox'
                onChange={() => setFilteredItems(filterKids)}
              />
              <label htmlFor='#women'>Kids</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']`;
  const products = await client.fetch(query);

  const menQuery = `*[_type == 'product' && category=='men']`;
  const filterMen = await client.fetch(menQuery);

  const womenQuery = `*[_type == 'product' && category=='women']`;
  const filterWomen = await client.fetch(womenQuery);
  const kidsQuery = `*[_type == 'product' && category=='kids']`;
  const filterKids = await client.fetch(kidsQuery);

  const priceAscQuery = `*[_type == 'product'] | order(price asc) `;
  const priceLow = await client.fetch(priceAscQuery);

  const priceDescQuery = `*[_type == 'product'] | order(price desc) `;
  const priceHigh = await client.fetch(priceDescQuery);

  // console.log(priceDescQuery);

  return {
    props: {
      products,
      filterMen,
      priceLow,
      filterWomen,
      priceHigh,
      filterKids,
    },
  };
};
