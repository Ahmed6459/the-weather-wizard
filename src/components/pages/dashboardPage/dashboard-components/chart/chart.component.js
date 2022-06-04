import React from "react";
import "./chart.style.css";
import * as d3 from "d3";

const Chart = ({ weatherData }) => {
  const length = weatherData.ClimateAverages[0].month.length;
  let temp = [];
  let months = [];

  for (let i = 0; i < length; i++) {
    temp[i] =
      parseInt(weatherData.ClimateAverages[0].month[i].absMaxTemp, 10) * 5;
    months[i] = weatherData.ClimateAverages[0].month[i].name;
  }

  //here:
  var svgWidth = 700;
  var svgHeight = 250;

  var svg = d3
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

  // var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
  var dataset = temp;

  var barPadding = 5;
  var barWidth = svgWidth / dataset.length;

  var barChart = svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
      return svgHeight - d;
    })
    .attr("height", function(d) {
      return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
      var translate = [barWidth * i, 0];
      return "translate(" + translate + ")";
    });

  return (
    <div className="chart">
      <h1 className="title">Temprature Per Month</h1>

      <svg></svg>
     
      <div className="month-container">
        {months.map((month) => {
          return (
            <div className="month-item" key={month}>
              {month}
            </div>
          );
        })}
      </div>
      {
        <div className="temp-all">
          <div className="temp-container">
            {temp.map((item) => {
              return (
                <div className="temp-item" key={item}>
                  {item/5}&#8451;
                </div>
              );
            })}
          </div>
        </div>
      }

     
    </div>
  );
};

// npm install webpack@4.19.1
export default Chart;
