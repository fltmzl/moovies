"use client";

import { fetcher } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import useSWR from "swr";
import noImage from "@/public/images/no-image.png";

const ImageCard = ({ image, isSpanCard = false }: { image: ImageObject; isSpanCard: boolean }) => {
  return (
    <div className={`w-full aspect-video relative ${isSpanCard && "col-span-2"}`}>
      <Image
        src={image?.file_path ? `https://image.tmdb.org/t/p/original${image.file_path}` : noImage}
        alt={"photo of movie"}
        className="object-cover rounded-2xl"
        fill
        sizes="(max-width: 768px) 100vw
            (max-width: 1280px) 50vw
            30vw"
      />
    </div>
  );
};

const ImageList = ({ movieId, type }: { movieId: number; type: "movie" | "tv" }) => {
  const { data, isLoading, error } = useSWR<Images>(`/${type}/${movieId}/images`, fetcher);

  if (isLoading) return <p>Loading Images</p>;

  return (
    <section>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">Photos</h2>
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
        {data?.backdrops
          .filter((image, index) => index < 4)
          .map((image, index) => (
            <ImageCard key={image.file_path} image={image} isSpanCard={index === 0} />
          ))}

        {data?.backdrops && (
          <div className="flex-center">
            <Link href={`/${type}/${movieId}/images/backdrops`} className="flex-center group space-x-2 hover:text-blue-500 duration-300">
              <span>View all photos</span>
              <span className="inline-block group-hover:translate-x-3 duration-75">
                <MdKeyboardArrowRight />
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageList;
