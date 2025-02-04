import React from 'react';

const Star = ({ filled }) => (
    <svg
    className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-400'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      className={`${filled ? 'stroke-yellow-500' : 'stroke-yellow-500'}`}
    />
  </svg>
);

export default Star;
