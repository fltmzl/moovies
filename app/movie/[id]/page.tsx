import MoviesOrTvCardWrapper from "@/app/MoviesOrTvCardWrapper";
import SubNavbar from "@/components/common/SubNavbar";
import CastList from "@/components/part/movieOrTvDetails/CastList";
import DetailList from "@/components/part/movieOrTvDetails/DetailList";
import ImageList from "@/components/part/movieOrTvDetails/ImageList";
import ReviewList from "@/components/part/movieOrTvDetails/ReviewList";
import VideoList from "@/components/part/movieOrTvDetails/VideoList";
import { getMovie } from "@/utils";
import { getGenreString, getReadableDate, roundNumber } from "@/utils/common";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import noImage from "@/public/images/no-image.png";

const MovieDetail = async ({ params }: { params: { id: string } }) => {
  const movie: MovieDetail = await getMovie(params.id);

  return (
    <>
      <main className={`px-5 lg:px-10 w-full min-h-screen lg:max-h-[1000px] flex-y-center relative z-0`}>
        <Image
          src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` : noImage}
          alt={movie?.title!}
          fill
          sizes="(max-width: 768px) 90vw
              (max-width: 1200px) 80vw
              100vw"
          className="-z-10 pointer-events-none object-cover brightness-75"
        />
        <div className="absolute -z-10 inset-0 shadow-[inset_0_-50px_210px_140px_rgba(15,23,42,1)] md:shadow-[inset_0_-50px_310px_150px_rgba(15,23,42,1)] pointer-events-none"></div>

        <section className={`flex flex-col md:flex-row md:items-center gap-10 py-16`}>
          <div className="relative w-48 md:scale-90 aspect-[5/7] basis-1/2 lg:basis-4/12 xl:basis-3/12">
            <Image
              src={movie?.poster_path ? `https://image.tmdb.org/t/p/original${movie?.poster_path}` : noImage}
              alt={movie?.title!}
              fill
              sizes="(max-width: 768px) 80vw
                (max-width: 1200px) 50vw
                40vw"
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="basis-full flex-center">
            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
                <p>{movie.overview}</p>
              </div>

              <div className="space-y-4">
                <div className="text-xs">
                  <span className="bg-blue-500 rounded-lg py-1 px-2 inline-block">{movie.runtime}m</span>
                </div>
                <div className="text-xs space-x-2">
                  <span>{getReadableDate(movie.release_date)}</span>
                  <span>&bull;</span>
                  <span>{getGenreString(movie)}</span>
                </div>
                <div className="flex-y-center gap-4">
                  <div className="w-8 h-fit aspect-square flex-center rounded-full border border-blue-500">
                    <FaFire className="text-blue-500" />
                  </div>
                  <div className="flex gap-1">
                    <span className="text-2xl text-blue-500 font-semibold">{roundNumber(movie.vote_average)}</span>
                    <span className="font-light text-sm text-white">/ 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SubNavbar movieId={movie.id} />

      <div className="container-base space-y-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="md:w-1/2 space-y-14">
            <CastList movieId={movie.id} type="movie" />
            <DetailList movieDetail={movie} type="movie" />
            <ReviewList movieId={movie.id} type="movie" />
          </div>

          <div className="md:w-1/2 space-y-14">
            <VideoList movieId={movie.id} type="movie" />
            <ImageList movieId={movie.id} type="movie" />
          </div>
        </div>
        <div className="space-y-10">
          <MoviesOrTvCardWrapper type="movie" sectionTitle="Recommended Movies" apiEndpoint={`/movie/${movie.id}/recommendations`} keyPrefix="recommendationsMovieDetails" loadingState={<p>Loading Recommended</p>} />
          <MoviesOrTvCardWrapper type="movie" sectionTitle="Similar Movies" apiEndpoint={`/movie/${movie.id}/similar`} keyPrefix="similarMovieDetails" loadingState={<p>Loading Similar</p>} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
