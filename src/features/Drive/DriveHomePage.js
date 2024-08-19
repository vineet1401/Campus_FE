import { useState, useEffect } from "react";
import DriveList from "../../components/Drive/DriveList";
import { getDrives } from "./drivesAPI";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import FilterButtons from "../../components/Filter/FilterButtons";

function DriveHomePage() {
  const dispatch = useDispatch();

  const tabList = ["Current", "Upcoming", "Finished"];

  const [activeTab, setActiveTab] = useState("Current");
  const [drives, setDrive] = useState([]);

  useEffect(() => {
    // Fetch data and filter based on activeTab
    const allDrives = getDrives(); // Get the drives data from the drivesAPI.js file
    const filteredDrives = allDrives.filter(
      (item) => item.status === activeTab
    );
    setDrive(filteredDrives);
  }, [activeTab]); // Re-run when activeTab changes

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      <div>
        <FilterButtons
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          tabList={tabList}
        />
        <div className="mt-4">
          <DriveList data={drives} />
        </div>
      </div>
    </>
  );
}

export default DriveHomePage;
