import React from 'react';

function DriveDetailsSkeleton() {
  return (
    <div className="p-8 flex flex-col md:flex-row animate-pulse">
      {/* Left section */}
      <div className="md:w-1/3 flex flex-col items-center block text-center md:text-left">
        <div className='relative block overflow-hidden rounded-lg border border-gray-300 w-full'>
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-300 to-gray-500"></span>
          <div className="h-40 w-full bg-gray-300 rounded-lg"></div>
        </div>

        <div className="mt-4 max-w-sm h-6 bg-gray-300 rounded"></div>
        <div className="text-gray-600 mt-4 w-full">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-2/4 mx-auto mt-2"></div>
        </div>
        <div className="mt-4 w-full">
          <div className="font-semibold h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mt-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mt-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mt-2"></div>
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-12 right-12 flex space-x-4">
        <div className="bg-gray-300 h-10 w-24 rounded"></div>
        <div className="bg-gray-300 h-10 w-24 rounded"></div>
      </div>
    </div>
  );
}

export default DriveDetailsSkeleton;
