import React, { useEffect, useState } from "react";
import { Card } from "./DriveCard";
import { useNavigate } from 'react-router-dom';
import DriveCardSkeleton from "./DriveCardSkeleton";

const DriveList = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // Simulate fetch time
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleonClick = (drive) => {
    navigate(`/app/drive-details/${drive.id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">DriveList Placement Drives</h2>

      {loading ? (
        // Render skeletons while loading
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Show skeletons for each drive card */}
          {[1, 2, 3].map((_, index) => (
            <DriveCardSkeleton key={index} />
          ))}
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((drive) => (
            <div
              key={drive.id}
              className="opacity-0 transition-opacity duration-500 ease-in-out delay-100 opacity-100"
            >
              <Card {...drive} onClick={() => handleonClick(drive)} />
            </div>
          ))}
        </div>
      ) : (
        <p>No DriveList placement drives available.</p>
      )}
    </div>
  );
};

export default DriveList;
