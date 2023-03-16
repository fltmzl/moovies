"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import SmallCardSkeleton from "@/components/loading/SmallCardSkeleton ";
import { fetcher } from "@/utils";
import useSWR from "swr";

const TopRatedMovies = () => {
  const { data, isLoading, error } = useSWR("/movie/top_rated", fetcher);

  return (
    <section>
      <div className="mb-5">
        <h1 className="text-xl font-semibold">Top Rated</h1>
      </div>

      <div className="card-movie-container">
        {isLoading ? (
          <SmallCardSkeleton />
        ) : (
          <>
            {data.results.map((movie: Movie) => (
              <SmallMovieCard key={`topRatedMovies-${movie.id}`} type="movie" data={movie} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default TopRatedMovies;
