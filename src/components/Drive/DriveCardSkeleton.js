import React from 'react';

function DriveCardSkeleton() {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-gray-800 animate-pulse">
      <div className="h-6 w-24 bg-gray-600 mb-4 rounded"></div> {/* Company Name Skeleton */}
      <div className="h-5 w-16 bg-gray-600 mb-4 rounded"></div> {/* Package Skeleton */}
      
      <div className="h-20 w-20 bg-gray-600 mx-auto mb-4 rounded-full"></div> {/* Logo Skeleton */}

      <div className="h-4 bg-gray-600 mb-2 rounded w-3/4 mx-auto"></div> {/* Designation Skeleton */}
      
      <div className="flex justify-between mt-4">
        <div className="flex-1">
          <div className="h-4 bg-gray-600 rounded mb-2 w-3/4"></div> {/* Date Skeleton */}
          <div className="h-4 bg-gray-600 rounded w-3/4"></div> {/* Location Skeleton */}
        </div>
      </div>
      
      <div className="mt-4 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded"></div> {/* Bottom Gradient */}
    </div>
  );
}

export default DriveCardSkeleton;
