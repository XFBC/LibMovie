import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import { api } from './../../services/axios';
import { Swiper, SwiperSlide } from 'swiper/react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const SwiperTopRated = () => {
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
  return (
    <div>
      <div className="swiper-top-rated">
        <Swiper
          slidesPerView={4}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <div key={movie.id}>
                <SwiperSlide>
                  <MovieCard movie={movie} />
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
