import React from 'react';

function TailwindCSS() {
  return (
    <div className="p-4 bg-purple-100 border border-purple-300 rounded-lg">
      <button className="px-4 py-2 mr-2 text-white transition-colors bg-purple-600 rounded hover:bg-purple-700">
        Tailwind Button
      </button>
      <button className="px-4 py-2 text-white transition-colors bg-pink-500 rounded hover:bg-pink-600">
        Another Button
      </button>
      <p className="mt-2 font-medium text-purple-800">
        Styled with Tailwind CSS utility classes
      </p>
    </div>
  );
}

export default TailwindCSS;