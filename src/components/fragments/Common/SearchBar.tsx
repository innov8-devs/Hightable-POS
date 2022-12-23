import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div className="w-full border rounded-lg border-[#00426971] h-[56px] mb-4 p-4 flex items-center">
      <BiSearch size={20} className="mr-1" />
      <p className="mr-1">Search</p>
      <input
        type="text"
        className="w-full outline-none border-none focus:outline-none"
        placeholder="i.e your choice menu"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
