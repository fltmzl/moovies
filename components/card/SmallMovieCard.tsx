import Image from "next/image";
import Link from "next/link";
import noImage from "@/public/images/no-image.png";

type MovieOrTVProps<T extends "movie" | "tv"> = {
  type: T;
  data: T extends "movie" ? Movie : TV;
};

const SmallMovieCard = <T extends "movie" | "tv">({ type, data }: MovieOrTVProps<T>) => {
  let detailMovieHref = "title" in data ? `/movies/${data?.id}` : `/tv/${data?.id}`;

  return (
    <Link href={detailMovieHref}>
      <div className="min-w-[150px] aspect-[9/13] relative block bg-slate-500 rounded-2xl overflow-hidden">
        <Image
          src={data?.poster_path ? `https://image.tmdb.org/t/p/w200${data?.poster_path}` : noImage}
          alt={"title" in data ? data?.title : data?.name}
          fill
          sizes="(max-width: 768px) 50vw
              (max-width: 1200px) 40vw
              30vw"
        />
      </div>
    </Link>
  );
};

export default SmallMovieCard;
