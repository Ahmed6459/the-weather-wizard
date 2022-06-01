import React from "react";
import "./weatherNextDaysItem.style.css";

const WeatherNextDaysItem = ({ nextDayItem }) => {
    const img = nextDayItem.hourly[4].weatherIconUrl[0].value
  const date = new Date(nextDayItem.date);
  let day = date.getDay();
  switch (day) {
    case 0:
      day = "saturday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thrusday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    default:
      return;
  };
  return (
    <div className="weather-next-days-item">
      <p>{day}</p>
      <div className="item-img">
          <img src={img} alt=""/>
      </div>
      <p>{nextDayItem.maxtempC}&#8451;</p>
    </div>
  );
};

export default WeatherNextDaysItem;
