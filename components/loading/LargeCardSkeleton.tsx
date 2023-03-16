const LargeCardSkeleton = () => {
  const skeletons = Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="flex-y-center min-w-[660px] aspect-[16/7] rounded-2xl px-5 bg-gray-500/20 animate-pulse ">
      <div className="basis-2/5">
        <div className="w-[200px] h-[250px] rounded-2xl bg-gray-500/30"></div>
      </div>
      <div className="basis-full"></div>
    </div>
  ));

  return <>{skeletons}</>;
  return <div className="card-movie-container">{skeletons}</div>;
};
export default LargeCardSkeleton;
