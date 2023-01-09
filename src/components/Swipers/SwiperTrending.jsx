import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import 'swiper/css/free-mode';
import Trending1 from './../../../public/images/trending-1.png';

import { homeTrending } from './../../constants/index';

export const SwiperTrending = () => {
  return (
    <div>
      <div className="swiper-trending">
        <Swiper
          slidesPerView={4}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {homeTrending.map((item) => (
            <SwiperSlide>
              <img src={item.img} alt="" className="rounded-[30px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
