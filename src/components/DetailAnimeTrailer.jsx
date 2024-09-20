import { Link } from 'react-router-dom';

const DetailAnimeTrailer = ({ anime }) => {
  return (
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
  );
};

export default DetailAnimeTrailer;
