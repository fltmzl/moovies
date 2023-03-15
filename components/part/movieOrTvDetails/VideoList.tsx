"use client";

import { fetcher } from "@/utils";
import Link from "next/link";
import { type } from "os";
import { MdKeyboardArrowRight } from "react-icons/md";
import useSWR from "swr";

const VideoCard = ({ video }: { video: Video }) => {
  return <iframe src={`https://www.youtube.com/embed/${video.key}`} className="w-full aspect-video rounded-2xl"></iframe>;
};

const VideoList = ({ movieId, type }: { movieId: number; type: "movie" | "tv" }) => {
  const { data, isLoading, error } = useSWR<Videos>(`/${type}/${movieId}/videos`, fetcher);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">Teaser</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
          {data?.results
            .filter((video) => video.type === "Teaser" || video.type === "Trailer" || video.type === "Clip")
            .filter((video, index) => index < 5)
            .map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}

          {data?.results && (
            <div className="flex-center">
              <Link href={`/${type}/${movieId}/videos`} className="flex-center group space-x-2 hover:text-blue-500 duration-300">
                <span>View all videos</span>
                <span className="inline-block group-hover:translate-x-3 duration-75">
                  <MdKeyboardArrowRight />
                </span>
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default VideoList;
