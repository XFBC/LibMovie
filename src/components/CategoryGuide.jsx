import React from 'react';
import { Link } from 'react-router-dom';
import { Categories } from '../constants/index';

export const CategoryGuide = () => {
  return (
    <div className="absolute right-0 pr-[32px] pt-[34rem]">
      <div className="">
        {' '}
        <h2 className="pb-10">Categorias</h2>
        <div className="w-64  bg-[#212121] rounded-[30px] px-4 py-6 ">
          <div className="flex flex-col gap-[7px]">
            {Categories.map((item) => (
              <div className="flex flex-row justify-between border-b-2 border-[#666666] py-2">
                <p className="text-white">{item.info}</p>
                <input type="checkbox" class="checkbox checkbox-accent" />
              </div>
            ))}
            <div className="text-center mt-4">
              <Link to="">Ver mais</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
