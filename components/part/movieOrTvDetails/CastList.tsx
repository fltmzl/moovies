"use client";

import { fetcher } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { MdKeyboardArrowRight } from "react-icons/md";
import noImage from "@/public/images/no-image.png";

export const CastCard = ({ cast }: { cast: Cast | Crew }) => {
  const imgSrc = cast.profile_path ? `https://image.tmdb.org/t/p/w185${cast.profile_path}` : noImage;

  return (
    <div className="space-y-3">
      <div className="w-14 aspect-[3/4] relative rounded-xl overflow-hidden">
        <Image
          className="object-cover"
          src={imgSrc}
          alt={`${cast.name} profile`}
          fill
          sizes="(max-width: 768px) 50vw
              (max-width: 1200px) 30vw
              20vw"
        />
      </div>
      <div>
        <p className="text-xs">{cast.name}</p>
      </div>
    </div>
  );
};

const skeleton = Array.from({ length: 10 }, (_, index) => <div key={index} className="min-w-[56px] aspect-[3/4] rounded-xl bg-gray-500/30 animate-pulse"></div>);

const CastList = ({ movieId, type }: { movieId: number; type: "movie" | "tv" }) => {
  const { data, isLoading, error } = useSWR<Credits>(`/${type}/${movieId}/credits`, fetcher);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">Cast</h2>
      <div className="flex flex-nowrap gap-8 pb-7 overflow-auto">
        {isLoading ? (
          <>{skeleton}</>
        ) : (
          <>
            {data?.cast
              .filter((item) => item.order <= 10)
              .map((item) => (
                <CastCard key={`${item.order}_${item.id}`} cast={item} />
              ))}
            <div className="flex-center min-w-[70px] text-sm">
              <Link href={`/${type}/${movieId}/cast`} className="hover:text-blue-400 group duration-300">
                <span>View all cast</span>
                <MdKeyboardArrowRight className="ml-2 group-hover:ml-4 inline-block duration-150" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CastList;
