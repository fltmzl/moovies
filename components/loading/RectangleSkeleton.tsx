const RectangleSkeleton = ({ totalOfSkeleton = 3 }: { totalOfSkeleton?: number }) => {
  const skeletons = Array.from({ length: totalOfSkeleton }, (_, index) => <div key={index} className="w-full aspect-video bg-gray-500/30 animate-pulse rounded-2xl"></div>);

  return <>{skeletons}</>;
};

export default RectangleSkeleton;
