import React, { useEffect } from "react";
import TanStackTable from "../../components/StudentsTabel/TanStackTable";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../redux/headerSlice";

const AppliedStudentsPage = () => {
  const dispatch = useDispatch();
  const { driveId } = useParams(); // Get the ID from the URL parameters

  // Find the drive by ID

  useEffect(() => {
    dispatch(setPageTitle("Applied Student Detail")); // Set page title if drive is found
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Applied Students</h1>
      <TanStackTable driveId={driveId} />
    </div>
  );
};

export default AppliedStudentsPage;
