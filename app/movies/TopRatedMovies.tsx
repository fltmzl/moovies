"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import useSWR from "swr";

const TopRatedMovies: React.FC<WithScrollProps> = ({ swiper, apiEndpoint, keyPrefix, loadingState }) => {
  const { data, isLoading, error } = useSWR("/movie/top_rated", fetcher);

  if (isLoading) return <p>Loading Top Rated Movie</p>;

  return (
    <section className="card-movie-container" ref={swiper}>
      {data.results.map((movie: Movie) => (
        <SmallMovieCard key={`topRatedMovies-${movie.id}`} movie={movie} />
      ))}
    </section>
  );
};

export default withScroll(TopRatedMovies);
