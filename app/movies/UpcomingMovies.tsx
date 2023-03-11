"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import useSWR from "swr";

const UpcomingMovies: React.FC<WithScrollProps> = ({ swiper }) => {
  const { data, isLoading, error } = useSWR("/movie/upcoming", fetcher);

  if (isLoading) return <p>Loading Upcoming Movie</p>;

  return (
    <section className="card-movie-container" ref={swiper}>
      {data.results.map((movie: Movie) => (
        <SmallMovieCard key={`upcomingMovies-${movie.id}`} movie={movie} />
      ))}
    </section>
  );
};

export default withScroll(UpcomingMovies);
