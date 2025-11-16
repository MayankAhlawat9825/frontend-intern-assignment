import React from 'react';

export const SunIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M11.984 1a1 1 0 0 0-.984 1v2.5a1 1 0 1 0 2 0V2a1 1 0 0 0-1.016-1Zm-7.29 3.05a1 1 0 0 0-.707 1.707l1.77 1.77a1 1 0 1 0 1.414-1.415l-1.77-1.77a1 1 0 0 0-.707-.292Zm14.612 0a1 1 0 0 0-.707.292l-1.77 1.77a1 1 0 1 0 1.415 1.415l1.77-1.77a1 1 0 0 0-.708-1.707ZM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5Zm-9 4a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H3Zm15.5 1a1 1 0 0 0 1 1H22a1 1 0 1 0 0-2h-2.5a1 1 0 0 0-1 1Zm-11.4 5.07a1 1 0 0 0-.707.292l-1.77 1.77a1 1 0 1 0 1.415 1.415l1.77-1.77a1 1 0 0 0-.708-1.707Zm9.8 0a1 1 0 0 0-.707 1.707l1.77 1.77a1 1 0 1 0 1.415-1.415l-1.77-1.77a1 1 0 0 0-.708-.292ZM11 20.5v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 1 0-2 0Z" />
  </svg>
);

export const MoonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.833 2.067-7.17 5.163-9.005a.75.75 0 0 1 .819.162Z"
      clipRule="evenodd"
    />
  </svg>
);

export const HeartIcon = ({ className, solid = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={solid ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

export const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

export const XMarkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
