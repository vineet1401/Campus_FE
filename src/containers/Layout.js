import PageContent from "./RightPageContent";
import LeftSidebar from "./LeftSidebar";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "./RightSidebar";
import { useEffect } from "react";
import { removeNotificationMessage } from "../redux/headerSlice";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { toast } from 'react-toastify';

function Layout() {
  const dispatch = useDispatch();
  // const { newNotificationMessage, newNotificationStatus } = useSelector(
  //   (state) => state.header
  // );

  // useEffect(() => {
  //   if (newNotificationMessage !== "") {
  //     if (newNotificationStatus === 1) toast.success(newNotificationMessage);
  //     if (newNotificationStatus === 0) toast.error(newNotificationMessage);
  //   }
  // }, [newNotificationMessage]);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <LeftSidebar />
        <PageContent />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />

      {/** Notification layout container */}
      <NotificationContainer />
    </>
  );
}

export default Layout;
