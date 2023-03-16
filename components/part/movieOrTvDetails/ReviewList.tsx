"use client";

import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { getReadableDate } from "@/utils/common";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import useGetReviews from "@/hooks/useGetReviews";
import RectangleSkeleton from "@/components/loading/RectangleSkeleton";

export const ReviewCard = ({ review }: { review: Review }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { content, author_details, author, updated_at } = review;
  const textContent = isReadMore ? content : content.substring(0, 200) + "...";

  const handleReadMore = () => setIsReadMore((prev) => !prev);

  return (
    <article className="text-xs">
      <div className="flex-y-center gap-1 mb-3">
        <AiFillStar className={`${author_details.rating > 2 ? "text-blue-400" : "text-blue-400/30"} `} />
        <AiFillStar className={`${author_details.rating > 4 ? "text-blue-400" : "text-blue-400/30"} `} />
        <AiFillStar className={`${author_details.rating > 6 ? "text-blue-400" : "text-blue-400/30"} `} />
        <AiFillStar className={`${author_details.rating > 8 ? "text-blue-400" : "text-blue-400/30"} `} />
        <AiFillStar className={`${author_details.rating > 10 ? "text-blue-400" : "text-blue-400/30"} `} />
      </div>
      <div className={`max-h-44 small-scroll ${isReadMore ? "overflow-scroll" : "overflow-hidden"}`}>{textContent}</div>
      <div className="mt-1">
        <button className="text-blue-400 hover:underline underline-offset-2" onClick={handleReadMore}>
          {isReadMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="mt-3 flex justify-between">
        <span className="text-gray-500">
          by <span className="font-semibold text-white">{author}</span>
        </span>
        <span className="text-gray-500">{getReadableDate(updated_at)}</span>
      </div>
    </article>
  );
};

const ReviewList = ({ movieId, type }: { movieId: number; type: "movie" | "tv" }) => {
  const { data, isLoading, error } = useGetReviews(movieId?.toString(), 1, type);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">Reviews</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {isLoading ? (
          <RectangleSkeleton totalOfSkeleton={2} />
        ) : (
          <>
            {data?.total_results === 0 ? (
              <p className="text-gray-500">There are no reviews yet</p>
            ) : (
              <>
                {data?.results.map((review) => (
                  <ReviewCard key={review.id + review.created_at} review={review} />
                ))}
              </>
            )}

            {data?.total_results! > 0 && (
              <div className="flex-center">
                <Link href={`/${type}/${movieId}/reviews`} className="flex-center group space-x-2 hover:text-blue-500 duration-300">
                  <span>View all reviews</span>
                  <span className="inline-block group-hover:translate-x-3 duration-75">
                    <MdKeyboardArrowRight />
                  </span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ReviewList;
