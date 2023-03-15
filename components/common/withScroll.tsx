import { scrollElement } from "@/utils/common";
import { useRef, RefObject } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface WithScrollProps {
  swiper?: RefObject<HTMLDivElement>;
  sectionTitle: string;
  apiEndpoint: string;
  loadingState: React.ReactNode;
  keyPrefix: string;
  cardSize?: "sm" | "lg";
  type: "movie" | "tv";
}

const withScroll = <P extends WithScrollProps>(Component: React.ComponentType<P>) => {
  const WithScroll = (props: P) => {
    const swiper = useRef<HTMLDivElement>(null);

    return (
      <>
        <div className="mb-4 flex-y-center justify-between">
          <h1 className="">{props.sectionTitle}</h1>

          <div className="flex gap-3">
            <button onClick={() => scrollElement("left", swiper)} className="bg-white text-slate-900 p-2 rounded-full">
              <FiChevronLeft />
            </button>
            <button onClick={() => scrollElement("right", swiper)} className="bg-white text-slate-900 p-2 rounded-full">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <Component {...props} swiper={swiper} />
      </>
    );
  };

  return WithScroll;
};

export default withScroll;
