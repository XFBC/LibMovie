import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '../components/Container';
import { DrawerMenu } from '../components/DrawerMenu';
import MovieCard from '../components/MovieCard';
import { api } from '../services/axios';
import { AiOutlineSearch, BsBell } from 'react-icons/all';
import Avatar from './../../public/images/avatar.png';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setMovies] = useState([
    {
      title: null,
      id: null,
    },
  ]);

  async function getMovies() {
    const response = await api.get(
      `${moviesURL}top_rated?${apiKey}&language=pt-BR`
    );
    setMovies(response.data.results);

    console.log(response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);
  // return (
  //   <div className="container">
  //     <h2 className="title">Melhores filmes:</h2>
  //     <div className="movies-container">
  //       {topMovies.length > 0 &&
  //         topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div className="">
        {/* <h2>Melhores filmes</h2>
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))} */}

        <Container>
          <div className="flex flex-row items-center">
            <AiOutlineSearch className="absolute w-[35px] h-[35px] ml-6 text-[#666666]" />
            <input
              type="text"
              className="py-3 bg-[#212121] w-[789px] rounded-3xl pl-20 text-[#666666] placeholder-[#666666]"
              placeholder="Search for movies, TV shows..."
            />
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
          </div>
        </Container>
      </div>
    </>
  );
}
