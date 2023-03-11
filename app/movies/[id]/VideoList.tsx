"use client";

import { fetcher } from "@/utils";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import useSWR from "swr";

const VideoCard = ({ video }: { video: Video }) => {
  return <iframe src={`https://www.youtube.com/embed/${video.key}`} className="w-full aspect-video rounded-2xl"></iframe>;
};

const VideoList = ({ movieId }: { movieId: number }) => {
  const { data, isLoading, error } = useSWR<Videos>(`/movie/${movieId}/videos`, fetcher);
  console.log(data);

  if (isLoading) return <p>Loading Videos</p>;

  return (
    <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
      {data?.results
        .filter((video) => video.type === "Teaser" || video.type === "Trailer" || video.type === "Clip")
        .filter((video, index) => index < 5)
        .map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      <div className="flex-center">
        <Link href={`/movies/${movieId}/videos`} className="flex-center group space-x-2 hover:text-blue-500 duration-300">
          <span>View all videos</span>
          <span className="inline-block group-hover:translate-x-3 duration-75">
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VideoList;
