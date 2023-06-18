import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Product from "./Product";

const Carousel = ({ products }) => {
  // console.log(products);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Navigation]}
      className='mySwiper'
    >
      {products?.slice(0, 6).map((product) => (
        <SwiperSlide key={product._id}>
          <Product product={product}  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
