import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FeedbackModal from "./FeedbackModal";

function CompanyCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Combine all drive data into one array
  const allDrives = [
    {
      id: 1,
      companyName: "Google",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png",
      salaryPackage: "12 LPA",
      driveDate: "2024-09-15",
      designation: "Software Engineer",
      location: "Pune",
      status: "Current",
      criteria: {
        maxBacklogs: 0,
        throughoutPercentage: "60%",
      },
      streams: "Computer Science",
      programs: "Bachelor, Master",
      description:
        "Google is looking for talented software engineers who can innovate and provide high-quality solutions.",
      address: "2300 Traverwood Dr. Ann Arbor, MI 48105, United States",
      contactPerson: {
        name: "Rae Lind",
        role: "Human Resource",
        phone: "+1 734-332-6500",
        email: "rae.lind@google.com",
      },
    },
    {
      id: 2,
      companyName: "Meta",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2021/10/Meta-Symbol.png",
      salaryPackage: "10 LPA",
      driveDate: "2024-09-20",
      designation: "Frontend Developer",
      location: "Mumbai",
      status: "Current",
      criteria: {
        maxBacklogs: 1,
        throughoutPercentage: "65%",
      },
      streams: "Information Technology",
      programs: "Bachelor",
      description:
        "Meta is hiring frontend developers with strong JavaScript and React skills.",
      address: "1 Hacker Way, Menlo Park, CA 94025, United States",
      contactPerson: {
        name: "John Doe",
        role: "Technical Recruiter",
        phone: "+1 650-543-4800",
        email: "john.doe@meta.com",
      },
    },
    {
      id: 3,
      companyName: "Amazon",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      salaryPackage: "8 LPA",
      driveDate: "2024-08-01",
      designation: "Data Analyst",
      location: "Bangalore",
      status: "Finished",
      criteria: {
        maxBacklogs: 2,
        throughoutPercentage: "55%",
      },
      streams: "Data Science",
      programs: "Master",
      description:
        "Amazon requires data analysts proficient in Python and SQL.",
      address: "410 Terry Ave N, Seattle, WA 98109, United States",
      contactPerson: {
        name: "Jane Smith",
        role: "HR Specialist",
        phone: "+1 206-266-1000",
        email: "jane.smith@amazon.com",
      },
    },
    {
      id: 4,
      companyName: "Apple",
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
      salaryPackage: "14 LPA",
      driveDate: "2024-10-10",
      designation: "Cyber Security Engineer",
      location: "Hyderabad",
      status: "Upcoming",
      criteria: {
        maxBacklogs: 0,
        throughoutPercentage: "70%",
      },
      streams: "Cyber Security",
      programs: "Bachelor, Master",
      description:
        "Apple is hiring cybersecurity engineers with experience in threat detection and mitigation.",
      address: "1 Apple Park Way, Cupertino, CA 95014, United States",
      contactPerson: {
        name: "Michael Johnson",
        role: "Recruitment Manager",
        phone: "+1 408-996-1010",
        email: "michael.johnson@apple.com",
      },
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 p-4 border-c">
      {allDrives.map((drive) => (
        <div
          key={drive.id}
          className="relative bg-darkWhite text-gray-800 w-full max-w-4xl shadow-lg  rounded-lg p-6 mb-6 border-spacing-1 border border-black border-b-4 border-b-blue-300"
        >
          <span className="absolute top-0 left-0 bg-sky-400 text-white px-6 py-1  text-sm font-bold rounded-md">
            Selected
          </span>
          <div className="grid grid-cols-6 items-center gap-4">
            <div className="col-span-1 p-2 bg-white rounded-lg">
              <img
                src={drive.logoUrl}
                alt={`${drive.companyName} Logo`}
                className="rounded-lg w-full scale-150"
              />
            </div>
            <div className="col-span-3">
              <h2 className="text-2xl font-bold">{drive.companyName}</h2>
              <hr className="my-2 border-gray-300" />
              <p className="text-orange-600 ">{drive.designation}</p>
            </div>
            <div className="grid grid-flow-row place-items-end col-span-2 text-right gap-2">
              <p className="text-orange-700 font-semibold text-md">
                Package: {drive.salaryPackage}
              </p>

              <p className="text-orange-700 font-semibold text-sm">
                Date: {drive.driveDate}
              </p>

              <button
                onClick={openModal}
                className="bg-gray-500 text-white hover:bg-gray-600 p-2 font-semibold text-sm w-max rounded-md"
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Feedback Modal */}
      <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default CompanyCard;
