import React from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

const ITEMS_PER_PAGE = 6;

const ProductGrid = ({
  products,
  loading,
  error,
  onCardClick,
  favorites,
  onToggleFavorite,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (error) {
    return (
      <div className="text-center text-red-500 dark:text-red-400 py-10">
        <h2 className="text-xl font-semibold">Oops! Something went wrong.</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        <h2 className="text-xl font-semibold">No products found.</h2>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  const PageButton = ({ page, children }) => {
    const isCurrent = currentPage === page;
    return (
      <button
        onClick={() => onPageChange(page)}
        disabled={isCurrent}
        className={`w-10 h-10 rounded-full transition-colors duration-200 ${
          isCurrent
            ? 'bg-purple-600 text-white font-bold shadow-md'
            : 'bg-white dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600'
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCardClick={onCardClick}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-gray-700 dark:text-gray-200 px-4">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
