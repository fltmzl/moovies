"use client";

import Spinner from "@/components/common/Spinner";
import useGetReviews from "@/hooks/useGetReviews";
import { ReviewCard } from "../../ReviewList";
import { useState } from "react";

const ReviewList = ({ movieId, pageIndex }: { movieId: string; pageIndex: number }) => {
  const { data: reviews, isLoading, error } = useGetReviews(movieId, pageIndex);
  console.log(reviews);

  if (error) return <div>{error}</div>;

  return (
    <>
      {isLoading ? (
        <div className="w-full h-40 flex-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          {reviews?.results.map((review) => (
            <ReviewCard key={`${review.id}${review.url}`} review={review} />
          ))}
        </div>
      )}
    </>
  );
};

const Reviews = ({ params }: { params: { id: string } }) => {
  const { data: reviews, isLoading, error } = useGetReviews(params.id, 1);

  const [page, setPage] = useState(1);

  const pages = [];
  for (let i = 1; i <= page; i++) {
    pages.push(<ReviewList movieId={params.id} pageIndex={i} key={i} />);
  }

  return (
    <section>
      <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Reviews</h2>

      {pages}
      {page < reviews?.total_pages! && (
        <div className="flex-x-center mt-10">
          <button onClick={() => setPage(page + 1)} className="btn-pri">
            Load More
          </button>
        </div>
      )}

      {reviews?.results?.length! <= 0 && (
        <div className="w-full h-40 flex-center">
          <p>There are no reviews yet</p>
        </div>
      )}
    </section>
  );
};

export default Reviews;
