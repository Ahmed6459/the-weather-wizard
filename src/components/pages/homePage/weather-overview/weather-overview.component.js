import React from 'react';
import { Link } from 'react-router-dom';
import './weather-overview.style.css';

const WeatherOverview = ({weatherData}) => {
    // console.log('weather component', weatherData)
    const weatherDesc = weatherData.current_condition[0].weatherDesc[0].value;
    const weatherImg = weatherData.current_condition[0].weatherIconUrl[0].value;
    const tempratureInC = weatherData.current_condition[0].temp_C;
    const country = weatherData.nearest_area[0].country[0].value;
    const areaName = weatherData.nearest_area[0].areaName[0].value;
    return(
        <div className="weatherOverview">
            <div className="weatherOverviewContainer">
                <div className="weatherImg">
                    <img src={weatherImg} alt={weatherDesc}/>
                </div>
                <div className="weatherDesc">
                    <p>Today</p>
                    <h1>{country},</h1>
                    <p>"{areaName}"</p>
                    <p>Temprature: <span className='temprature'>{tempratureInC}&#8451;</span></p>
                    <p><span className='weatherType'>{weatherDesc}</span></p>
                    <Link to="/dashboard" className='moreDetails'>Click Here For More Details &#10132;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WeatherOverview;