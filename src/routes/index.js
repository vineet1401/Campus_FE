// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Welcome = lazy(() => import("../pages/Welcome"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Charts = lazy(() => import("../pages/Charts"));
const Leads = lazy(() => import("../pages/Leads"));
const Calendar = lazy(() => import("../pages/Calendar"));
const Team = lazy(() => import("../pages/Team"));
const Transactions = lazy(() => import("../pages/Transactions"));
const Bills = lazy(() => import("../pages/Bills"));
const PersonalDetail = lazy(() => import("../pages/PersonalProfile"));
const EducationDetail = lazy(() => import("../pages/EducationProfile"));
const ProfessionalDetail = lazy(() => import("../pages/ProfessionalProfile"));
const ProjectDetail = lazy(() => import("../pages/ProjectProfile"));
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));
const Feedbackform = lazy(()=> import("../pages/FeedbackForm")) 

const routes = [
  {
    path: "dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "welcome", // the url
    component: Welcome, // view rendered
  },
  {
    path: "leads",
    component: Leads,
  },
  {
    path: "settings-team",
    component: Team,
  },
  {
    path: "calendar",
    component: Calendar,
  },
  {
    path: "transactions",
    component: Transactions,
  },
  {
    path: "profile-personal",
    component: PersonalDetail,
  },
  {
    path: "profile-education",
    component: EducationDetail,
  },
  {
    path: "profile-professional",
    component: ProfessionalDetail,
  },
  {
    path: "profile-project",
    component: ProjectDetail,
  },

  {
    path: "settings-billing",
    component: Bills,
  },
  {
    path: "getting-started",
    component: GettingStarted,
  },
  {
    path: "features",
    component: DocFeatures,
  },
  {
    path: "components",
    component: DocComponents,
  },
  {
    path: "charts",
    component: Charts,
  },
  {
    path: "404",
    component: Page404,
  },
  {
    path: "blank",
    component: Blank,
  },
  {
    path: "feedback",
    component: Feedbackform,
  },
];

export default routes;
