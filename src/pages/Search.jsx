import { Container } from '../components/Container';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Busca from '/src/components/Search.jsx';
import { useEffect } from 'react';
import { api } from '../services/axios';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  async function getSearchMovies() {
    const response = await api.get(
      `${searchURL}?${apiKey}&query=${query}&language=pt-BR`
    );

    setMovies(response.data.results);
  }

  useEffect(() => {
    getSearchMovies();
  }, []);

  return (
    <div>
      <Container>
        <div className="h-screen w-[900px]">
          <Busca />
          <h2 className="py-8">Resultados: {query} </h2>

          {movies.map((movie) => (
            <p>{movie.title}</p>
          ))}
        </div>
      </Container>
    </div>
  );
}
