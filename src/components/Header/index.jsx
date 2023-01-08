import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from './../../../public/Vector.png';

export function Header() {
  return (
    <header
      className={`flex flex-col h-[100vh] w-[276px] bg-[#212121] items-center rounded-r-[30px] pt-[56px] fixed`}
    >
      <div className="items-center flex flex-col">
        <img src={Logo} alt="" />
        <Link
          to="/"
          className="hover:bg-[#3DD2CC] w-[276px] py-[28px] text-center mt-10"
        >
          Home
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#3DD2CC] w-[276px] py-[28px] text-center"
        >
          Movies
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#3DD2CC] w-[276px] py-[28px] text-center"
        >
          TV series
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#3DD2CC] w-[276px] py-[28px] text-center"
        >
          Movie
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#3DD2CC] w-[276px] py-[28px] text-center"
        >
          Lançamentos
        </Link>

        <div className="bg-[#191919] text-left rounded-2xl px-[16px] pt-10 pb-4 mt-2 ">
          <p className="text-lg text-[#E8E8E8CC]">
            Play movie quizes <br /> and earn <br /> free tickets
          </p>
          <p className="text-[14px]"> 50k people are playing now</p>

          <a
            href=""
            className={` ${styles.bg_green}  flex justify-center  rounded-[34px] mt-4 hover:bg-[#3DD2CC]`}
          >
            {' '}
            <span className="text-[#3DD2CC] py-[6px] hover:text-[#212121]">
              {' '}
              Start playing
            </span>
          </a>
        </div>
      </div>
      <div>
        {/* formulario de busca de filmes */}
        {/* <form className="pl-2">
          <input
            type="text"
            placeholder="Busque um filme"
            className="px-2 mx-4 rounded"
          />
          <button type="submit" className="btn">
            Buscar
          </button>
        </form> */}
      </div>
    </header>
  );
}
