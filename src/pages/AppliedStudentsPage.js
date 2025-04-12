import React from "react";
import TanStackTable from "../components/StudentsTabel/TanStackTable";

const AppliedStudentsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Applied Students</h1>
      <TanStackTable />
    </div>
  );
};

export default AppliedStudentsPage;
