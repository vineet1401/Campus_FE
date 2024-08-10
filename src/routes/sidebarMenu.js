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
import { WalletIcon } from "@heroicons/react/16/solid";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/leads", // url
    icon: <FolderIcon className={iconClasses} />, // icon component
    name: "Drive", // name that appear in Sidebar
  },
  {
    path: "/app/transactions", // url
    icon: <PlusIcon className={iconClasses} />, // icon component
    name: "new drive", // name that appear in Sidebar
  },
  {
    path: "/app/charts", // url
    icon: <AcademicCapIcon className={iconClasses} />, // icon component
    name: "Alumani", // name that appear in Sidebar
  },
  {
    path: "/app/integration", // url
    icon: <BoltIcon className={iconClasses} />, // icon component
    name: "Assesment", // name that appear in Sidebar
  },
  {
    path: "/app/calendar", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Result", // name that appear in Sidebar
  },

  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Logout', // name that appear in Sidebar

  // //   submenu : [
  // //     {
  // //       path: '/login',
  // //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
  // //       name: 'Login',
  // //     },
  // //     {
  // //       path: '/register', //url
  // //       icon: <UserIcon className={submenuIconClasses}/>, // icon component
  // //       name: 'Register', // name that appear in Sidebar
  // //     },
  // //     {
  // //       path: '/forgot-password',
  // //       icon: <KeyIcon className={submenuIconClasses}/>,
  // //       name: 'Forgot Password',
  // //     },
  // //     {
  // //       path: '/app/blank',
  // //       icon: <DocumentIcon className={submenuIconClasses}/>,
  // //       name: 'Blank Page',
  // //     },
  // //     {
  // //       path: '/app/404',
  // //       icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
  // //       name: '404',
  // //     },
  // //   ]
  // },
  {
    path: "", //no url needed as this has submenu
    icon: <UsersIcon className={`${iconClasses} inline`} />, // icon component
    name: "Edit Profile", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/view-details", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "View Detail", // name that appear in Sidebar
      },
      {
        path: "/app/profile-personal", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Personal Detail", // name that appear in Sidebar
      },
      {
        path: "/app/profile-education", //url
        icon: <AcademicCapIcon className={submenuIconClasses} />, // icon component
        name: "Education Detail", // name that appear in Sidebar
      },
      {
        path: "/app/profile-professional", //url
        icon: <BriefcaseIcon className={submenuIconClasses} />, // icon component
        name: "Professional Detail", // name that appear in Sidebar
      },
      {
        path: "/app/profile-project", //url
        icon: <CodeBracketIcon className={submenuIconClasses} />, // icon component
        name: "Project Detail", // name that appear in Sidebar
      },
      // {
      //   path: '/app/settings-billing',
      //   icon: <WalletIcon className={submenuIconClasses}/>,
      //   name: 'Billing',
      // },
      // {
      //   path: '/app/settings-team', // url
      //   icon: <UsersIcon className={submenuIconClasses}/>, // icon component
      //   name: 'Team Members', // name that appear in Sidebar
      // },
    ],
  },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
  //   name: 'Documentation', // name that appear in Sidebar
  //   submenu : [
  //     {
  //       path: '/app/getting-started', // url
  //       icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
  //       name: 'Getting Started', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/features',
  //       icon: <TableCellsIcon className={submenuIconClasses}/>,
  //       name: 'Features',
  //     },
  //     {
  //       path: '/app/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses}/>,
  //       name: 'Components',
  //     }
  //   ]
  // },
];

export default routes;
