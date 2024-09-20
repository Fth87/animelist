// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
// import React  from 'react';
// const items = [
//   { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
// ];

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
      {/* <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div> */}
    </div>
  );
}
