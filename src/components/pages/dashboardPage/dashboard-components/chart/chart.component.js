import React from "react";
import "./chart.style.css";
import { BarChart, XYPlot, HorizontalGridLines } from "react-d3-components";

const Chart = ({ weatherData }) => {
  const length = weatherData.ClimateAverages[0].month.length;
  let tempPerMonth = [{}];

  for (let i = 0; i < length; i++) {
    tempPerMonth[i] = {
      x: weatherData.ClimateAverages[0].month[i].name,
      y: weatherData.ClimateAverages[0].month[i].absMaxTemp,
    };
  }

  console.log(tempPerMonth);

  let data = [
    {
      // values: [
      //   { x: "18-24", y: 7000 },
      //   { x: "25-34", y: 31000 },
      //   { x: "35-44", y: 34500 },
      //   { x: "45-55", y: 25000 },
      //   { x: "55-64", y: 7500 }
      // ]
      values: tempPerMonth,
    },
  ];

  return (
    <div className="chart">
      <h1 className="title">Temprature Per Month</h1>

      <BarChart
        data={data}
        width={347}
        height={307}
        margin={{ top: 10, bottom: 50, left: 50, right: 0 }}
      />
    </div>
  );
};

export default Chart;
