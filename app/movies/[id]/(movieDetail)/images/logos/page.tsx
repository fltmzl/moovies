"use client";

import Spinner from "@/components/common/Spinner";
import useGetImages from "@/hooks/useGetImages";
import Image from "next/image";

const Logos = ({ params }: { params: { id: string } }) => {
  const { data: images, isLoading, error } = useGetImages(params.id);

  return (
    <section>
      <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Logos</h2>

      {isLoading ? (
        <div className="w-full h-40 flex-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {images?.logos?.map((logo) => (
            <div key={logo.file_path} className="relative aspect-[6/4]">
              <Image
                src={`https://image.tmdb.org/t/p/w780${logo.file_path}`}
                alt={"logo image"}
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

      {images?.logos?.length! <= 0 && (
        <div className="w-full h-40 flex-center">
          <p>There are no logos yet</p>
        </div>
      )}
    </section>
  );
};

export default Logos;
