"use client";

import MovieCard from "@/components/card/MovieCard";
import useSWR from "swr";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";

const Skeleton = () => {
  return (
    <div className="flex flex-nowrap gap-5 overflow-hidden">
      <div className="flex-y-center min-w-[660px] aspect-[16/7] rounded-2xl px-5 bg-gray-500/20 animate-pulse ">
        <div className="basis-2/5">
          <div className="w-[200px] h-[250px] rounded-2xl bg-gray-500/30"></div>
        </div>
        <div className="basis-full"></div>
      </div>
      <div className="flex-y-center min-w-[660px] aspect-[16/7] rounded-2xl px-5 bg-gray-500/20 animate-pulse ">
        <div className="basis-2/5">
          <div className="w-[200px] h-[250px] rounded-2xl bg-gray-500/30"></div>
        </div>
        <div className="basis-full"></div>
      </div>
      <div className="flex-y-center min-w-[660px] aspect-[16/7] rounded-2xl px-5 bg-gray-500/20 animate-pulse ">
        <div className="basis-2/5">
          <div className="w-[200px] h-[250px] rounded-2xl bg-gray-500/30"></div>
        </div>
        <div className="basis-full"></div>
      </div>
    </div>
  );
};

const DiscoverMovies: React.FC<WithScrollProps> = ({ swiper }) => {
  const { data, isLoading, error } = useSWR(`/discover/movie`, fetcher);

  if (isLoading) return <Skeleton />;

  return (
    <section className="card-movie-container" ref={swiper}>
      {data.results.map((movie: Movie) => (
        <MovieCard key={`trendingMovies-${movie.id}`} movie={movie} />
      ))}
    </section>
  );
};

export default withScroll(DiscoverMovies);
