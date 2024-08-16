import React, { useState, useEffect } from 'react';
import { getDrives } from '../../features/dashboard/components/drivesAPI';
import { useNavigate } from 'react-router-dom';
import DriveDetailsSkeleton from './components/DriveDetailsSkeleton';

function Details({ id }) {
  const [loading, setLoading] = useState(true);
  const [drive, setDrive] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    
    const fetchDrives = async () => {
      const drives = await getDrives(); // Fetch all drives
      const selectedDrive = drives.find(drive => drive.id === Number(id)); // Find the drive by ID
      setDrive(selectedDrive);
      setLoading(true);
    // Simulate fetch time
    setTimeout(() => {
      // setData(DriveListDrives());
      setLoading(false);
    }, 1000); // Set loading to false after data is fetched
    };

    fetchDrives();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleApplyClick = () => {
    // Redirect to the apply page or trigger an apply action
    alert("Redirecting to Apply Page");
  };

  if (loading) {
    return <DriveDetailsSkeleton />;
  }

  if (!drive) {
    return <p>Drive not found</p>;
  }

  const isCurrent = drive.status === "Current"; // Check if the drive is current

  return (
    <div className="p-8 flex flex-col md:flex-row">
      {/* Left section */}
      <div className="md:w-1/3 flex flex-col items-center block text-center md:text-left">
        <div className='relative block overflow-hidden rounded-lg border border-gray-300 shadow-lg dark:shadow-gray-700'>
          <span
            className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          ></span>
          <div className="h-50 w-full">
            <img 
              src={drive.logoUrl} 
              alt={drive.companyName} 
              className="h-full w-full rounded-lg" 
            />
          </div>
        </div>

        <h2 className="mt-4 max-w-sm text-xl font-semibold">{drive.companyName}</h2>
        <address className="text-gray-600 mt-4">
          {drive.address}
        </address>
        <div className="mt-4">
          <p className="font-semibold">Contact Person</p>
          <p>{drive.contactPerson.name} ({drive.contactPerson.role})</p>
          <p>Phone: {drive.contactPerson.phone}</p>
          <p>Email: {drive.contactPerson.email}</p>
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
        <h3 className="text-2xl font-bold mb-4">Job Description</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p><strong>Designation:</strong> {drive.designation}</p>
            <p><strong>Package:</strong> {drive.salaryPackage} per annum</p>
            <p><strong>Location:</strong> {drive.location}</p>
          </div>
          <div>
            <p><strong>Drive Date:</strong> {drive.driveDate}</p>
            <p><strong>Programs:</strong> {drive.programs}</p>
            <p><strong>Streams:</strong> {drive.streams}</p>
          </div>
          <div>
            <p><strong>Criteria:</strong></p>
            <div style={{ marginLeft: '20px' }}>
              <p>Max Backlogs: {drive.criteria.maxBacklogs}</p>
              <p>Throughout %: {drive.criteria.throughoutPercentage}</p>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <p><strong>Description:</strong> {drive.description ? drive.description : 'No description available.'}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-12 right-12 flex space-x-4">
        <button
          onClick={handleBackClick}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </button>
        {isCurrent && (
          <button
            onClick={handleApplyClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}

export default Details;
