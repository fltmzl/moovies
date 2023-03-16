const SmallCardSkeleton = () => {
  const skeletons = Array.from({ length: 13 }, (_, index) => <div key={index} className="min-w-[150px] aspect-[9/13] rounded-2xl px-5 bg-gray-500/30 animate-pulse"></div>);

  return <>{skeletons}</>;
  return <div className="card-movie-container">{skeletons}</div>;
};
export default SmallCardSkeleton;
