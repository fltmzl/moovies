import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import noImage from "@/public/images/no-image.png";

const HeaderDetailPage = ({ movie }: { movie: Movie }) => {
  return (
    <header className="container-base mt-20 flex-y-center gap-10 bg-slate-700">
      <div>
        <Image
          className="object-contain rounded-xl"
          src={movie?.poster_path ? `https://image.tmdb.org/t/p/original${movie?.poster_path}` : noImage}
          alt={`${movie?.title} poster`}
          width={110}
          height={200}
          sizes="(max-width: 768px) 60vw
              (max-width: 1200px) 50vw
              30vw"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{movie?.title}</h1>
        <Link href={`/movie/${movie?.id}`} className="text-slate-300 text-sm hover:underline">
          <MdOutlineArrowBack className="inline-block mr-3" />
          <span>Back to main</span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderDetailPage;
