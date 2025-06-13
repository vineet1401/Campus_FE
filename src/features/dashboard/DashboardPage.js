// import DashboardStats from "./components/DashboardStats";
// import AmountStats from "./components/AmountStats";
// import PageStats from "./components/PageStats";

// import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
// import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
// import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
// import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
// import UserChannels from "./components/UserChannels";
// import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";
// import DashboardTopBar from "./components/DashboardTopBar";
// import { useDispatch } from "react-redux";
// import { showNotification } from "../../redux/headerSlice";
// import DoughnutChart from "./components/DoughnutChart";

// const statsData = [
//   {
//     title: "New Users",
//     value: "34.7k",
//     icon: <UserGroupIcon className="w-8 h-8" />,
//     description: "↗︎ 2300 (22%)",
//   },
//   {
//     title: "Total Sales",
//     value: "$34,545",
//     icon: <CreditCardIcon className="w-8 h-8" />,
//     description: "Current month",
//   },
//   {
//     title: "Pending Leads",
//     value: "450",
//     icon: <CircleStackIcon className="w-8 h-8" />,
//     description: "50 in hot leads",
//   },
//   {
//     title: "Active Users",
//     value: "5.6k",
//     icon: <UsersIcon className="w-8 h-8" />,
//     description: "↙ 300 (18%)",
//   },
// ];

// function DashboardPage() {
//   const dispatch = useDispatch();

//   const updateDashboardPeriod = (newRange) => {
//     // Dashboard range changed, write code to refresh your values
//     dispatch(
//       showNotification({
//         message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
//         status: 1,
//       })
//     );
//   };

//   return (
//     <>
//       {/** ---------------------- Select Period Content ------------------------- */}
//       <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

//       {/** ---------------------- Different stats content 1 ------------------------- */}
//       <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
//         {statsData.map((d, k) => {
//           return <DashboardStats key={k} {...d} colorIndex={k} />;
//         })}
//       </div>

//       {/** ---------------------- Different charts ------------------------- */}
//       <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
//         <LineChart />
//         <BarChart />
//       </div>

//       {/** ---------------------- Different stats content 2 ------------------------- */}

//       <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
//         <AmountStats />
//         <PageStats />
//       </div>

//       {/** ---------------------- User source channels table  ------------------------- */}

//       <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
//         <UserChannels />
//         <DoughnutChart />
//       </div>
//     </>
//   );
// }

// export default DashboardPage;




import React from "react";

function DashboardPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Training & Placement Cell - Campus Connect
      </h1>

      {/* Vision and Mission */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          To empower students with the right knowledge, skills, and values to excel in
          professional environments and become industry-ready individuals.
        </p>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To bridge the gap between academics and industry expectations.</li>
          <li>To provide guidance and opportunities for internships and placements.</li>
          <li>To conduct training programs for aptitude, technical, and soft skills.</li>
          <li>To establish strong relationships with corporate and industrial partners.</li>
        </ul>
      </div>

      {/* Placement Process Flow */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Placement Process Flow</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Student registration on the placement portal.</li>
          <li>Training sessions (aptitude, soft skills, technical).</li>
          <li>Company announcements and eligibility screening.</li>
          <li>Application and resume shortlisting.</li>
          <li>Written/Online test by the company.</li>
          <li>Group Discussion / Technical Interview.</li>
          <li>HR Interview and Final Offer.</li>
          <li>Joining Formalities and Feedback Collection.</li>
        </ol>
      </div>

      {/* Rules & Guidelines */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Placement Rules & Guidelines</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Each student is allowed only <strong>one offer in technical</strong> and <strong>one offer in non-technical</strong> domain.</li>
          <li>Once placed, the student cannot apply for further drives unless the new offer is at least <strong>2× the current offer</strong>.</li>
          <li>Disciplinary actions will be taken for no-shows in interviews without valid reasons.</li>
          <li>Students must attend all training sessions and mock interviews as part of placement preparation.</li>
          <li>All placement communication will be shared via official channels only.</li>
          <li>Dress code must be strictly followed during placement drives and interviews.</li>
        </ul>
      </div>

      {/* General Info */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">General Information</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Our college has partnered with 40+ top companies for campus recruitment.</li>
          <li>Placement season starts in August and ends in March every academic year.</li>
          <li>Pre-placement talks (PPTs) are mandatory before each company drive.</li>
          <li>Internship opportunities are also facilitated for pre-final year students.</li>
          <li>Students must keep their resumes updated on the portal.</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPage;
