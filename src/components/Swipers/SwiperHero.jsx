import React from 'react';
import { homeBanner } from './../../constants/index';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export const SwiperHero = () => {
  return (
    <div className="pt-10 swiper-hero w-[890px]">
      {' '}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {homeBanner.map((item) => (
          <SwiperSlide>
            {' '}
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
