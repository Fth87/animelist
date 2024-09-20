// eslint-disable-next-line react/prop-types
const Search = ({ setSearch, getAnime }) => {
  return (
    <div>
      <input onInput={(e) => setSearch(e.currentTarget.value)} className="py-2 px-3  border-slate-900 border-l-2 border-t-2 border-b-2 rounded-l my-6 text-xs md:text-lg lg:text-xl" placeholder="Search Anime" type="text" />
      <button onClick={getAnime} className="py-2 px-3 bg-slate-900 border-2 border-slate-900 text-white rounded-r hover:bg-slate-700 hover:border-slate-700 active:bg-slate-600 text-xs md:text-lg lg:text-xl">
        Search
      </button>
    </div>
  );
};

export default Search;
