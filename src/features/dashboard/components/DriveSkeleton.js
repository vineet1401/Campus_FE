// components/DriveSkeleton.js
import React from 'react';

const DriveSkeleton = () => {
  return (
    <div className="relative block shadow overflow-hidden rounded-lg border border-gray-400 dark:border-gray-700 p-4 sm:p-6 lg:p-8 shadow-lg dark:shadow-gray-700 animate-pulse">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></span>
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-700 w-20 h-20 rounded-lg">
          <div className="h-12 w-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        <div className="flex-1 mt-4 sm:mt-0">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-md mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-1/2"></div>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-1/3"></div>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex-1 flex flex-col-reverse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-full"></div>
          <dd className="text-xs text-gray-500 mt-1">Date</dd>
        </div>

        <div className="flex-1 flex flex-col-reverse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-md w-full"></div>
          <dd className="text-xs text-gray-500 mt-1">Location</dd>
        </div>
      </dl>
    </div>
  );
};

export default DriveSkeleton;
