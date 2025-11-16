import React, { useEffect, useState } from 'react';
import { StarIcon, XMarkIcon } from './Icons';

const ProductModal = ({ product, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!product) return null;

  const modalAnimation = isClosing
    ? 'animate-fade-out-scale-down'
    : 'animate-fade-in-scale-up';

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-opacity-60 z-40 flex justify-center items-center p-4"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <style>{`
        @keyframes fadeInScaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale-up { animation: fadeInScaleUp 0.3s ease-out forwards; }

        @keyframes fadeOutScaleDown {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fade-out-scale-down { animation: fadeOutScaleDown 0.3s ease-in forwards; }
      `}</style>

      <div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row ${modalAnimation}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-800 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="md:w-1/2 p-6 flex-shrink-0 bg-white rounded-l-lg flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
            style={{ maxHeight: '400px' }}
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 capitalize">
            {product.category}
          </p>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-gray-700 dark:text-gray-300 font-bold">
                {product.rating.rate}
              </span>
            </div>
            <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
            <span className="text-gray-600 dark:text-gray-400">
              {product.rating.count} reviews
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
            {product.description}
          </p>

          <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-4">
            ${product.price.toFixed(2)}
          </div>

          <button className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
