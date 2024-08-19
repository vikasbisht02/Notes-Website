/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center w-32 sm:w-80 px-2 sm:px-4 bg-slate-200 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs sm:text-sm bg-transparent py-2 sm:py-1 outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-lg sm:text-xl text-slate-500 cursor-pointer hover:text-black mr-2 sm:mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-md sm:text-xl text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
