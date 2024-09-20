const SkeletonDetail = () => {
  return (
    <div className=" grid grid-cols-12 justify-center md:gap-10">
      <div className="col-span-12 md:col-span-8 pt-12 md:pt-10 ">
        <div className="flex text-sm mb-5">
          <div className="bg-gray-500 animate-pulse w-80 h-12"></div>
        </div>

        <div className="w-full h-[250px] sm:h-[350px] md:h-[280px] lg:h-[400px] xl:h-[500px] 2xl:h-[560px] bg-gray-500 animate-pulse"></div>

        <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>

        <div className="flex content-center mb-5">
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </div>
        <div className="flex content-center mb-5">
          <div className="bg-gray-500 animate-pulse mt-3 w-5/6 h-[100px]"></div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 px-6 text-slate-100 text-sm bg-slate-100/10 pt-10  mt-4 md:mt-0 pb-10">
        <div className="w-full object-cover h-[350px] sm:h-[500px] md:h-[250px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] mb-3 bg-gray-500 animate-pulse" />
        <p>
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </p>
        <p>
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </p>
        <p>
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </p>
        <p>
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </p>
        <p>
          <div className="bg-gray-500 animate-pulse mt-3 w-80 h-10"></div>
        </p>
      </div>
    </div>
  );
};

export default SkeletonDetail;
