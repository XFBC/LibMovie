import React from 'react';
import { Link } from 'react-router-dom';

const imagesURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {
  return (
    <div className="movie-card">
      <img
        src={imagesURL + (movie.poster_path && movie.poster_path)}
        alt={movie.title}
        className="rounded-[30px] w-[200px] h-[315px]"
      />
      {/* <h2>{movie.title}</h2> */}

      {/* {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>} */}
    </div>
  );
}
