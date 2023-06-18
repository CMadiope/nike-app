import React, { useState } from "react";
import { urlFor } from "@/lib/client";
import { client } from "@/lib/client";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "@/components/Carousel";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { addToBookmark } from "@/store/bookmarkSlice";
import { toast } from "react-toastify";

const ProductDetail = ({ product, products }) => {
  const { image, name, description, price, category, colour, id } = product;
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart(product));
    toast.success("The Product has been added to your Bag", {
      autoClose: 200,
    });
    toast.POSITION.BOTTOM_LEFT;
  };

  const addFav = () => {
    dispatch(addToBookmark(product));
    toast.success("The Product has been added to your Favourites", {
      autoClose: 200,
    });
    toast.POSITION.BOTTOM_LEFT;
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row gap-[40px] m-[40px] mt-[60px] justify-evenly items-center'>
        <div className=''>
          <div className=''>
            <div className='py-5 md:hidden'>
              <h3 className='text-2xl'>{name}</h3>
              <p className='capitalize text-black/50'>{category}</p>
              <p className='text-lg pt-4'>R {price}</p>
            </div>
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className='rounded-[15px] bg-[#ebebeb] w-[400px] h-[450px] cursor-pointer transition ease-in-out duration-150'
            />
          </div>
          <div className='flex gap-[10px] mt-[20px]'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                alt='/'
                className={
                  i == index
                    ? "rounded-[8px] bg-[#ebebeb] w-[70x] h-[70px] cursor-pointer selected-image"
                    : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='py-5 hidden md:flex flex-col'>
            <h3 className='text-2xl'>{name}</h3>
            <p className='capitalize text-black/50'>{category}</p>

            <p className='text-lg pt-4'>R {price}</p>
          </div>
          <div className='w-full'>
            <p>{description}</p>
            <p className='pt-2'>Colours Shown: {colour}</p>
          </div>
          <div className='flex items-center flex-col md:flex-row gap-6 text-lg py-5'>
            <button
              className='rounded-full text-white bg-black w-full py-4 hover:bg-black/70'
              onClick={addCart}
            >
              Add to Bag
            </button>
            <button
              className='flex items-center rounded-full border w-full justify-center gap-2 py-4 hover:border-black'
              onClick={addFav}
            >
              <p>Favourite</p>
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
      <div className='py-16 px-6 lg:px-16'>
        <h3 className='text-xl py-5 font-semibold'>You Might Also Like</h3>
        <Carousel products={products} />
      </div>
    </div>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
