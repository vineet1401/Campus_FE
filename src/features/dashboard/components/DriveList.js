import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { useNavigate } from 'react-router-dom';
import DriveSkeleton from "./DriveSkeleton";

const DriveList = ({ data }) => {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [isModalOpen, setModalOpen] = useState(false);
  //const [selectedDrive, setSelectedDrive] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    // Simulate fetch time
    setTimeout(() => {
      // setData(DriveListDrives());
      setLoading(false);
    }, 1000);
  }, [data]);

//const openModal = (drive) => {
//  setSelectedDrive(drive);
//  setModalOpen(true);
//};
//
//const closeModal = () => {
//  setSelectedDrive(null);
//  setModalOpen(false);
//};
  const handleonClick = (drive) => {
    navigate(`/app/drive-details/${drive.id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">DriveList Placement Drives</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2,3,4,5,6].map((_, index) => (
          <DriveSkeleton key={index} />
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

      {/* Modal component */}
      {/*<Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedDrive && (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {selectedDrive.companyName}
            </h1>
            <img
              src={selectedDrive.logoUrl}
              alt={selectedDrive.companyName}
              className="w-45 h-32 mb-4"
            />
            <p>
              <strong>Salary Package:</strong> {selectedDrive.salaryPackage}
            </p>
            <p>
              <strong>Designation:</strong> {selectedDrive.designation}
            </p>
            <p>
              <strong>Drive Date:</strong> {selectedDrive.driveDate}
            </p>
            <p>
              <strong>Location:</strong> {selectedDrive.location}
            </p>
            <p>
              <strong>Description:</strong> {selectedDrive.description}
            </p>
            
          </div>
        )}
      </Modal>*/}
    </div>
  );
};

export default DriveList;
//<a
//                        href="#"
//                        className="relative block shadow overflow-hidden rounded-lg border border-black dark:border-white p-4 sm:p-6 lg:p-8 shadow-lg dark:shadow-gray-700"
//                      >
//                        <span
//                          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
//                        ></span>
//
//                        <div key={drive.id} className="sm:flex sm:justify-between sm:gap-4">
//                          <div>
//                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-300 sm:text-xl">
//                            {drive.companyName}
//                            </h3>
//
//                            <p className="mt-1 text-xs font-medium text-gray-600">{drive.salaryPackage}</p>
//                          </div>
//
//                          <div className="hidden sm:block sm:shrink-0">
//                          <img src={drive.logoUrl} alt={drive.companyName} className="w-20 h-20 mx-auto mb-4 size-16 rounded-lg object-cover shadow-sm"/>
//                          </div>
//                        </div>
//
//                        <div className="mt-4">
//                          <p className="text-pretty text-sm text-gray-500">
//                          Designation: {drive.designation}
//                          </p>
//                        </div>
//
//                        <dl className="mt-6 flex gap-4 sm:gap-6">
//                          <div className="flex flex-col-reverse">
//                            <dt className="text-sm font-medium text-gray-600">{drive.driveDate}</dt>
//                            <dd className="text-xs text-gray-500">Date</dd>
//                          </div>
//
//                          <div className="flex flex-col-reverse">
//                            <dt className="text-sm font-medium text-gray-600">{drive.location}</dt>
//                            <dd className="text-xs text-gray-500">Location</dd>
//                          </div>
//                        </dl>
//                      </a>
