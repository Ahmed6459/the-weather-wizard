import React from 'react';
import "./App.css";
import { useEffect, useState } from "react";

import {BrowserRouter, Route,Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./components/pages/homePage/HomePage";
import DashBoard from "./components/pages/dashboardPage/DashBoard";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedState, setSelectedState] = useState("cairo");
  const [isFetched, setIsFetched] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, Setlongitude] = useState("");

  navigator.geolocation.getCurrentPosition( (position) => {
    setLatitude( position.coords.latitude);
    Setlongitude (position.coords.longitude);
  });

  const qSearch = selectedState ? selectedState : latitude + "," + longitude;
  const apiName = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=5bd04464d9de426e98281008222705&q=${qSearch}&num_of_days=4&tp=3&format=json&includelocation=yes`

  useEffect(() => {
    
    fetch(`${apiName}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setWeatherData(data.data);
        setIsFetched(true);
      })
      .catch((err) => alert(err));
  }, [apiName, selectedState]);

  return (
    <div className="App">
      <Navbar />
        {
          isFetched && weatherData? (
            <BrowserRouter>        
        <Routes>
            <Route path="/" exact element={
            <HomePage
                weatherData={weatherData}
                setSelectedState={setSelectedState}
              />
              } />
        
  
            <Route path="/dashboard" element={
                      <DashBoard
                            weatherData={weatherData}
                            setSelectedState={setSelectedState}
                          />
            } />

        </Routes>
        </BrowserRouter>
          ) : null
        }
    </div>
  );
}

export default App;
