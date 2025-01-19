// All components <mapping/> with path for internal routes

import { lazy } from "react";
import { Admin, Alumni, Student } from "../app/rbacAuth";

// Pages for dashboard
const Dashboard = lazy(() => import("../pages/Dashboard"));

// Pages for Drive
const CreateDrive = lazy(() => import("../pages/Drive/CreateDrive"));
const DrivePage = lazy(() => import("../pages/Drive/DrivePage"));
const DriveDetails = lazy(() => import("../pages/Drive/DriveDetails"));

// Pages for Notice
const ViewNotice = lazy(() => import("../pages/Notice/ViewNotice"));
const AddNotice = lazy(() => import("../pages/Notice/AddNotice"));

// Pages for Feedback
const FeedbackCards = lazy(() => import("../pages/Drive/AppliedDrive"));
const ViewFeedback = lazy(() => import("../pages/Feedback/ViewFeedback"));

// Pages for Learning

const DSA = lazy(() => import("../pages/Learning/Coding"));

// Pages for Profile
const PersonalDetail = lazy(() => import("../pages/Profile/PersonalProfile"));
const EducationDetail = lazy(() => import("../pages/Profile/EducationProfile"));
const ExperienceDetail = lazy(() =>
  import("../pages/Profile/ExperienceProfile")
);
const ProjectDetail = lazy(() => import("../pages/Profile/ProjectProfile"));

const Welcome = lazy(() => import("../pages/Welcome"));
const Page404 = lazy(() => import("../pages/404"));

const routes = [
  {
    path: "dashboard", // the url
    component: <Dashboard />, // view rendered
  },
  {
    path: "view-notice", // the url
    component: <ViewNotice />, // view rendered
  },
  {
    path: "add-notice",
    component: (
      <Admin>
        <AddNotice />
      </Admin>
    ),
  },
  {
    path: "view-drive", // the url
    component: <DrivePage />, // view rendered
  },
  {
    path: "create-drive",
    component: (
      <Admin>
        <CreateDrive />
      </Admin>
    ),
  },
  {
    path: "welcome", // the url
    component: <Welcome />, // view rendered
  },
  {
    path: "profile-personal",
    component: (
      <Student>
        <PersonalDetail />
      </Student>
    ),
  },
  {
    path: "profile-education",
    component: (
      <Student>
        <EducationDetail />
      </Student>
    ),
  },
  {
    path: "profile-professional",
    component: (
      <Student>
        <ExperienceDetail />
      </Student>
    ),
  },
  {
    path: "profile-project",
    component: (
      <Student>
        <ProjectDetail />
      </Student>
    ),
  },

  {
    path: "drive-details/:id",
    component: <DriveDetails />,
  },
  {
    path: "feedback",
    component: 
    <FeedbackCards />,
  },
  {
    path:"dsa",
    component: <DSA />
  },
  {
    path: "404",
    component: <Page404 />,
  },
  {
    path: "view-feedback/:companyName",
    component: <ViewFeedback />,
  },
//  {
//   path:"/coding",
//   component: <Coding />
//  } 
];

export default routes;
