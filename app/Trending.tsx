"use client";

import MovieCard from "@/components/card/MovieCard";
import useSWR from "swr";
import { fetcher } from "@/utils";
import { useState } from "react";
import LargeCardSkeleton from "@/components/loading/LargeCardSkeleton";

type MediaState = "all" | "movie" | "tv";
type TimeState = "day" | "week";

const TrendingMovies = () => {
  const [media, setMedia] = useState<MediaState | any>("movie");
  const [time, setTime] = useState<TimeState | any>("day");
  const { data, isLoading, error } = useSWR(`/trending/${media}/${time}`, fetcher);

  const handleMedia = (media: MediaState) => {
    setMedia(media);
  };

  return (
    <section>
      <div className="mb-5">
        <h1 className="text-xl font-semibold">Trending</h1>
      </div>

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

      <div className="card-movie-container">
        {isLoading ? (
          <LargeCardSkeleton />
        ) : (
          <>
            {data.results.map((movie: Movie & TV) => {
              const type = movie.title ? "movie" : "tv";
              return <MovieCard key={`trendingMovies-${movie.id}`} type={type} data={movie} />;
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default TrendingMovies;
