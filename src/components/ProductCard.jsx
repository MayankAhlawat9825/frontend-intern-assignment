import React from 'react';
import { HeartIcon } from './Icons';

const ProductCard = ({
  product,
  onCardClick,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <div
      onClick={() => onCardClick(product)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer group transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <div className="relative">
        <div className="w-full h-56 bg-white flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-red-100 text-red-500 scale-110'
              : 'bg-gray-200/50 text-gray-600 hover:bg-red-100 hover:text-red-500'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon className="h-6 w-6" solid={isFavorite} />
        </button>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 capitalize">
          {product.category}
        </p>

        <h3
          className="text-md font-semibold text-gray-800 dark:text-white truncate"
          title={product.title}
        >
          {product.title}
        </h3>

        <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
