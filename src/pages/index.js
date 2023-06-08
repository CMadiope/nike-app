import Carousel from "@/components/Carousel";
import { client } from "../lib/client";
import hero from "../../public/hero.jpeg";

export default function Home({ products }) {
  //console.log(products);

  return (
    <main>
      <div className='py-20'>
        <h1 className='uppercase font-[800] text-[48px] text-center lg:text-[72px] text-[#111]'>
          national team collection
        </h1>
        <p className='text-lg md:text-xl md:px-20 text-black/80 px-8 text-center'>
          Team pride has never looked so fresh. Show the world what the future
          of football looks like in the 2023 Nike National Team Kit &
          Collections
        </p>
        <div className='flex justify-center py-8'>
          <button className='text-lg text-white bg-black px-6 py-2 rounded-full hover:bg-black/60'>
            Shop
          </button>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url(${hero.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat'
      ></section>

      <div className='p-16'>
        <Carousel products={products} />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']`;
  const products = await client.fetch(query);

  //console.log(products);

  return {
    props: { products },
  };
};
