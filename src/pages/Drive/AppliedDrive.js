import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../redux/headerSlice";
import AppliedDrivesList from "../../features/feedback/AppliedDrive";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Feedback" }));
  }, []);

  return <AppliedDrivesList />;
}

export default InternalPage;
