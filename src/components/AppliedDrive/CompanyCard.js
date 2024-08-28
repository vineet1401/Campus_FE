import React from "react";

const CompanyCard = ({ drive, setDriveId}) => {


  const handleGiveFeedback =()=>{
    setDriveId(drive._id)
    document.getElementById("FeedbackFormModal").showModal()

  }
  return (
    <div
      key={drive?.jobInfo?._id}
      className="relative bg-darkWhite text-gray-800 w-full max-w-4xl shadow-lg  rounded-lg p-6 mb-6 border-spacing-1 border border-black border-b-4 border-b-blue-300"
    >
      <span className="absolute top-0 left-0 bg-sky-400 text-white px-6 py-1  text-sm font-bold rounded-md">
        Selected
      </span>
      <div className="grid grid-cols-6 items-center gap-4">
        <div className="col-span-1 p-2 bg-white rounded-lg">
          <img
            src={drive?.jobInfo?.imageUrl}
            alt={`${drive?.jobInfo?.companyName} Logo`}
            className="rounded-lg w-full scale-150"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-bold">{drive?.jobInfo?.companyName}</h2>
          <hr className="my-2 border-gray-300" />
          <p className="text-orange-600 ">{drive?.jobInfo?.jobDesignation}</p>
        </div>
        <div className="grid grid-flow-row place-items-end col-span-2 text-right gap-2">
          <p className="text-orange-700 font-semibold text-md">
            Package: {drive?.jobInfo?.jobSalary}
          </p>

          <p className="text-orange-700 font-semibold text-sm">
            Date: {drive?.jobInfo?.driveDate}
          </p>

          <button
            // onClick={() =>
              
            // }
            onClick={handleGiveFeedback}
            className="bg-gray-500 text-white hover:bg-gray-600 p-2 font-semibold text-sm w-max rounded-md"
          >
            Give Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
