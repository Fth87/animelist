const DetailAnimeImage = ({ anime }) => {
  return (
    <div className="col-span-12 md:col-span-4 px-6 text-slate-100 text-sm bg-slate-100/10 pt-10  mt-4 md:mt-0 pb-32">
      <img className="w-full object-cover h-[350px] sm:h-[500px] md:h-[250px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] mb-3" src={anime.images.webp.large_image_url} alt="" />
      <p>
        <span className="font-bold"> Title : </span> {anime.title}
      </p>
      <p>
        <span className="font-bold">Source : </span>
        {anime.source}
      </p>
      <p>
        <span className="font-bold">Episodes : </span>
        {anime.episodes}
      </p>
      <p>
        <span className="font-bold">Status : </span>
        {anime.status}
      </p>
      <p>
        <span className="font-bold">Aired : </span>
        {anime.aired.string}
      </p>

      <p>
        <span className="font-bold">Rating : </span>
        {anime.rating}
      </p>
      <div className="flex content-center my-1">
        <p className="">
          <span className="font-bold">Score : </span>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 text-yellow-400 my-auto mr-1">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>

        <p className="text-blue-50 m-0 p-0 ">{anime.score}</p>
      </div>
      <p className="">
        <span className="font-bold">Rank : </span>
        {anime.rank}
      </p>
      <p className="">
        <span className="font-bold">season : </span>
        {anime.season}
      </p>
      <p className="">
        <span className="font-bold">Broadcast : </span>

        {anime.broadcast.string}
      </p>
      <p className=" flex">
        <span className="font-bold">Studio :</span>
        {anime.studios.map((studio) => (
          <a className="text-blue-400 mx-1 ml-2" key={studio.mal_id} href={studio.url}>
            {` ${studio.name}`}
          </a>
        ))}
      </p>
      <p className=" flex my-2">
        <span className="font-bold">Genres :</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
          {anime.genres.map((genre) => (
            <div key={genre.mal_id} className="block">
              <p className="mx-1 mb-2 text-center px-2 py-0.5 border border-slate-100/900 rounded-xl font-normal min-w-30" key={genre.mal_id}>
                {genre.name}
              </p>
            </div>
          ))}
        </div>
      </p>
    </div>
  );
};
export default DetailAnimeImage;
