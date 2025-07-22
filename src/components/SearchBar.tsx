import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Service } from "@/data/services";

interface SearchBarProps {
  services: Service[];
  onSearch: (results: Service[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ services, onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const trimmed = query.trim().toLowerCase();

      if (!trimmed) {
        onSearch([]);
        return;
      }

      const results = services.filter(
        ({ name, description }) =>
          name.toLowerCase().includes(trimmed) ||
          description.toLowerCase().includes(trimmed)
      );

      onSearch(results);
    }, 300); // debounce delay

    return () => clearTimeout(timeout);
  }, [query, services, onSearch]);

  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />
      <Input
        type="text"
        aria-label="Search services"
        placeholder="Search for services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-4 pl-12 bg-[#121212] text-white border border-gray-700 placeholder:text-gray-500 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;
