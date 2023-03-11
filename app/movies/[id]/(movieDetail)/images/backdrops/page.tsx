"use client";

import Spinner from "@/components/common/Spinner";
import useGetImages from "@/hooks/useGetImages";
import Image from "next/image";

const Backdrops = ({ params }: { params: { id: string } }) => {
  const { data: images, isLoading, error } = useGetImages(params.id);

  return (
    <section className="px-10 mb-14">
      <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Backdrops</h2>

      {isLoading ? (
        <div className="w-full h-40 flex-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-7">
          {images?.backdrops?.map((backdrop) => (
            <div key={backdrop.file_path} className="relative aspect-[7/4]">
              <Image
                src={`https://image.tmdb.org/t/p/w780${backdrop.file_path}`}
                alt={"backdrop image"}
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
    </section>
  );
};

export default Backdrops;
