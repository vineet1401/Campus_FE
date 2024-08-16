import { useState, useEffect } from "react";
import DriveList from "./DriveList";
import { getDrives } from "./drivesAPI";

function Selector() {
  const [activeTab, setActiveTab] = useState("Current");
  const [drives, setDrive] = useState([]);

  useEffect(() => {
    // Fetch data and filter based on activeTab
    const allDrives = getDrives(); // Get the drives data from the drivesAPI.js file
    const filteredDrives = allDrives.filter((item) => item.status === activeTab);
    setDrive(filteredDrives);
  }, [activeTab]); // Re-run when activeTab changes

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
