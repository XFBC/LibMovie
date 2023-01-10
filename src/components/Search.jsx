import { useState } from 'react';
import { AiOutlineSearch, BsBell } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { CategoryGuide } from './CategoryGuide';

import Avatar from '/images/avatar.png';

export default function Search() {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };
  return (
    <div>
      <div className="flex flex-row items-center">
        <AiOutlineSearch className="absolute w-[35px] h-[35px] ml-6 text-[#666666]" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="py-3 bg-[#212121] w-[789px] rounded-3xl pl-20 text-[#666666] placeholder-[#666666]"
            placeholder="Pesquises por filmes e séries..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <div className="pl-[145px] flex flex-row items-center">
          <a href="#">
            <div className="bg-[#212121] w-[50px] h-[50px] rounded-full flex justify-center">
              <BsBell className="text-2xl mt-[10px]" />
            </div>
          </a>
          <a href="#">
            <img
              src={Avatar}
              width="50"
              height="50"
              alt="avatar"
              className="ml-6"
            />
          </a>
        </div>

        <CategoryGuide />
      </div>
    </div>
  );
}
