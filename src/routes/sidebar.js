/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Square3Stack3DIcon from '@heroicons/react/24/outline/Square3Stack3DIcon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import NewspaperIcon from '@heroicons/react/24/outline/NewspaperIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/outline/ArrowLeftOnRectangleIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Square3Stack3DIcon className={iconClasses}/>, 
    name: 'Drives',
  },
  {   
    path: '/app/leads', // url
    icon: <PlusCircleIcon className={iconClasses}/>, // icon component
    name: 'New Drive', // name that appear in Sidebar
  },
  {
    path: '/app/transactions', // url
    icon: <MagnifyingGlassIcon className={iconClasses}/>, // icon component
    name: 'Search Student', // name that appear in Sidebar
  },  
  {
    path: '/app/charts', // url
    icon: <ChartBarIcon className={iconClasses}/>, // icon component
    name: 'Analytics', // name that appear in Sidebar
  },
  {
    path: '/app/integration', // url
    icon: <NewspaperIcon className={iconClasses}/>, // icon component
    name: 'Announcements', // name that appear in Sidebar
  },
  {
    path: '/app/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
    name: 'Calendar', // name that appear in Sidebar
  },

  {
    path: '/app/profile', //no url needed as this has submenu
    icon: <UserCircleIcon className={iconClasses}/>, // icon component
    name: 'Profile', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Billing',
      },
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Documentation', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/getting-started', // url
        icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
        name: 'Getting Started', // name that appear in Sidebar
      },
      {
        path: '/app/features',
        icon: <TableCellsIcon className={submenuIconClasses}/>, 
        name: 'Features',
      },
      {
        path: '/app/components',
        icon: <CodeBracketSquareIcon className={submenuIconClasses}/>, 
        name: 'Components',
      }
    ]
  },
  {
    path: '/app/logout', //url
    icon: <ArrowLeftOnRectangleIcon className={submenuIconClasses}/>, // icon component
    name: 'Logout', // name that appear in Sidebar
  },
]

export default routes




