import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const MenuFilter = ({ selectedFilter, filters, setSelectedFilter, name }) => {
  return (
    <Menu>
      <MenuButton className="bg-slate-900 inline-flex items-center  gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-slate-900 data-[focus]:outline-1 data-[focus]:outline-white capitalize mx-1 my-1">
        {!selectedFilter.label ? name : selectedFilter.label}
        <ChevronDownIcon className="size-4 fill-white/60" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className=" origin-top-right rounded-xl border border-white/5 bg-slate-900 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {filters.map((filter, index) => (
          <MenuItem key={index}>
            <button onClick={() => setSelectedFilter(filter)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 capitalize">
              {filter.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default MenuFilter;
