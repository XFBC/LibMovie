import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperTrending } from './Swipers/SwiperTrending';

export const TrendingFilms = () => {
  return (
    <div>
      <div className="pt-9">
        <div className="flex flex-row justify-between max-w-[870px]">
          <h2 className="text-2xl pb-7 text-[#E8E8E8]">Têndencias</h2>
          <Link to="">Ver tudo</Link>
        </div>
        <SwiperTrending />
      </div>
    </div>
  );
};
