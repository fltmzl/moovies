"use client";

import { fetchWithPagination } from "@/utils";
import useSWR from "swr";

const useGetReviews = (movieId: string, page: number, type: "movie" | "tv") => {
  const result = useSWR<Reviews>({ apiPath: `/${type}/${movieId}/reviews`, page }, fetchWithPagination);

  return result;
};

export default useGetReviews;
