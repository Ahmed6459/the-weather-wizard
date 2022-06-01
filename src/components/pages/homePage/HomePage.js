import React from "react";
import WeatherNextDays from "./weather-next-days/weatherNextDays.component";
import Search from "./search/search.component";
import WeatherOverview from "./weather-overview/weather-overview.component";
import './HomePage.style.css';

const HomePage = ({weatherData, setSelectedState})=>{
    // console.log('home',weatherData);
    return(
        
                <div className="homePage">
                <Search weatherData={weatherData} setSelectedState={setSelectedState}/>
                <WeatherOverview weatherData={weatherData}/>
                <WeatherNextDays weatherData={weatherData}/>
                </div>
    )
}

export default HomePage