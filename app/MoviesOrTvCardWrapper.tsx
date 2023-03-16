"use client";

import MovieCard from "@/components/card/MovieCard";
import SmallMovieCard from "@/components/card/SmallMovieCard";
import LargeCardSkeleton from "@/components/loading/LargeCardSkeleton";
import SmallCardSkeleton from "@/components/loading/SmallCardSkeleton ";
import { fetcher } from "@/utils";
import Link from "next/link";
import useSWR from "swr";

interface IProps {
  sectionTitle: string;
  apiEndpoint: string;
  keyPrefix: string;
  cardSize?: "sm" | "lg";
  type: "movie" | "tv";
}

const MoviesOrTvCardWrapper = ({ apiEndpoint, cardSize = "sm", keyPrefix, type, sectionTitle }: IProps) => {
  const { data, isLoading, error } = useSWR(apiEndpoint, fetcher);

  if (error) return <>{error}</>;

  return (
    <>
      <div className="flex-y-center justify-between mb-5">
        <h1 className="text-xl font-semibold">{sectionTitle}</h1>
        <Link href={apiEndpoint} className="hover:text-blue-400 hover:underline underline-offset-2">
          View All
        </Link>
      </div>

      <section className="card-movie-container">
        {cardSize === "sm" ? (
          <>
            {isLoading ? (
              <SmallCardSkeleton />
            ) : (
              <>
                {data?.results?.map((movie: Movie) => (
                  <SmallMovieCard key={`${keyPrefix}-${movie.id}`} type={type} data={movie} />
                ))}
              </>
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <LargeCardSkeleton />
            ) : (
              <>
                {data?.results?.map((movie: Movie) => (
                  <MovieCard key={`${keyPrefix}-${movie.id}`} type={type} data={movie} />
                ))}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default MoviesOrTvCardWrapper;
