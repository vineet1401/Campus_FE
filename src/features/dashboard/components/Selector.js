import { useState, useEffect } from "react";
import DriveList from "./DriveList";


const data = [
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
  },
  {
    id: 2,
    companyName: "Meta",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Symbol.png",
    salaryPackage: "10 LPA",
    driveDate: "2024-09-20",
    designation: "Frontend Developer",
    location: "Mumbai",
    status: "Current",
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
  },
];

function Selector() {
  const [activeTab, setActiveTab] = useState("Current");


  const [drives, setDrive] = useState([]);

  useEffect(() => {
    (function () {
      setDrive(data.filter((item) => item.status == activeTab));
    })();
  }, [activeTab]);

  return (
    <div>
      <div className="flex w-full join flex-col lg:flex-row">
        <button
          onClick={() => setActiveTab("Current")}
          className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
            activeTab === "Current"
              ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white"
              : ""
          }`}
        >
          Current
        </button>
        <button
          onClick={() => setActiveTab("Finished")}
          className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
            activeTab === "Finished"
              ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white"
              : ""
          }`}
        >
          Finished
        </button>
        <button
          onClick={() => setActiveTab("Upcoming")}
          className={`card stats shadow rounded-box join-item grid h-10 flex-grow place-items-center dark:text-slate-300 ${
            activeTab === "Upcoming"
              ? "bg-blue-700 transition delay-100 duration-300 ease-in-out text-white"
              : ""
          }`}
        >
          Upcoming
        </button>
      </div>

      <div className="mt-4">
        <DriveList data={drives} />
      </div>
    </div>
  );
}

export default Selector;
