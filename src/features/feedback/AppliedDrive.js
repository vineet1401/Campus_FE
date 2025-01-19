import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CompanyCard from "../../components/AppliedDrive/CompanyCard";
import FeedbackForm from "./FeedbackForm";
import { getAllDrives } from "../../services/drive.service";
import { showNotification } from "../../../src/redux/headerSlice"; // Adjust import as needed


function AppliedDrivesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drives, setDrives] = useState([]);
  const [driveId,setDriveId] = useState("");
  const [companyName,setCompanyName] = useState("");
  const dispatch = useDispatch();

  


  // Fetch drives on component mount
  useEffect(() => {
    const fetchDrives = async () => {
      const response = await getAllDrives();
      if (response.status) {
        dispatch(
          showNotification({
            message: `${response.message}`,
            status: 1,
          })
        );
        setDrives(response.data || []); // Set drives data from API response
      } else {
        dispatch(
          showNotification({
            message: `${response.message}`,
            status: 0,
          })
        );
      }
    };

    fetchDrives();
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 p-4 border-c">
      {drives.map((drive) => (
        <CompanyCard key={drive._id} drive={drive} setDriveId={setDriveId} setCompanyName={setCompanyName} />
      ))}
      <FeedbackForm driveId={driveId} companyName={companyName}/>
    </div>
  );
}

export default AppliedDrivesList;
