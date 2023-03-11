"use client";

import { useState } from "react";
import { CastCard } from "../../CastList";

interface Props {
  credits: Credits;
  creditsType: "cast" | "crew";
}

const CreditCardContainer = ({ credits, creditsType }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="relative">
      <div className={`grid grid-cols-12 gap-7 duration-300 overflow-hidden ${showMore ? "h-full" : "max-h-[400px]"}`}>
        {creditsType === "cast" && (
          <>
            {credits?.cast?.map((castItem) => (
              <CastCard key={`cast-${castItem.id}`} cast={castItem} />
            ))}
          </>
        )}
        {creditsType === "crew" && (
          <>
            {credits?.crew?.map((crewItem) => (
              <CastCard key={`crew-${crewItem.id}`} cast={crewItem} />
            ))}
          </>
        )}
      </div>
      <div className="w-full py-4 bg-gradient-to-b from-slate-900/10 via-slate-900/95 to-slate-900 flex-center">
        <button className="py-2 px-4 rounded-xl border border-gray-300 text-xs" onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default CreditCardContainer;
