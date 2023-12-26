import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);
interface Data {
  labels: string[];
  qty: number[];
}

const PieChart: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    axios.get<Data>("http://localhost:3002/sales").then((response) => {
      setData(response.data);
    });
  }, []);

  const chartData = data
    ? {
        labels: data.labels,

        datasets: [
          {
            data: data.qty,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#1abc9c",
              "#f39c12",
              "#8e44ad",
              "#3498db",
            ],
          },
        ],
      }
    : {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
      };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
