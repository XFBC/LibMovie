import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '../components/Container';
import { DrawerMenu } from '../components/DrawerMenu';
import MovieCard from '../components/MovieCard';
import { api } from '../services/axios';
import Search from '/src/components/Search.jsx';
import { homeBanner } from './../constants/index';

import { SwiperHero } from '../components/Swipers/SwiperHero';
import { TrendingFilms } from '../components/TrendingFilms';

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
          <Search />
          <SwiperHero />
          <TrendingFilms />
        </Container>
      </div>
    </>
  );
}
