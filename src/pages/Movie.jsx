import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { api } from '../services/axios';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovies() {
    const response = await api.get(
      `${moviesURL}top_rated?${apiKey}&language=pt-BR`
    );
    setMovie(response.data);
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovies(movieURL);
  }, []);

  return (
    <Container>
      <div className="h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque
          reprehenderit, quibusdam iusto harum ut aliquid nobis doloribus natus
          enim dignissimos. Dignissimos maiores, perspiciatis voluptates
          explicabo numquam consectetur illo? Quis.
        </p>
      </div>
    </Container>
  );
}
