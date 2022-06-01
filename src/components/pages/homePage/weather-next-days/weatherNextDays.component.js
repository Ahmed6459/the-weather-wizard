import React from 'react';
import WeatherNextDaysItem from '../weather-next-days-item/weatherNextDaysItem.component';
import './weatherNextDays.style.css';

const WeatherNextDays = ({weatherData}) => {
    return(
        <div className="weather-next-days">
            <div className="weather-next-days-container">
                {
                    weatherData.weather.map(nextDayItem => {
                        return (
                            <WeatherNextDaysItem nextDayItem={nextDayItem} key={nextDayItem.date}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default WeatherNextDays;