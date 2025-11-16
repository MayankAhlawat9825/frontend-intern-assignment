import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';
import Logo from './Logo';

const Header = ({ darkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md'
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800"
            aria-label="Toggle theme"
          >
            {/* darkMode is boolean → true = dark */}
            {darkMode ? (
              <SunIcon className="h-6 w-6" /> // in dark mode → show sun
            ) : (
              <MoonIcon className="h-6 w-6" /> // in light mode → show moon
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
