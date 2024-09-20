const SkeletonCard = () => {
  return (
    <div className="p-6 animate-pulse">
      <div className="bg-slate-300 w-full h-52 "></div>
      <div className="bg-slate-300 w-full h-5 mt-3 "></div>
      <div className="bg-slate-300 w-full h-12 mt-3 "></div>
      <div className="bg-slate-300 w-14 h-5 mt-3 "></div>
    </div>
  );
};

export default SkeletonCard;
