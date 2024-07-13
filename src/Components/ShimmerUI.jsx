import React from 'react';

const Shimmer = () => {
  const shimmerCard = (
    <div className="flex-none w-64 p-4 border border-gray-300 rounded-lg bg-white shadow-lg transition-transform duration-300 animate-pulse">
      <div className="w-full h-80 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {Array(6).fill().map((_, index) => (
        <React.Fragment key={index}>{shimmerCard}</React.Fragment>
      ))}
    </div>
  );
};

export default Shimmer;
