"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import { fetcher } from "@/utils";
import useSWR from "swr";

const TopRatedMovies = () => {
  const { data, isLoading, error } = useSWR("/movie/top_rated", fetcher);

  if (isLoading) return <p>Loading Top Rated Movie</p>;

  return (
    <section>
      <div className="mb-5">
        <h1 className="text-xl font-semibold">Top Rated</h1>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-movie-container">
          {data.results.map((movie: Movie) => (
            <SmallMovieCard key={`topRatedMovies-${movie.id}`} type="movie" data={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopRatedMovies;
