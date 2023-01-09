import React from 'react';
import { SwiperTrending } from './Swipers/SwiperTrending';

export const TrendingFilms = () => {
  return (
    <div>
      <div className="pt-9 ">
        <h2 className="text-2xl pb-7 text-[#E8E8E8]">Têndencias</h2>
        <SwiperTrending />
      </div>
    </div>
  );
};
