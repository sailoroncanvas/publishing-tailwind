import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';

const API_KEY = '2ffdaf3bc4ac778f30048fd2213c76ce';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular' },
  { id: 1, label: '현재 상영작', url: '/now_playing' },
  { id: 2, label: '평점 높은 순', url: '/top_rated' },
  { id: 3, label: '개봉 예정작', url: '/upcoming' },
];

export type Category = {
  id: number;
  label: string;
  url: string;
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCateory = (index: number) => {
    setCategoryIndex(index);
  };

  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      setMovies(data.results);
    } else {
      throw new Error('데이터를 받아오지 못했습니다.');
    }
    console.log(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(categoryIndex);
  }, [categoryIndex]);

  return (
    <div className="m-4 space-y-10">
      <div className="space-y-4">
        <div className="mb-4 font-bold text-2xl">New</div>
        <img
          src="https://images.unsplash.com/photo-1649083048428-3d8ed23a3ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-72 object-cover"
        />
      </div>

      <div className="space-y-4">
        <div className="mb-4 font-bold text-2xl">Category</div>

        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => (
            <CategoryButton category={data} onClick={setCateory} />
          ))}
          ;
        </div>
      </div>

      {/* <div>
        <div className="mb-4 font-bold text-2xl">List</div>
        <div className="p-4 border rounded-md">
          <img
            src="http://source.unsplash.com/random"
            alt=""
            className="w-full h-60 object-cover rounded-2xl"
          />
          <div className="font-bold mt-3 mb-2">Card title</div>
          <div className="text-gray-500 font-light mb-4 text-base">
            Sed vel turpis adipiscing penatibus orcineque. Erat sed fermentum
            ipsum vel quis quam. Nunc etiam dui tortor, non in aluquam lacinia
            tempor.
          </div>
          <div className="mt-4 flex space-x-3">
            <div className="py-2 bg-gray-800 text-white text-center font-bold rounded-md px-4">
              Button
            </div>
            <div className="py-2 border-2 border-gray-800 text-gray text-center font-bold rounded-md px-4">
              Button
            </div>
          </div>
        </div>
      </div> */}

      <div className="border p-4 rounded-md bg-slate-50 space-y-5">
        <div className="font-bold text-2xl">Today's Special</div>
        {!isLoading &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        <div className="p-0.1 border"></div>

        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-60 object-cover rounded-2xl"
          />
          <div className="space-y-2"></div>
          <div>
            <div className="text-lg font-bold">이화여대 아맛나 식당</div>
            <div>
              <div className="text-gray-700">
                서울특별시 서대문구 대현동 11-1
              </div>
              <div className="text-gray-700">02-1234-5678</div>
              <div className="text-gray-700">MON-SUN 12:00 PM - 9:00 PM</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-3xl text-white text-center">
            네이버 지도로 길찾기
          </div>
        </div>
      </div>
    </div>
  );
};
