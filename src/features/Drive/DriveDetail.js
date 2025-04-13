import React, { useState, useEffect } from "react";
import { getDrives } from "./drivesAPI";
import { NavLink, useNavigate } from "react-router-dom";
import DriveDetailsSkeleton from "../../components/Drive/DriveDetailsSkeleton";
import {
  applyToDrive,
  deleteDriveById,
  getDriveById,
  withdrawApplication,
} from "../../services/drive.service";
import { getRoleFromToken, getUserIdFromToken } from "../../app/rbacAuth";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";

function DriveDetail({ id }) {
  const dispatch = useDispatch();
  const [drive, setDrive] = useState(null);
  const [isCurrent, setIsCurrent] = useState(false);
  const role = getRoleFromToken();
  const userId = getUserIdFromToken();
  const [hasApplied, setHasApplied] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (drive && drive.appliedStudents && userId) {
      const applied = drive.appliedStudents.some(
        (student) => student.userId === userId
      );
      setHasApplied(applied);
    }
  }, [drive, userId]);

  useEffect(() => {
    const fetchDrives = async () => {
      const drives = await getDriveById(id); // Fetch all drives
      setDrive(drives.data);
    };

    fetchDrives();
  }, [id]);

  useEffect(() => {
    const targetDate = new Date();
    const startDate = new Date(drive?.jobInfo?.startDate);
    const endDate = new Date(drive?.jobInfo?.endDate);

    if (targetDate >= startDate && targetDate <= endDate) {
      console.log("inside current");
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [id, drive]);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleApplyClick = async () => {
    console.log("my drive", id, userId);
    const result = await applyToDrive(id, userId);
    if (result.status) {
      alert("Applied successfully!");
      setHasApplied(true);
    } else {
      alert(result.message);
    }
  };

  const handleWithdraw = async () => {
    const result = await withdrawApplication(id, userId);
    if (result.status) {
      alert("Application withdrawn successfully!");
      setHasApplied(false);
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async () => {
    const deleteResult = await deleteDriveById(id);
    if (deleteResult.status) {
      dispatch(showNotification({ message: deleteResult.message, status: 1 }));
      window.history.back();
    } else {
      dispatch(showNotification({ message: deleteResult.message, status: 0 }));
    }
  };

  // if (loading) {
  //   return <DriveDetailsSkeleton />;
  // }

  if (!drive) {
    return <p>Drive not found</p>;
  }

  return (
    <>
      <div className="p-8 flex flex-col md:flex-row">
        {/* Left section */}
        <div className="md:w-1/3 flex flex-col items-center block text-center md:text-left">
          <div className="relative block overflow-hidden rounded-lg border border-gray-300 shadow-lg dark:shadow-gray-700">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="h-50 w-full">
              <img
                src={drive?.jobInfo?.imageUrl}
                alt={drive?.jobInfo?.companyName}
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>

          <h2 className="mt-4 max-w-sm text-xl font-semibold">
            {drive?.jobInfo?.companyName}
          </h2>
          <address className="text-gray-600 mt-4">
            {drive?.jobInfo?.companyAddress}
          </address>
          <div className="mt-4">
            <p className="font-semibold">Contact Person</p>
            <p>{drive?.jobInfo?.tnpCordinatorName}</p>
            <p>Phone: {drive?.jobInfo?.tnpCordinatorNumber}</p>
            <p>Email: {drive?.jobInfo?.tnpCordinatorEmail}</p>
          </div>
        </div>

        {/* Right section */}
        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
          <h3 className="text-2xl font-bold mb-4">Job Description</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Designation:</strong> {drive?.jobInfo?.jobDesignation}
              </p>
              <p>
                <strong>Package:</strong> {drive?.jobInfo?.jobSalary} per annum
              </p>
              <p>
                <strong>Location:</strong> {drive?.jobInfo?.companyAddress}
              </p>
            </div>
            <div>
              <p>
                <strong>Drive Date:</strong> {drive?.jobInfo?.driveDate}
              </p>
              <p>
                <strong>Programs:</strong> {drive?.jobInfo?.program}
              </p>
              <p>
                <strong>Streams:</strong> {drive?.jobInfo?.stream}
              </p>
              <p>
                <strong>Drive Registration Duration:</strong>{" "}
                {new Date(drive?.jobInfo?.startDate).toDateString()} to{" "}
                {new Date(drive?.jobInfo?.endDate).toDateString()}
              </p>
            </div>
            <div>
              <p>
                <strong>Criteria:</strong>
              </p>
              <div style={{ marginLeft: "20px" }}>
                <p>Max Backlogs: {drive?.jobInfo?.maxBacklog}</p>
                <p>Throughout %: {drive?.jobInfo?.throughoutPercentage}</p>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p>
                <strong>Description:</strong>{" "}
                {drive?.jobInfo?.jobDescription
                  ? drive?.jobInfo?.jobDescription
                  : "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="float-right m-5 bottom-12 right-12 flex space-x-4">
        <button
          onClick={handleBackClick}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </button>
        {role == "Admin" && (
          <>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Delete
            </button>
            <NavLink to={`/app/applied-student/${drive?._id}`}>
              <button className="btn btn-primary p-1 ">Applied Students</button>
            </NavLink>
          </>
        )}
        {role == "Student" && isCurrent && (
          <button
            onClick={handleApplyClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Apply
          </button>
        )}
        {role == "Student" && isCurrent && hasApplied && (
          <button
            onClick={handleWithdraw}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Withdraw  
          </button>
        )}
        <NavLink to={`/app/view-feedback/${drive?.jobInfo.companyName}/${drive?._id}`}>
          <button className="btn btn-primary p-1 ">View FeedBack</button>
        </NavLink>
      </div>
    </>
  );
}

export default DriveDetail;
