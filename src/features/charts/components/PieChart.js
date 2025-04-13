// import React from 'react';
// import {
//   Chart as ChartJS,
//   Filler,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import TitleCard from '../../../components/Cards/TitleCard';

// ChartJS.register(ArcElement, Tooltip, Legend, Filler, Title);

// const PieChart = ({ title, data, labels }) => {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//   };

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: '# of Votes',
//         data: data,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
//           'rgba(75, 192, 192, 0.8)',
//           'rgba(153, 102, 255, 0.8)',
//           'rgba(255, 159, 64, 0.8)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <TitleCard title={title}>
//       <Pie options={options} data={chartData} />
//     </TitleCard>
//   );
// };

// export default PieChart;

import React from "react";
import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";

// Register plugins
ChartJS.register(ArcElement, Tooltip, Legend, Filler, Title, ChartDataLabels);

const PieChart = ({ title, data, labels }) => {
  const total = data.reduce((sum, value) => sum + Number(value), 0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      datalabels: {
        color: "#000",
        formatter: (value) => {
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
        anchor: "end",
        align: "start",
        offset: 12,
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TitleCard title={title}>
  <div className="relative w-full max-w-md h-[300px] mx-auto">
    {/* <Pie options={options} data={chartData} /> */}
      <Pie options={options} data={chartData}    />
  </div>
    </TitleCard>
  );
};

export default PieChart;
