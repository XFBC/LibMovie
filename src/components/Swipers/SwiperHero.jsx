import React from 'react';
import { homeBanner } from './../../constants/index';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export const SwiperHero = () => {
  return (
    <div className="pt-10">
      {' '}
      {/* <div className="pt-10">
        {homeBanner.map((item) => (
          <div>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div> */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {homeBanner.map((item) => (
            <div>
              <SwiperSlide>
                {' '}
                <img src={item.img} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
