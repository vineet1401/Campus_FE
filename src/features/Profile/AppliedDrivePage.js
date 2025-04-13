import React, { useEffect, useState } from "react";
import { fetchAppliedDrivesByUser } from "../../services/drive.service";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";
import { getUserIdFromToken } from "../../app/rbacAuth";
import { NavLink } from "react-router-dom";
import FeedbackForm from "../feedback/FeedbackForm";
import CompanyCard from "../../components/AppliedDrive/CompanyCard";

const appliedDrives = [
  {
    id: 1,
    company: "TCS Ninja",
    status: "Pending",
    details: "Online assessment completed, waiting for interview slot.",
  },
  {
    id: 2,
    company: "Infosys",
    status: "Selected",
    details: "Cleared interview round, offer letter awaited.",
  },
  {
    id: 3,
    company: "Wipro",
    status: "Rejected",
    details: "Did not clear the technical interview.",
  },
];

const AppliedDrivePage = () => {
  const dispatch = useDispatch();
  const userId = getUserIdFromToken();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  // State to store the applied drives
  const [appliedDrives, setAppliedDrives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [driveId, setDriveId] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  // Fetch applied drives when component mounts or userId changes
  useEffect(() => {
    const getAppliedDrives = async () => {
      try {
        const result = await fetchAppliedDrivesByUser(userId);
        if (result.status) {
          setAppliedDrives(result.data); // Store drives in state
        } else {
          dispatch(showNotification({ message: result.message, status: 0 }));
        }
      } catch (error) {
        dispatch(
          showNotification({
            message: "Error fetching applied drive",
            status: 0,
          })
        );
        console.error("Error fetching applied drives:", error);
      } finally {
        setLoading(false);
      }
    };

    getAppliedDrives();
  }, [userId]); // Dependency on userId to refetch data if it changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const filteredDrives = appliedDrives.filter((drive) => {
    const matchesSearch = drive.companyName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || drive.applicationStatus === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Render the UI based on loading, error, or data state
  if (loading) return <div>Loading applied drives...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center">Applied Drives</h2>

      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <input
          type="text"
          placeholder="Search by company name..."
          className="input input-bordered w-full md:max-w-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Filter Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-outline">
            Filter by Status
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {[
              "All",
              "Applied",
              "Shortlisted",
              "Interviewed",
              "Selected",
              "Rejected",
            ].map((status) => (
              <li key={status}>
                <button
                  onClick={() => handleStatusFilter(status)}
                  className={`${
                    filterStatus === status ? "font-bold text-primary" : ""
                  }`}
                >
                  {status}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filtered Drives */}
      <div className="space-y-6">
        {filteredDrives.length === 0 ? (
          <p className="text-center text-gray-500">No drives found.</p>
        ) : (
          filteredDrives.map((drive) => (
            <CompanyCard key={drive.driveId} drive={drive} setDriveId={setDriveId} />

          ))
        )}
      </div>

      <FeedbackForm driveId={driveId} />
    </div>
  );
};

export default AppliedDrivePage;
