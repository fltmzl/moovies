"use client";

import { fetcher } from "@/utils";
import useSWR from "swr";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { formatToDollar } from "@/utils/common";

const DetailCard = ({ label, value, children }: { label: string; value?: any; children?: React.ReactNode }) => {
  return (
    <div className="space-y-1">
      <h3 className="text-sm text-blue-400">{label}</h3>
      <p>{value}</p>
      {children}
    </div>
  );
};

const DetailList = ({ movieDetail, type }: { movieDetail: MovieDetail; type: "movie" | "tv" }) => {
  const { data, isLoading, error } = useSWR<ExternalIDs>(`/${type}/${movieDetail.id}/external_ids`, fetcher);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-5 pb-3 border-b border-slate-400/10">Details</h2>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-2">
          <div className="space-y-6">
            <DetailCard label="Status" value={movieDetail.status} />
            <DetailCard label="Original Language" value={movieDetail.spoken_languages[0].name} />
            <DetailCard label="Budget" value={formatToDollar(movieDetail.budget)} />
            <DetailCard label="Revenue" value={formatToDollar(movieDetail.revenue)} />
          </div>
          <div className="space-y-6">
            <DetailCard label="Social">
              <div className="flex gap-4">
                <a href={`https://www.facebook.com/${data?.facebook_id}`} title="Visit Facebook" target="_blank" rel="noreferrer">
                  <FaFacebookSquare className="w-5 h-5 hover:text-blue-600 transtion-all duration-300" />
                </a>
                <a href={`https://twitter.com/${data?.twitter_id}`} title="Visit Twitter" target="_blank" rel="noreferrer">
                  <GrTwitter className="w-5 h-5 hover:text-blue-400 transtion-all duration-300" />
                </a>
                <a href={`https://instagram.com/${data?.instagram_id}`} title="Visit Instagram" target="_blank" rel="noreferrer">
                  <GrInstagram className="w-5 h-5 hover:text-pink-500 transtion-all duration-300" />
                </a>
              </div>
            </DetailCard>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailList;
