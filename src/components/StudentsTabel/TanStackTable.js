import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import DebouncedInput from "./DebouncedInput";
import DownloadBtn from "./DownloadBtn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { showNotification } from "../../redux/headerSlice";
import {
  getStudentApplicationsByDriveId,
  updateApplicationStatus,
} from "../../services/drive.service";

const TanStackTable = ({ driveId }) => {
  const columnHelper = createColumnHelper();
  const dispatch = useDispatch();

  const [appliedStudent, setAppliedStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppliedStudents = async () => {
    const response = await getStudentApplicationsByDriveId(driveId);
    if (response.status) {
      dispatch(showNotification({ message: response.message, status: 1 }));
      setAppliedStudent(response.data);
    } else {
      dispatch(showNotification({ message: response.message, status: 1 }));
      console.error(response.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAppliedStudents();
    console.log("driveId", appliedStudent);
  }, [driveId]);

  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("year", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Year",
    }),
    columnHelper.accessor("department", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Department",
    }),
    columnHelper.accessor("zprn", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "ZPRN",
    }),
    columnHelper.accessor("applicationStatus", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Status",
    }),
    columnHelper.accessor("userId", {
      cell: (info) => {
        return (
          <div className="flex items-center gap-2">
            <NavLink to={`/app/view-profile-details/${info.getValue()}`}>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                View Profile
              </button>
            </NavLink>
          </div>
        );
      },
      header: "Status",
    }),
    columnHelper.accessor("applicationStatus", {
      cell: (info) => {
        const dispatch = useDispatch();
        const userId = info.row.original.userId;
        const currentStatus = info.getValue();

        const handleChange = async (e) => {
          const newStatus = e.target.value;

          const confirmChange = window.confirm(
            `Are you sure you want to change the application status to "${newStatus}"?`
          );

          if (!confirmChange) return;

          try {
            const result = await updateApplicationStatus({
              driveId,
              userId,
              status: newStatus,
            });

            if (result.status) {
              dispatch(
                showNotification({
                  message: "Status updated successfully.",
                  status: 1,
                })
              );
              // fetchAppliedStudents(driveId); // Refresh data after update
              setAppliedStudent((prevState) =>
                prevState.map((student) =>
                  student.userId === userId
                    ? { ...student, applicationStatus: newStatus }
                    : student
                )
              );
            } else {
              dispatch(
                showNotification({
                  message: "Failed to update status.",
                  status: 0,
                })
              );
            }
          } catch (err) {
            console.error(err);
            dispatch(
              showNotification({
                message: "Something went wrong while updating the status.",
                status: 0,
              })
            );
          }
        };

        return (
          <select
            value={currentStatus}
            onChange={handleChange}
            className="p-1 border rounded"
          >
            <option value="Applied">Applied</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>
        );
      },
      header: "Application Status",
    }),
  ];

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: appliedStudent,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-4 max-w-6xl mx-auto text-white">
      {/* Top bar: Search and Download */}
      <div className="flex justify-between mb-4 items-center">
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="border p-2 font-lg shadow rounded text-black"
          placeholder="Search all columns..."
        />
        <DownloadBtn data={appliedStudent} fileName="students_data" />
      </div>

      {/* Table */}
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-indigo-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={columns.length}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-end mt-4 gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>
        <span className="flex items-center gap-1">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border p-1 rounded w-16 bg-transparent"
        />
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-transparent"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TanStackTable;
