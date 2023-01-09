import React from 'react';
import { SwiperTopRated } from './Swipers/SwiperTopRated';

export const TopRated = () => {
  return (
    <div>
      <div className="pt-9">
        <h2 className="text-2xl pb-7 text-[#E8E8E8]">Mais votados</h2>
        <div>
          <SwiperTopRated />
        </div>
      </div>
    </div>
  );
};
