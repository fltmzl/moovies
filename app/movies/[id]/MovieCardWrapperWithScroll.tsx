"use client";

import SmallMovieCard from "@/components/card/SmallMovieCard";
import { fetcher } from "@/utils";
import useSWR from "swr";

const MovieCardWrapperWithScroll = ({ apiEndpoint, keyPrefix, loadingState, sectionTitle }: { apiEndpoint: string; keyPrefix: string; loadingState: string; sectionTitle: string }) => {
  const { data, isLoading, error } = useSWR<Movies>(apiEndpoint, fetcher);

  if (isLoading) return <>{loadingState}</>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">{sectionTitle}</h2>
      <div className="card-movie-container_with-scroll">
        {data?.results.map((movie) => (
          <SmallMovieCard key={`${keyPrefix}-${movie.id}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardWrapperWithScroll;
