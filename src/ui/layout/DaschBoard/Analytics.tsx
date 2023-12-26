import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import BarChart from "./BarChart";
import Piechart from "./Piechart";
import axios from "axios";
import Sidebar from "../SideBarData/Sidebar";
import Navbar from "../Navbar/Navbar";


interface Data {
  qty: number[];
  labels: string[];
}

const Analytics: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    axios.get<Data>("http://localhost:3002/sales").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  return (
    <>
   
    <Navbar></Navbar>
    <div className="container-sidebar">
      <div>
        <h3 className="heading">Analytics</h3>
      </div>
      <div className="card">
        <div className="card-left">
          <h5 className="card-title">Welcome Back,</h5>
          <h6 className="card-subtitle">Analytics Dashboard</h6>
          <img
            src="https://appstack.bootlab.io/img/illustrations/searching.png"
            className="image-logo"
            alt=""
          />
        </div>
      </div>
      <div className="charts">
        <div className="chart1">
          <BarChart
            data={data?.qty as number[]}
            labels={data?.labels as string[]}
          />
        </div>
        <div className="chart2">
          <Piechart />
        </div>
      </div>
    </div>
    </>
  );
};

export default Analytics;
