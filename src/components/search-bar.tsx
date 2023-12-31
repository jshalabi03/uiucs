import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputValue?: string;
  defaultValue?: string;
}

export function SearchBar({
  placeholder = "Search...",
  onChange,
  inputValue,
  defaultValue,
}: SearchBarProps) {
  return (
    <>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-4 h-4" />
        </div>
        <Input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={inputValue}
          onChange={onChange}
          defaultValue={defaultValue}
          required
        />
      </div>
    </>
  );
}
