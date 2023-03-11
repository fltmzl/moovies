"use client";

import MovieCard from "@/components/card/MovieCard";
import SmallMovieCard from "@/components/card/SmallMovieCard";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import Link from "next/link";
import useSWR from "swr";

const MoviesCardWrapper: React.FC<WithScrollProps> = ({ swiper, apiEndpoint, cardSize = "sm", keyPrefix, loadingState }) => {
  const { data, isLoading, error } = useSWR(apiEndpoint, fetcher);

  if (isLoading) {
    return <>{loadingState}</>;
  }

  if(error) return <>{error}</>;

  return (
    <>
      <div>
        <Link href={apiEndpoint}>View All</Link>
      </div>
      <section className="card-movie-container" ref={swiper}>
        {cardSize === "sm" ? (
          <>
            {data.results.map((movie: Movie) => (
              <SmallMovieCard key={`${keyPrefix}-${movie.id}`} movie={movie} />
            ))}
          </>
        ) : (
          <>
            {data.results.map((movie: Movie) => (
              <MovieCard key={`${keyPrefix}-${movie.id}`} movie={movie} />
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default withScroll(MoviesCardWrapper);
