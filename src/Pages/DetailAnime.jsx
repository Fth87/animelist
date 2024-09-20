import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SkeletonDetail from '../components/SkeletonDetail';
import DetailAnimeTrailer from '../components/DetailAnimeTrailer';
import DetailAnimeImage from '../components/DetailAnimeImage';

const DetailAnime = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getAnime = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${params.mal_id}`).then((res) => res.json());
    setAnime(response.data);
    setIsLoading(false);
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
        {!isLoading ? (
          <>
            <div className="px-5 grid grid-cols-12 justify-center md:gap-10">
              <DetailAnimeTrailer anime={anime} />
              <DetailAnimeImage anime={anime} />
            </div>
          </>
        ) : (
          <SkeletonDetail />
        )}
      </div>
    </div>
  );
};

export default DetailAnime;
