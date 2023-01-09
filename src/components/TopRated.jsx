import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperTopRated } from './Swipers/SwiperTopRated';

export const TopRated = () => {
  return (
    <div>
      <div className="pt-9">
        <div className="flex flex-row justify-between max-w-[870px]">
          <h2 className="text-2xl pb-7 text-[#E8E8E8]">Mais votados</h2>
          <Link to="">Ver tudo</Link>
        </div>
        <div>
          <SwiperTopRated />
        </div>
      </div>
    </div>
  );
};
