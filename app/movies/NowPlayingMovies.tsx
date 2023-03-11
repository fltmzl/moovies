"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import useSWR from "swr";

const NowPlayingMovies: React.FC<WithScrollProps> = ({ swiper }) => {
  const { data, isLoading, error } = useSWR("/movie/now_playing", fetcher);

  if (isLoading) return <p>Loading Now Playing Movie</p>;

  return (
    <section className="card-movie-container" ref={swiper}>
      {data.results.map((movie: Movie) => (
        <SmallMovieCard key={`nowPlayingMovies-${movie.id}`} movie={movie} />
      ))}
    </section>
  );
};

export default withScroll(NowPlayingMovies);
