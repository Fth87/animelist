import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const DetailAnime = () => {
  let params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const getAnime = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${params.mal_id}`).then((res) => res.json());
    setAnime(response.data);
    setIsLoading(false);
    // console.log(response);
  };

  useEffect(() => {
    getAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [anime, setAnime] = useState([]);

  return (
    <div className=" w-full h-full ">
      <div className=" bg-cover bg-center background-anime w-full h-full z-10 opacity-50 grayscale blur-lg" style={{ backgroundImage: `url(${anime?.images?.webp.large_image_url})` }}></div>

      <div className="container mx-auto z-50 relative  ">
        {/* <Link to={'/'}>
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mb-3 text-white pt-5 ">Anime List</h1>
      </Link> */}

        {!isLoading ? (
          <>
            <div className="px-5 grid grid-cols-12 justify-center md:gap-10">
              <div className="col-span-12 md:col-span-8 pt-12 md:pt-10 ">
                <div className="flex text-sm mb-5">
                  <Link to={'/'} className="text-slate-200 font-light text-sm">
                    Home
                  </Link>
                  <div className="text-gray-400 mx-2 font-light text-sm">{'>'}</div>
                  <Link className="text-gray-400 font-light text-sm">{anime.title}</Link>
                </div>

                {anime.trailer.youtube_id ? (
                  <iframe
                    className="w-full h-[250px] sm:h-[350px] md:h-[280px] lg:h-[400px] xl:h-[500px] 2xl:h-[560px]"
                    src={anime.trailer.embed_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="text-2xl text-white font-black">no Trailer</div>
                )}
                <h2 className="text-white font-bold text-2xl  mt-3">{anime.title}</h2>

                <div className="flex content-center mb-5">
                  <div>
                    <p className="text-white font-light text-sm m-0 p-0">{anime.type}</p>
                  </div>

                  <span className="w-1 h-1 rounded bg-slate-200 my-auto mx-2"></span>
                  <div>
                    <p className="text-white font-light text-sm m-0 p-0">{anime.duration}</p>
                  </div>
                </div>

                <p className="text-slate-100 mb-3 text-sm">{anime.background}</p>
                <p className="text-slate-100 text-sm">
                  {' '}
                  <span className="font-bol d">Synopsis :</span> {anime.synopsis}
                </p>
              </div>
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
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default DetailAnime;
