import { getUpcomingDrives } from './drivesAPI';
import React, { useEffect, useState } from 'react';
import { Card } from './Card';

const Upcoming = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      // Simulate fetch time
      setTimeout(() => {
        setData(getUpcomingDrives());
        setLoading(false);
      }, 1000);
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Current Placement Drives</h2>
            {loading ? (
        <div className="animate-pulse">
          <div className="h-20 bg-gray-400 dark:bg-gray-700 rounded-lg"></div>
        </div>
      ) : (
        data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map(drive => (
                  <div key={drive.id} className="opacity-0 transition-opacity duration-500 ease-in-out delay-100 opacity-100">
                  <Card {...drive} />
                </div>
              ))}
          </div>
      ) : (
          <p>No Upcoming placement drives available.</p>
      )
      )}
            
        </div>
    );
};

export default Upcoming;
