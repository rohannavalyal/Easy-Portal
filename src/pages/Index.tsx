import React, { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import ServiceGrid from "@/components/ServiceGrid";
import SearchBar from "@/components/SearchBar";
import { categories, services } from "@/data/services";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState<Service[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleCategoryClick = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setIsSearchActive(false);
      setSearchResults([]);
    }
  };

  const handleSearch = (results: Service[]) => {
    setSearchResults(results);
    setIsSearchActive(results.length > 0);
    if (results.length > 0) {
      setSelectedCategory(null);
    }
  };

  const filteredServices = selectedCategory
    ? services.filter((service) => service.categoryId === selectedCategory)
    : [];

  const selectedCategoryName = selectedCategory
    ? categories.find((category) => category.id === selectedCategory)?.name
    : "";

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-white">
      <header className="bg-[#1e293b] shadow-sm border-b border-[#334155] p-4 flex items-center justify-between">
        <div className="flex items-center h-full">
          <img
            src="/logo_main.svg"
            alt="EasyPortal Logo"
            className="w-20 h-16 object-contain"
          />
          <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#6366f1]">
                EasyPortal
              </h1>
              <p className="hidden md:block text-gray-400">
                Your gateway to all essential online services in one place
              </p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 container mx-auto mt-6 px-4 gap-8 p-7">
        {/* Sidebar: Vertical Categories */}
        <aside className="w-72 flex flex-col gap-2 sticky top-24 self-start border-[#334155] border rounded-3xl rounded-r-none pr-0 bg-[#1e293b] p-7">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
                description={category.description}
                isActive={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center gap-2 cursor-pointer rounded-md border border-[#334155] px-3 py-1 transition-all duration-300 ease-in-out text-sm ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-br from-[#6366f1] to-[#7c3aed] text-white scale-105 font-semibold"
                    : "bg-[#1e293b] hover:bg-[#334155] text-gray-300"
                }`}
              />
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Search Bar */}
          <div className="mb-6 max-w-md">
            <SearchBar services={services} onSearch={handleSearch} />
          </div>

          {/* Content Area */}
          <section className="flex-1 overflow-y-auto">
            {isSearchActive ? (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Search Results
                </h2>
                {searchResults.length > 0 ? (
                  <ServiceGrid services={searchResults} />
                ) : (
                  <p className="text-center text-gray-400">
                    No services found matching your search.
                  </p>
                )}
              </>
            ) : selectedCategory ? (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {selectedCategoryName} Services
                </h2>
                {filteredServices.length > 0 ? (
                  <ServiceGrid services={filteredServices} />
                ) : (
                  <p className="text-center text-gray-400">
                    No services available for this category.
                  </p>
                )}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Popular Services
                </h2>
                <ServiceGrid services={services.slice(0, 8)} title="Trending This Week" />
              </>
            )}
          </section>
        </main>
      </div>

      <footer className="bg-[#1e293b] border-t border-[#334155] py-6 mt-12 text-center text-sm text-gray-400">
        <p>© 2025 EasyPortal. All rights reserved.</p>
        <p className="mt-1">Your one-stop gateway to online services</p>
      </footer>
    </div>
  );
};

export default Index;
