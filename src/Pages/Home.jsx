import { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

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

  const SkeletonLoading = () => {
    return (
      <div className="p-6 animate-pulse">
        <div className="bg-slate-300 w-full h-52 "></div>
        <div className="bg-slate-300 w-full h-5 mt-3 "></div>
        <div className="bg-slate-300 w-full h-12 mt-3 "></div>
        <div className="bg-slate-300 w-14 h-5 mt-3 "></div>
      </div>
    );
  };

  return (
    <div className="home flex flex-col min-h-svh">
      <div className="container mx-auto mb-20 flex-1">
        <Link to={'https://instagram.com/fatihfwz'}>
          <h1 className="text-2xl  md:text-4xl font-bold text-center mb-3 text-white pt-5 ">Anime List By Fatih</h1>
        </Link>
        <div className="ml-3 px-5 mb-3 md:ml-0 sm:flex justify-between">
          <div>
            <input onInput={(e) => setSearch(e.currentTarget.value)} className="py-2 px-3  border-slate-900 border-l-2 border-t-2 border-b-2 rounded-l my-6 text-xs md:text-lg lg:text-xl" placeholder="Search Anime" type="text" />
            <button onClick={getAnime} className="py-2 px-3 bg-slate-900 border-2 border-slate-900 text-white rounded-r hover:bg-slate-700 hover:border-slate-700 active:bg-slate-600 text-xs md:text-lg lg:text-xl">
              Search
            </button>
          </div>
          <div className="flex content-center justify-end">
            <div className="my-auto">
              <Menu>
                <MenuButton className="bg-slate-900 inline-flex items-center  gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-slate-900 data-[focus]:outline-1 data-[focus]:outline-white capitalize mx-1 my-1">
                  {!selectedType.label ? 'Type' : selectedType.label}
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className=" origin-top-right rounded-xl border border-white/5 bg-slate-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {types.map((type, index) => (
                    <MenuItem key={index}>
                      <button onClick={() => setSelectedType(type)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 capitalize">
                        {type.label}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              <Menu>
                <MenuButton className="bg-slate-900 inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-slate-900 data-[focus]:outline-1 data-[focus]:outline-white capitalize mx-1  my-1">
                  {!selectedRating.label ? 'rating' : selectedRating.label}
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>
                <MenuItems
                  transition
                  anchor="bottom end"
                  className="origin-top-right rounded-xl border border-white/5 bg-slate-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {ratings.map((type) => (
                    <MenuItem key={type.value}>
                      <button onClick={() => setSelectedRating(type)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 capitalize">
                        {type.label}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              <Menu>
                <MenuButton className="bg-slate-900 inline-flex items-center gap-2 mx-1 my-1 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-slate-900 data-[focus]:outline-1 data-[focus]:outline-white">
                  {!selectedSort.label ? 'Sort By' : selectedSort.label}
                  <ChevronDownIcon className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className=" origin-top-right rounded-xl border border-white/5 bg-slate-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {sorts.map((type) => (
                    <MenuItem key={type.value}>
                      <button onClick={() => setSelectedSort(type)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 capitalize">
                        {type.label}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        <div className="px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-4 ">
          {animes?.length > 0 && !isLoading ? (
            <>
              {animes.map((anime) => (
                <div key={anime.mal_id} className="shadow ">
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
              ))}
            </>
          ) : (
            <>
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
            </>
          )}
        </div>
      </div>

      <Pagination page={page} setPage={setPage} maxPage={maxpage} />
    </div>
  );
};

export default HomePage;
