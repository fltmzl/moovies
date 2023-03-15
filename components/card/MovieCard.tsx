import { roundNumber } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import noImage from "@/public/images/no-image.png";

type MovieOrTVProps<T extends "movie" | "tv"> = {
  type: T;
  data: T extends "movie" ? Movie : TV;
};

const MovieCard = <T extends "movie" | "tv">({ data, type }: MovieOrTVProps<T>) => {
  let detailMovieHref = type === "movie" ? `/movies/${data?.id}` : `/tv/${data?.id}`;

  return (
    <div className="flex-y-center min-w-[660px] aspect-[16/7] rounded-2xl overflow-hidden relative z-10">
      <Image
        src={data?.backdrop_path ? `https://image.tmdb.org/t/p/w300${data?.backdrop_path}` : noImage}
        alt={`backdrop image`}
        fill
        className="object-cover relative brightness-[0.3] blur-[2px]"
        sizes="(max-width: 768px) 80vw
              (max-width: 1200px) 50vw
              30vw"
      />
      <div className="flex-y-center absolute">
        <Link href={detailMovieHref}>
          <div className="basis-2/5 h-full p-5">
            <Image
              className="rounded-2xl"
              src={data?.poster_path ? `https://image.tmdb.org/t/p/w342${data?.poster_path}` : noImage}
              alt={`image`}
              width={230}
              height={250}
              sizes="(max-width: 768px) 80vw
              (max-width: 1200px) 50vw
              30vw"
            />
          </div>
        </Link>

        <div className="basis-full space-y-3 px-3">
          <Link href={detailMovieHref}>
            <h1 className="font-semibold text-xl hover:text-blue-400">{"title" in data ? data?.title : data?.name}</h1>
          </Link>

          <div className="text-sm space-x-2">
            {"release_date" in data ? <span>{data?.release_date}</span> : <span>{data?.first_air_date}</span>}
            <span>|</span>
            <span>
              <AiFillStar className="inline-block mr-1 text-blue-500" />
              <span>
                {roundNumber(data?.vote_average!)} ({data?.vote_count})
              </span>
            </span>
          </div>
          <p className="text-xs h-20 overflow-hidden">{data?.overview}</p>
          <div className="flex gap-5">
            <Link href={detailMovieHref} className="btn-pri text-sm">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
