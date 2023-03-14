"use client";

import MovieCard from "@/components/card/MovieCard";
import useSWR from "swr";
import withScroll, { WithScrollProps } from "@/components/common/withScroll";
import { fetcher } from "@/utils";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

type MediaState = "all" | "movie" | "tv";
type TimeState = "day" | "week";

const TrendingMovies: React.FC<WithScrollProps> = ({ swiper, apiEndpoint, keyPrefix, loadingState }) => {
  const [media, setMedia] = useState<MediaState | any>("movie");
  const [time, setTime] = useState<TimeState | any>("day");
  const { data, isLoading, error } = useSWR(`/trending/${media}/${time}`, fetcher);

  const handleMedia = (media: MediaState) => {
    setMedia(media);
  };

  if (isLoading) return <Skeleton />;

  return (
    <>
      <div className="inline-flex gap-4 mb-4">
        <div className="flex-center w-fit border border-blue-500/50 rounded-full overflow-hidden">
          <button className={`btn-filter ${media === "all" && "bg-blue-500"}`} onClick={() => handleMedia("all")}>
            All
          </button>
          <button className={`btn-filter ${media === "movie" && "bg-blue-500"}`} onClick={() => handleMedia("movie")}>
            Movie
          </button>
          <button className={`btn-filter ${media === "tv" && "bg-blue-500"}`} onClick={() => handleMedia("tv")}>
            TV
          </button>
        </div>

        <div className="flex-center w-fit border border-blue-500/50 rounded-full overflow-hidden">
          <button className={`btn-filter ${time === "day" && "bg-blue-500"}`} onClick={() => setTime("day")}>
            Day
          </button>
          <button className={`btn-filter ${time === "week" && "bg-blue-500"}`} onClick={() => setTime("week")}>
            Week
          </button>
        </div>
      </div>
      <section className="card-movie-container" ref={swiper}>
        {data.results.map((movie: Movie) => (
          <MovieCard key={`trendingMovies-${movie.id}`} movie={movie} />
        ))}
      </section>
    </>
  );
};

export default withScroll(TrendingMovies);
