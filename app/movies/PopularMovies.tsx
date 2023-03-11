"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import useSWR from "swr";

const PopularMovies: React.FC<WithScrollProps> = ({ swiper }) => {
  const { data, isLoading, error } = useSWR("/movie/popular", fetcher);

  if (isLoading) return <p>Loading Popular Movie</p>;

  return (
    <section className="card-movie-container" ref={swiper}>
      {data.results.map((movie: Movie) => (
        <SmallMovieCard key={`popularMovies-${movie.id}`} movie={movie} />
      ))}
    </section>
  );
};

export default withScroll(PopularMovies);
