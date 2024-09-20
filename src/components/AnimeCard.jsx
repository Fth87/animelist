import { Link } from 'react-router-dom';
const AnimeCard = ({ key, anime }) => {
  return (
    <div key={key} className="shadow ">
      <Link to={`/detail/${anime.mal_id}`} className="group transition-all ease-in-out duration-700 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" size-16 text-white absolute z-50 top-1/2 left-1/2 hidden group-hover:block  -translate-x-1/2 -translate-y-1/2">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
        <div className="h-[250px] sm:h-[250px] md:h-[250px] lg:h-[270px] xl:h-[300px] 2xl:h-[320px] mb-3 overflow-hidden">
          <img className="group-hover:blur-sm w-full object-cover h-full group-hover:scale-105" src={anime.images.webp.large_image_url} alt="" />
        </div>
      </Link>
      {/* <img className="object-cover  w-full rounded max-h-[400px] sm:max-h-[450px]" src={anime.images.webp.large_image_url} alt="" /> */}
      <h1 className="text-slate-100 transition-all duration-300 hover:text-slate-400 active:text-slate-600 text-sm md:text-lg line-clamp-1">
        <Link to={`/detail/${anime.mal_id}`}>{anime.title} </Link>
      </h1>
      <div className="flex content-center my-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-yellow-400 my-auto mr-1">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>

        <p className="text-blue-50 m-0 p-0 text-xs md:text-sm ">{anime.score}</p>
      </div>
      <p className="line-clamp-3 text-gray-500 text-xs md:text-sm ">{anime.synopsis}</p>

      <div className="mt-5">
        {/* <Link to={`/detail/${anime.mal_id}`} className="px-3 py-1 mt-3 bg-blue-700 rounded text-blue-50 hover:bg-blue-500 active:bg-blue-400 transition-all ease-in-out text-xs md:text-lg lg:text-xl">
      Detail
    </Link> */}
      </div>
    </div>
  );
};
export default AnimeCard;
