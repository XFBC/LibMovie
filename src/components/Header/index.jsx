import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '/Vector.png';

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
          Filmes
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
          Lançamentos
        </Link>

        <div className="bg-[#191919] text-left rounded-2xl px-[16px] pt-10 pb-4 mt-2 ">
          <p className="text-sm text-[#E8E8E8CC]">
            Responda questionários <br /> de filmes e ganhe <br /> bilhetes
            grátis
          </p>
          <p className="text-[14px]">
            {' '}
            +50 mil pessoas estão <br /> jogando agora
          </p>

          <a
            href=""
            className={` ${styles.bg_green}  flex justify-center  rounded-[34px] mt-4 hover:bg-[#3DD2CC] `}
          >
            {' '}
            <span className="text-[#3DD2CC] py-[6px] hover:text-[#212121]">
              {' '}
              Começa a jogar
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
