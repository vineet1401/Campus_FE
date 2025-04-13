/** Icons are imported separatly to reduce build time */

import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import FolderIcon from "@heroicons/react/24/outline/FolderIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import BriefcaseIcon from "@heroicons/react/24/outline/BriefcaseIcon";
import CodeBracketIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import { PlusCircleIcon, WalletIcon } from "@heroicons/react/16/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

import { getRoleFromToken } from "../app/rbacAuth";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const role = getRoleFromToken();

const routes = [
  {
    path: "/app/dashboard", // url
    icon: <AcademicCapIcon className={iconClasses} />, // icon component
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Drives",
    submenu: [
      {
        path: "/app/view-drive",
        icon: <FolderIcon className={iconClasses} />,
        name: "View Drive",
      },
      ...(role == "Admin"
        ? [
          {
            path: "/app/create-drive",
            icon: <PlusCircleIcon className={iconClasses} />,
            name: "Create Drive",
          },
        ]
        : []),
    ],
  },

  {
    path: "",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Alumni",
    submenu: [
      {
        path: "/app/list-alumni",
        icon: <FolderIcon className={iconClasses} />,
        name: "View Alumni",
      },
      ...(role == "Admin"
        ? [
          {
            path: "/app/add-notice",
            icon: <PlusCircleIcon className={iconClasses} />,
            name: "Manage Alumni",
          },
        ]
        : []),
    ],
  },
  {
    path: "/app/forum", // url
    icon: <AcademicCapIcon className={iconClasses} />, // icon component
    name: "Forum", // name that appear in Sidebar
  },
  {
    path: "",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Notice",
    submenu: [
      {
        path: "/app/view-notice",
        icon: <FolderIcon className={iconClasses} />,
        name: "View Notice",
      },
      ...(role == "Admin"
        ? [
          {
            path: "/app/add-notice",
            icon: <PlusCircleIcon className={iconClasses} />,
            name: "Add Notice",
          },
        ]
        : []),
    ],
  },

  {
    path: "/app/feedback", // url
    icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
    name: "FeedBack", // name that appear in Sidebar
  },


  ...(role === "Student"
    ? [
      {
        path: "app/learning", // url
        icon: <DocumentTextIcon className={`${submenuIconClasses} inline`} />, // icon component
        name: "Learning", // name that appear in Sidebar
        submenu: [
          {
            path: "/app/dsa",
            icon: <DocumentTextIcon className={submenuIconClasses} />,
            name: "DSA",
          },
          {
            path: "/app/apti",
            icon: <DocumentTextIcon className={submenuIconClasses} />,
            name: "Aptitude",
          },
        ]

      },
      {
        path: "resume", // url
        icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
        name: "Resume Analyser", // name that appear in Sidebar


      },
      {
        path: "",
        icon: <UsersIcon className={`${iconClasses} inline`} />,
        name: "Profile",
        submenu: [
          {
            path: "/app/view-profile-details",
            icon: <UserIcon className={submenuIconClasses} />,
            name: "View Detail",
          },
          {
            path: "/app/profile-personal",
            icon: <UserIcon className={submenuIconClasses} />,
            name: "Personal Detail",
          },
          {
            path: "/app/profile-education",
            icon: <AcademicCapIcon className={submenuIconClasses} />,
            name: "Education Detail",
          },
          {
            path: "/app/profile-professional",
            icon: <BriefcaseIcon className={submenuIconClasses} />,
            name: "Professional Detail",
          },
          {
            path: "/app/profile-project",
            icon: <CodeBracketIcon className={submenuIconClasses} />,
            name: "Project Detail",
          },

        ],
      },
    ]
    : []),
];

export default routes;
