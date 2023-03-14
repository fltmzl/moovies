"use client";

import Spinner from "@/components/common/Spinner";
import useGetImages from "@/hooks/useGetImages";
import Image from "next/image";

const Posters = ({ params }: { params: { id: string } }) => {
  const { data: images, isLoading, error } = useGetImages(params.id);

  return (
    <section>
      <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Posters</h2>

      {isLoading ? (
        <div className="w-full h-40 flex-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {images?.posters?.map((poster) => (
            <div key={poster.file_path} className="relative aspect-[6/9]">
              <Image
                src={`https://image.tmdb.org/t/p/w780${poster.file_path}`}
                alt={"poster image"}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 90vw
              (max-width: 1200px) 70vw
              100vw"
              />
            </div>
          ))}
        </div>
      )}

      {images?.posters?.length! <= 0 && (
        <div className="w-full h-40 flex-center">
          <p>There are no posters yet</p>
        </div>
      )}
    </section>
  );
};

export default Posters;
