import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../redux/headerSlice";
import { useParams } from "react-router-dom";
import ProfilePage from "../../features/Profile/ProfilePage";
import { getRoleFromToken } from "../../app/rbacAuth";

function InternalPage() {
  const dispatch = useDispatch();
  const { driveId } = useParams(); // this may be undefined
  const role =  getRoleFromToken(); // assuming auth state contains role and user info
  const personalData = useSelector((state) => state.studentData.personal); // replace with your actual state slice
  const educationData = useSelector((state) => state.studentData.education); // replace with your actual state slice
  const projectData = useSelector((state) => state.studentData.project); // replace with your actual state slice
  const experienceData = useSelector((state) => state.studentData.experience); // replace with your actual state slice

  useEffect(() => {
    dispatch(setPageTitle({ title: "Profile Page" }));
  }, [dispatch]);

  // Admin with a driveId (possibly accessing student profile from drive page)
  if (role === "Admin" && driveId) {
    return <ProfilePage userId={driveId} />;
  }

  // Student or no driveId, use data from Redux
  return <ProfilePage userData={{personalData, educationData, projectData, experienceData}} />;
}

export default InternalPage;
