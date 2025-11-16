import React from 'react';
import { SearchIcon } from './Icons';

const FilterBar = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortChange,
}) => {
  const baseInputClass =
    "w-full py-2 border-transparent text-black dark:text-white rounded-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow";

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={onSearchChange}
            className={`${baseInputClass} pl-10 pr-4`}
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={onCategoryChange}
          className={`${baseInputClass} px-4`}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Sort Order */}
        <select
          value={sortOrder}
          onChange={onSortChange}
          className={`${baseInputClass} px-4`}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
