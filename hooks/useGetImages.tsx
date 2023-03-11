"use client";

import { fetcher } from "@/utils";
import useSWR from "swr";

const useGetImages = (movieId: string) => {
  const { data, error, isLoading } = useSWR<Images>(`/movie/${movieId}/images`, fetcher);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetImages;
