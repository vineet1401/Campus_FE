import { useState, useEffect } from "react";
import DriveList from "../../components/Drive/DriveList";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import FilterButtons from "../../components/Filter/FilterButtons";
import { getAllDrives } from "../../services/drive.service";

function DriveHomePage() {
  const dispatch = useDispatch();

  const tabList = ["Current", "Upcoming", "Finished"];

  const [activeTab, setActiveTab] = useState("Current");
  const [drives, setDrive] = useState([]);
  const [filteredDrives, setFilteredDrives] = useState([]);

  useEffect(() => {
    // Fetch drives and filter them based on the active tab
    const fetchAndFilterDrives = async () => {
      const response = await getAllDrives();

      if (response.status) {
        dispatch(
          showNotification({
            message: `${response.message}`,
            status: 1,
          })
        );

        const allDrives = response.data;
        setDrive(allDrives);

        // Apply filtering logic immediately after fetching the data
        const currentDate = new Date();
        const filtered = allDrives.filter((drive) => {
          const startDate = new Date(drive?.jobInfo?.startDate);
          const endDate = new Date(drive?.jobInfo?.endDate);
          if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return false; // Skip invalid dates
          }

          if (activeTab === "Current") {
            return startDate <= currentDate && endDate >= currentDate;
          } else if (activeTab === "Upcoming") {
            return startDate > currentDate;
          } else if (activeTab === "Finished") {
            return endDate < currentDate;
          }
          return false;
        });

        setFilteredDrives(filtered); // Set the filtered drives
      } else {
        dispatch(
          showNotification({
            message: `${response.message}`,
            status: 0,
          })
        );
      }
    };

    fetchAndFilterDrives(); // Fetch and filter drives when component mounts or when activeTab changes
  }, [activeTab]); // Re-run when activeTab changes

  // const updateDashboardPeriod = (newRange) => {
  //   dispatch(
  //     showNotification({
  //       message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
  //       status: 1,
  //     })
  //   );
  // };

  return (
    <>
      <div>
        <FilterButtons
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          tabList={tabList}
        />
        <div className="mt-4">
          <DriveList data={filteredDrives} /> {/* Display filtered drives */}
        </div>
      </div>
    </>
  );
}

export default DriveHomePage;
