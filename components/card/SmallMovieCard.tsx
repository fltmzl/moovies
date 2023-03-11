import Image from "next/image";
import Link from "next/link";

const SmallMovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="min-w-[150px] aspect-[9/13] block bg-slate-500 rounded-2xl overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} image`}
        width={200}
        height={250}
        sizes="(max-width: 768px) 50vw
              (max-width: 1200px) 40vw
              30vw"
      />
    </div>
  );
};

export default SmallMovieCard;
