import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import MenuFilter from '../components/MenuFilter';
import AnimeCard from '../components/AnimeCard';
import SkeletonCard from '../components/SkeletonCard';

const HomePage = () => {
  const [animes, setAnime] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState({ label: '', value: '' });
  const [selectedRating, setSelectedRating] = useState({ label: '', value: '' });
  const [selectedSort, setSelectedSort] = useState({ label: '', value: 'popularity' });
  const [page, setPage] = useState(1);
  const [maxpage, setMaxPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getAnime = async () => {
    setIsLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&type=${selectedType.value}&rating=${selectedRating.value}&order_by=${selectedSort.value}&page=${page}&limit=10`).then((res) => res.json());
    setAnime(response.data);
    setMaxPage(Math.round(response.pagination.items.total / response.pagination.items.per_page));
    setIsLoading(false);
  };

  useEffect(() => {
    getAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, selectedRating, selectedSort, page]);

  const types = [
    { label: 'tv', value: 'tv' },
    { label: 'movie', value: 'movie' },
    { label: 'ova', value: 'ova' },
    { label: 'special', value: 'special' },
    { label: 'ona', value: 'ona' },
    { label: 'music', value: 'music' },
    { label: 'cm', value: 'cm' },
    { label: 'pv', value: 'pv' },
    { label: 'Tv Special', value: 'tv_special' },
  ];

  const ratings = [
    { label: 'g', value: 'g' },
    { label: 'pg', value: 'pg' },
    { label: 'pg13', value: 'pg13' },
    { label: 'r17', value: 'r17' },
    { label: 'r', value: 'r' },
    { label: 'rx', value: 'rx' },
  ];
  const sorts = [
    { label: 'mal id', value: 'mal_id' },
    { label: 'title', value: 'title' },
    { label: 'start date', value: 'start_date' },
    { label: 'end date', value: 'end_date' },
    { label: 'episodes', value: 'episodes' },
    { label: 'score', value: 'score' },
    { label: 'scored by', value: 'scored_by' },
    { label: 'rank', value: 'rank' },
    { label: 'popularity', value: 'popularity' },
    { label: 'members', value: 'members' },
    { label: 'favorites', value: 'favorites' },
  ];

  return (
    <div className="home flex flex-col min-h-svh">
      <div className="container mx-auto mb-20 flex-1">
        <Link to={'https://instagram.com/fatihfwz'}>
          <h1 className="text-2xl  md:text-4xl font-bold text-center mb-3 text-white pt-5 ">Anime List By Fatih</h1>
        </Link>
        <div className="ml-3 px-5 mb-3 md:ml-0 sm:flex justify-between">
          <Search setSearch={setSearch} getAnime={getAnime} />
          <div className="flex content-center justify-end">
            <div className="my-auto">
              <MenuFilter selectedFilter={selectedType} filters={types} setSelectedFilter={setSelectedType} name="Type" />
              <MenuFilter selectedFilter={selectedRating} filters={ratings} setSelectedFilter={setSelectedRating} name="Rating" />
              <MenuFilter selectedFilter={selectedSort} filters={sorts} setSelectedFilter={setSelectedSort} name="Sort" />
            </div>
          </div>
        </div>
        <div className="px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-4 ">
          {animes?.length > 0 && !isLoading ? (
            <>
              {animes.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
            </>
          ) : (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
        </div>
      </div>

      <Pagination page={page} setPage={setPage} maxPage={maxpage} />
    </div>
  );
};

export default HomePage;
