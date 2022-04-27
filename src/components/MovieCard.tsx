import React from 'react';
import { Category, Movie } from '../pages/HomePage';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
 movie:Movie
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex space-x-4">
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt=""
        className="w-20 h-20 object-cover rounded-md"
      />
      <div>
        <div className="text-lg font-semibold">{movie.title}</div>
        <div className="text-gray-700">
          {movie.overview}
        </div>
        <div className="text-gray-500">{`평점 : ${movie.vote_average}`}</div>
      </div>
    </div>
  );
};
