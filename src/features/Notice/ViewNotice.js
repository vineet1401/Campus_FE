import { useEffect, useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import {
  deleteNotification,
  getAllNotifications,
} from "../../services/notice.service";
import FilterButtons from "../../components/Filter/FilterButtons";
import { getRoleFromToken } from "../../app/rbacAuth";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/headerSlice";

function ViewNotice() {
  const dispatch = useDispatch();
  const role = getRoleFromToken();

  const tabList = ["Company Drive", "New Company Arrival"];

  const [activeTab, setActiveTab] = useState("Company Drive");
  const [notice, setNotice] = useState([]);
  const [filteredNotice, setFilteredNotice] = useState([]);

  const fetchAndFilterNotice = async () => {
    const response = await getAllNotifications();

    if (response.status) {
      // dispatch(
      //   showNotification({
      //     message: `${response.message}`,
      //     status: 1,
      //   })
      // );

      const allNotice = response.data;
      setNotice(allNotice);

      console.log("notice", notice);

      // Apply filtering logic immediately after fetching the data
      const filtered = allNotice.filter((notice) => {
        return notice.notifyType === activeTab;
      });

      console.log("fil", filtered);

      setFilteredNotice(filtered); // Set the filtered Notice
    } else {
      dispatch(
        showNotification({
          message: `${response.message}`,
          status: 0,
        })
      );
    }
  };
  useEffect(() => {
    // Fetch Notice and filter them based on the active tab

    fetchAndFilterNotice(); // Fetch and filter Notice when component mounts or when activeTab changes
  }, [activeTab]); // Re-run when activeTab changes

  const handleDelete = async (id, title) => {
    alert(`Deleting Notice of ${title}`);
    const deleteResult = await deleteNotification(id);
    if (deleteResult.status) {
      dispatch(showNotification({ message: deleteResult.message, status: 1 }));
      // window.history.back();
      setFilteredNotice((prev) =>
        prev.filter((notice) => {
          return notice.notifyType === activeTab && notice._id != id;
        })
      )
    } else {
      dispatch(showNotification({ message: deleteResult.message, status: 0 }));
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <FilterButtons
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          tabList={tabList}
        />
        {filteredNotice.map((not) => (
          <TitleCard key={not._id} title={not.notifyTitle} topMargin={"mt-2"}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <img
                  alt="icon"
                  src={i.icon}
                  className="w-12 h-12 inline-block mr-4"
                /> */}
                <div>
                  <p className="font-semibold">{not.notifyTitle}</p>
                  <p>{not.notifyDescription}</p>
                  <p>
                    <strong>Type:</strong> {not.notifyType}
                  </p>

                  <p>
                    <strong>Date:</strong> {new Date(not.notifyDate).toDateString()}
                  </p>
                </div>
              </div>
              {role == "Admin" && (
                <button
                  onClick={() => handleDelete(not._id, not.notifyTitle)}
                  className="btn bg-red-600 ml-4"
                >
                  Delete
                </button>
              )}
            </div>
          </TitleCard>
        ))}
      </div>
    </>
  );
}

export default ViewNotice;