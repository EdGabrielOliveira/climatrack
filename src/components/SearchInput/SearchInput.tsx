// src/components/SearchInput.tsx
import React, { forwardRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps {
  onSearch: () => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, onKeyPress }, ref) => {
    return (
      <div className="flex flex-row justify-center">
        <input
          ref={ref}
          type="search"
          placeholder="Pesquisar..."
          onKeyDown={onKeyPress}
          className="w-[18rem] h-10 rounded-lg pl-2 pr-2 text-gray-600 focus:border-green-600 placeholder:font-normal focus:outline-none rounded-tr-none rounded-br-none"
        />
        <button
          onClick={onSearch}
          className="text-center justify-center items-center text-2xl bg-white p-2 rounded-lg text-gray-600 hover:bg-slate-200 rounded-bl-none rounded-tl-none"
        >
          <IoSearchOutline />
        </button>
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
