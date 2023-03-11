"use client";

import { fetchWithPagination } from "@/utils";
import useSWR from "swr";

const useGetReviews = (movieId: string, page: number) => {
  const result = useSWR<Reviews>({ apiPath: `/movie/${movieId}/reviews`, page }, fetchWithPagination);

  return result;
};

export default useGetReviews;
