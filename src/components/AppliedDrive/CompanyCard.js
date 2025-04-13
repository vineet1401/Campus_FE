import React from "react";
import { useState, useEffect } from "react";
import { getCompanyFeedback } from "../../services/feedback.service";
import { NavLink } from "react-router-dom";

const CompanyCard = ({ drive, setDriveId }) => {
  const handleGiveFeedback = () => {
    setDriveId(drive.driveId);
    document.getElementById("FeedbackFormModal").showModal();
  };

  return (
    <div
      key={drive.driveId}
      className="card bg-base-100 shadow-xl border rounded-lg"
    >
      <div className="card-body flex flex-col md:flex-row justify-between items-start gap-1">
        <div className="flex-1">
          {/* Drive Info Section */}
          <h3 className="card-title text-xl font-semibold">
            {drive.companyName}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <img
              src={drive.companyLogo}
              alt={drive.companyName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">
              {drive.jobDesignation}
            </span>
          </div>

          {/* Status Badge */}
          <div className="mt-1">
            <span
              className={`badge ${
                drive.applicationStatus === "Selected"
                  ? "badge-success"
                  : drive.applicationStatus === "Rejected"
                  ? "badge-error"
                  : "badge-warning"
              }`}
            >
              {drive.applicationStatus}
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-1 md:mt-0">
          {/* Action Buttons */}
          <NavLink to={`/app/drive-details/${drive?.driveId}`}>
            <button className="btn btn-primary w-full md:w-auto p-2 font-semibold text-sm w-max rounded-md">
              View Drive
            </button>
          </NavLink>
          <button
            onClick={handleGiveFeedback}
            className="bg-gray-500 text-white hover:bg-gray-600 p-2 font-semibold text-sm w-max rounded-md"
          >
            Give Feedback
          </button>
        </div>
      </div>

      {/* Footer with Detailed Info */}
      <div className="card-footer bg-base-200 p-4 rounded-lg mt-2">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="font-medium text-gray-700">Location:</p>
            <p className="text-sm text-gray-500">{drive.jobLocation}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Salary:</p>
            <p className="text-sm text-gray-500">{drive.jobSalary}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Drive Date:</p>
            <p className="text-sm text-gray-500">{drive.driveDate}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Coordinator:</p>
            <p className="text-sm text-gray-500">{drive.tnpCordinatorName}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700"> Coordinator Email:</p>
            <p className="text-sm text-gray-500">{drive.tnpCordinatorEmail}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Coordinator Phone:</p>
            <p className="text-sm text-gray-500">{drive.tnpCordinatorNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
