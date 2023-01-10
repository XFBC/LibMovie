import { Container } from '../components/Container';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Busca from '/src/components/Search.jsx';
import { useEffect } from 'react';
import { api } from '../services/axios';
import { SwiperTopRated } from '../components/Swipers/SwiperTopRated';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

export function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  async function getSearchMovies() {
    const response = await api.get(
      `${searchURL}?${apiKey}&query=${query}&language=pt-BR`
    );

    setMovies(response.data.results);
    console.log(response.data.results);
  }

  useEffect(() => {
    getSearchMovies();
  }, []);

  return (
    <div>
      <Container>
        <div className="w-[900px] mb-[200px]">
          <Busca />
          <h2 className="py-8">
            Resultados para: <strong>{query}</strong>{' '}
          </h2>
          <div className="flex flex-wrap gap-[5rem]">
            {movies.map((movie) => (
              <div className="text-center">
                <p className="max-w-[200px] mb-4 px-[0px]">{movie.title}</p>
                <div className="">
                  <img
                    src={imagesURL + (movie.poster_path && movie.poster_path)}
                    alt={movie.title}
                    className="rounded-[30px] w-[200px] h-[315px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
