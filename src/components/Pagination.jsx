// eslint-disable-next-line react/prop-types
export default function Pagination({ page, setPage, maxPage }) {
  return (
    <div className="flex items-center justify-between border-t border-slate-950 bg-slate-900 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between ">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          className="relative inline-flex items-center rounded-md border border-slate-950 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:cursor-pointer active:bg-slate-600"
        >
          Previous
        </button>
        <p className="text-white text-xl">{page}</p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page == maxPage}
          className="relative inline-flex items-center rounded-md border border-slate-950 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:cursor-pointer active:bg-slate-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
