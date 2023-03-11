import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }: { movie?: Movie }) => {
  return (
    <Link href={movie?.title ? `/movies/${movie.id}` : `/tv/${movie?.name}`}>
      <div className="min-w-[660px] aspect-[16/7] rounded-2xl overflow-hidden relative z-10">
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie?.backdrop_path}`}
          alt={`backdrop image`}
          fill
          className="object-cover relative brightness-50 blur-[2px]"
          sizes="(max-width: 768px) 80vw
              (max-width: 1200px) 50vw
              30vw"
        />
        <div className="flex-y-center absolute">
          <div className="basis-2/5 h-full p-5">
            <Image
              className="rounded-2xl"
              src={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
              alt={`image`}
              width={200}
              height={250}
              sizes="(max-width: 768px) 80vw
              (max-width: 1200px) 50vw
              30vw"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w342${movie?.poster_path}`}
            />
          </div>
          <div className="basis-full space-y-5 px-3">
            <h1 className="font-semibold">{movie?.title || movie?.name}</h1>
            <span className="text-sm">
              {movie?.release_date} | Duration | {movie?.vote_average}
            </span>
            <p className="text-xs">{movie?.overview}</p>
            <div className="flex gap-5">
              <button className="btn-sec">Trailer</button>
              <button className="btn-pri">Watch Movie</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
