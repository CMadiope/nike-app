import Carousel from "@/components/Carousel";
import { client } from "../lib/client";
import hero from "../../public/hero.jpeg";

export default function Home({ products }) {
  //console.log(products);

  return (
    <main>
    
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
