import React from "react";
import Chart from "./dashboard-components/chart/chart.component";


const DashBoard = ({weatherData})=>{

    const dataForMonths= weatherData.ClimateAverages[0].month;
    console.log(dataForMonths);
    return(
      <div className="dashboard">
          <Chart weatherData={weatherData}/>
      </div>  
    );
}


export default DashBoard;