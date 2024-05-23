import React from 'react';

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default Loader;
