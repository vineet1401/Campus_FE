import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CompanyCard from "../../components/AppliedDrive/CompanyCard";
import FeedbackForm from "./FeedbackForm";

function AppliedDrivesList() {
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
      {allDrives.map((drive, index) => (
        <CompanyCard key={index} drive={drive} />
      ))}
      <FeedbackForm />
    </div>
  );
}

export default AppliedDrivesList;
